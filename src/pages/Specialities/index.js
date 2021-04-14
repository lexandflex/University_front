import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../core/components/Button';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingScreen from '../../core/components/LoadingScreen';
import PageTitle from '../../core/components/PageTitle';
import CustomTable from '../../core/components/Table';
import {
  createStudentsPlanThunk,
  deleteStudentsPlanThunk,
  editStudentsPlanThunk,
  getStudentsPlansThunk,
} from '../../core/thunks/studentsPlans';
import '../../index.scss';
import {
  sequencedSpecialitiesFields,
  sequencedStudentsPlansFields,
  tableSpecialitiesTitles,
  tableStudentsPlansTitles,
} from '../../core/constants/intiail';
import {
  createSpecialityThunk,
  deleteSpecialityThunk,
  editSpecialityThunk,
  getSpecialitiesThunk,
} from '../../core/thunks/specialities';
import SpecialityModal from './SpecialityModal';

const Specialities = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSpeciality, setSelectedStudentPlan] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.studentsPlansState.isLoading);
  const specialities = useSelector((state) => state.specialitiesState.specialities);
  const faculties = useSelector((state) => state.facultiesState.faculties);

  const getFacultyName = useCallback(
    (facultyId) => {
      return faculties && faculties.find((faculty) => faculty.id === facultyId)?.title;
    },
    [faculties]
  );

  const specialitiesWithFacultyNames = useMemo(
    () =>
      specialities &&
      specialities.map((speciality) => ({
        ...speciality,
        facultyName: speciality.facultyView?.title || getFacultyName(speciality.specialtyId),
      })),
    [getFacultyName, specialities]
  );

  useEffect(() => {
    dispatch(getSpecialitiesThunk());
  }, [dispatch]);

  const handleClose = () => {
    setSelectedStudentPlan(null);
    setModalOpen(false);
  };
  const handleDelete = (id) => {
    dispatch(deleteSpecialityThunk(id));
  };
  const handleCreate = () => {
    setModalOpen(true);
    setIsEdit(false);
  };

  const handleEdit = (speciality) => {
    setIsEdit(true);
    setSelectedStudentPlan(speciality);
    setModalOpen(true);
  };

  const saveStudent = (speciality) => {
    setSelectedStudentPlan(null);
    isEdit
      ? dispatch(editSpecialityThunk(speciality))
      : dispatch(createSpecialityThunk(speciality));
  };
  return (
    <>
      <PageTitle title='Specialities' />
      <div className='data-wrapper'>
        <SpecialityModal
          selectedSpeciality={selectedSpeciality}
          handleClose={handleClose}
          modalOpen={modalOpen}
          handleItemSave={saveStudent}
          faculties={faculties}
          title={
            isEdit && selectedSpeciality
              ? `Edit speciality ${selectedSpeciality?.title}`
              : 'Add new speciality'
          }
          saveBtnTitle={isEdit ? 'Save' : 'Create'}
        />
        <div className='button-wrapper'>
          <Button name='Add speciality' handleClick={handleCreate}>
            <FontAwesomeIcon className='fa' icon={faPlus} />
          </Button>
        </div>
        {isLoading ? (
          <LoadingScreen />
        ) : (
          specialitiesWithFacultyNames && (
            <CustomTable
              sequencedFields={sequencedSpecialitiesFields}
              tableTitles={tableSpecialitiesTitles}
              tableData={specialitiesWithFacultyNames}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          )
        )}
      </div>
    </>
  );
};

export default Specialities;
