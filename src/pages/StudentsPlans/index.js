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
  sequencedStudentsPlansFields,
  tableStudentsPlansTitles,
} from '../../core/constants/intiail';
import StudentsPlansModal from './StudentsPlansModal';

const StudentsPlans = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedStudentPlan, setSelectedStudentPlan] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();
  const studentsPlans = useSelector((state) => state.studentsPlansState.studentsPlans);
  const isLoading = useSelector((state) => state.studentsPlansState.isLoading);
  const specialities = useSelector((state) => state.specialitiesState.specialities);
  console.log({ studentsPlans });
  useEffect(() => {
    dispatch(getStudentsPlansThunk());
  }, [dispatch]);
  const getSpecialityName = useCallback(
    (specialityId) => {
      return (
        specialities && specialities.find((speciality) => speciality.id === specialityId)?.title
      );
    },
    [specialities]
  );
  const studentsPlansWithSpecialityNames = useMemo(
    () =>
      studentsPlans &&
      studentsPlans.map((studentPlan) => ({
        ...studentPlan,
        specialityName:
          studentPlan.specialtyView?.title || getSpecialityName(studentPlan.specialtyId),
      })),
    [getSpecialityName, studentsPlans]
  );

  const handleClose = () => {
    setSelectedStudentPlan(null);
    setModalOpen(false);
  };
  const handleDelete = (id) => {
    dispatch(deleteStudentsPlanThunk(id));
  };
  const handleCreate = () => {
    setModalOpen(true);
    setIsEdit(false);
  };

  const handleEdit = (studentPlan) => {
    setIsEdit(true);
    setSelectedStudentPlan(studentPlan);
    setModalOpen(true);
  };

  const saveStudent = (studentPlan) => {
    setSelectedStudentPlan(null);
    isEdit
      ? dispatch(editStudentsPlanThunk(studentPlan))
      : dispatch(createStudentsPlanThunk(studentPlan));
  };
  return (
    <div className='data-wrapper'>
      <PageTitle title='Students plans' />
      <StudentsPlansModal
        selectedStudentPlan={selectedStudentPlan}
        handleClose={handleClose}
        modalOpen={modalOpen}
        specialities={specialities}
        handleItemSave={saveStudent}
        title={
          isEdit && selectedStudentPlan
            ? `Edit student plan ${
                selectedStudentPlan.specialtyView?.title ||
                getSpecialityName(selectedStudentPlan.specialtyId)
              }`
            : 'Add new Student plan'
        }
        saveBtnTitle={isEdit ? 'Save' : 'Create'}
      />
      <div className='button-wrapper'>
        <Button name='Add student plan' handleClick={handleCreate}>
          <FontAwesomeIcon className='fa' icon={faPlus} />
        </Button>
      </div>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        studentsPlansWithSpecialityNames && (
          <CustomTable
            sequencedFields={sequencedStudentsPlansFields}
            tableTitles={tableStudentsPlansTitles}
            tableData={studentsPlansWithSpecialityNames}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        )
      )}
    </div>
  );
};

export default StudentsPlans;
