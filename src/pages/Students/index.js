import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomTable from '../../core/components/Table';
import {
  createStudentThunk,
  deleteStudentThunk,
  editStudentThunk,
  getStudentsThunk,
} from '../../core/thunks/students';
import { sequencedStudentsFields, tableStudentsTitles } from '../../core/constants/intiail';
import { getFormattedDate } from '../../core/helpers/date';
import Button from '../../core/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import '../../index.scss';
import LoadingScreen from '../../core/components/LoadingScreen';
import StudentsModal from './StudentsModal';
import PageTitle from '../../core/components/PageTitle';

const Students = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();
  const students = useSelector((state) => state.studentsState.students);
  const isLoading = useSelector((state) => state.studentsState.isLoading);
  const specialities = useSelector((state) => state.specialitiesState.specialities);

  const getSpecialityName = useCallback(
    (specialityId) => {
      return (
        specialities && specialities.find((speciality) => speciality.id === specialityId)?.title
      );
    },
    [specialities]
  );
  const studentsWithSpecialityNames = useMemo(
    () =>
      students &&
      students.map((student) => ({
        ...student,
        sex: student.sex === 0 ? 'M' : 'F',
        dateOfBirthday: getFormattedDate(student.dateOfBirthday),
        specialityName: getSpecialityName(student.specialtyId),
      })),
    [getSpecialityName, students]
  );
  useEffect(() => {
    dispatch(getStudentsThunk());
  }, [dispatch]);

  const handleClose = () => {
    setSelectedStudent(null);
    setModalOpen(false);
  };
  const handleDelete = (id) => {
    dispatch(deleteStudentThunk(id));
  };
  const handleCreate = () => {
    setModalOpen(true);
    setIsEdit(false);
  };

  const handleEdit = (student) => {
    setIsEdit(true);
    setSelectedStudent(student);
    setModalOpen(true);
  };
  const saveStudent = (student) => {
    setSelectedStudent(null);
    isEdit ? dispatch(editStudentThunk(student)) : dispatch(createStudentThunk(student));
  };

  return (
    <div className='data-wrapper'>
      <PageTitle title='Students' />
      <StudentsModal
        selectedStudent={selectedStudent}
        handleClose={handleClose}
        modalOpen={modalOpen}
        specialities={specialities}
        handleItemSave={saveStudent}
        title={
          isEdit && selectedStudent
            ? `Edit student ${selectedStudent.surname} ${selectedStudent.firstName}`
            : 'Add new Student'
        }
        saveBtnTitle={isEdit ? 'Save' : 'Create'}
      />
      <div className='button-wrapper'>
        <Button name='Add student' handleClick={handleCreate}>
          <FontAwesomeIcon className='fa' icon={faUserPlus} />
        </Button>
      </div>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        studentsWithSpecialityNames && (
          <CustomTable
            sequencedFields={sequencedStudentsFields}
            tableTitles={tableStudentsTitles}
            tableData={studentsWithSpecialityNames}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        )
      )}
    </div>
  );
};

export default Students;
