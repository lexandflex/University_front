import React, { useEffect, useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';
import '../../Data.scss';
import { defaultBdata } from '../../../core/constants/intiail';

const StudentsPlansModal = (props) => {
  const [studentPlansData, setStudentPlansData] = useState(props.selectedStudentPlan);
  useEffect(
    () =>
      setStudentPlansData({
        ...props.selectedStudentPlan,
      }),
    [props.selectedStudentPlan]
  );
  console.log({ studentPlansData });
  const handleChange = (key) => (event) => {
    setStudentPlansData({ ...studentPlansData, [key]: event.target.value });
  };
  const handleClose = () => {
    setStudentPlansData(null);
    props.handleClose();
  };

  const handleSave = () => {
    const resultData = { ...studentPlansData, semester: Number(studentPlansData.semester) };
    delete resultData.specialityName;
    delete resultData.specialtyView;
    props.handleItemSave(resultData);
    handleClose();
  };
  return (
    <div className='dialog-wrapper'>
      <Dialog
        fullWidth
        className='dialog-wrapper'
        disableBackdropClick
        open={props.modalOpen}
        onClose={handleClose}
      >
        <div className='dialog-data'>
          <DialogTitle style={{ cursor: 'move' }} id='draggable-dialog-title'>
            {props.title}
          </DialogTitle>
          <TextField
            onChange={handleChange('semester')}
            className='text-field'
            size='small'
            id='outlined-basic'
            label='Semester'
            value={studentPlansData?.semester || ''}
            variant='outlined'
          />
          <FormControl className='text-field' variant='outlined'>
            <InputLabel id='demo-simple-select-outlined-label'>Speciality</InputLabel>
            <Select
              onChange={handleChange('specialtyId')}
              labelId='demo-simple-select-outlined-label'
              id='demo-simple-select-outlined'
              label='Speciality'
              value={studentPlansData?.specialtyId || ''}
            >
              {props.specialities &&
                props.specialities.map((speciality) => (
                  <MenuItem key={speciality.id} value={speciality.id}>
                    {speciality.title}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSave}>{props.saveBtnTitle}</Button>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
};

export default StudentsPlansModal;
