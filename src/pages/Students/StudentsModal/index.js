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

const StudentsModal = (props) => {
  const [studentData, setStudentData] = useState(null);
  useEffect(
    () =>
      setStudentData({
        ...props.selectedStudent,
        sex: props.selectedStudent && props.selectedStudent.sex === 'M' ? '0' : '1',
        dateOfBirthday:
          (props.selectedStudent &&
            props.selectedStudent.dateOfBirthday.split('/').reverse().join('-')) ||
          defaultBdata,
      }),
    [props.selectedStudent]
  );
  const handleChange = (key) => (event) => {
    setStudentData({ ...studentData, [key]: event.target.value });
  };
  const handleClose = () => {
    setStudentData(null);
    props.handleClose();
  };

  const handleSave = () => {
    const resultData = { ...studentData, sex: Number(studentData.sex) };
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
            onChange={handleChange('firstName')}
            className='text-field'
            size='small'
            id='outlined-basic'
            label='First Name'
            value={studentData?.firstName || ''}
            variant='outlined'
          />
          <TextField
            onChange={handleChange('surname')}
            className='text-field'
            size='small'
            id='outlined-basic'
            label='Last Name'
            value={studentData?.surname || ''}
            variant='outlined'
          />
          <TextField
            onChange={handleChange('patronymic')}
            className='text-field'
            size='small'
            id='outlined-basic'
            label='Patronymic'
            value={studentData?.patronymic || ''}
            variant='outlined'
          />
          <TextField
            onChange={handleChange('address')}
            className='text-field'
            size='small'
            id='outlined-basic'
            label='Address'
            value={studentData?.address || ''}
            variant='outlined'
          />
          <TextField
            onChange={handleChange('dateOfBirthday')}
            className='text-field'
            id='date'
            label='Birthday'
            type='date'
            defaultValue={defaultBdata}
            value={studentData?.dateOfBirthday || defaultBdata}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <RadioGroup
            aria-label='gender'
            value={studentData?.sex || '0'}
            name='gender1'
            onChange={handleChange('sex')}
          >
            <FormControlLabel value='0' control={<Radio />} label='Male' />
            <FormControlLabel value='1' control={<Radio />} label='Female' />
          </RadioGroup>
          <FormControl className='text-field' variant='outlined'>
            <InputLabel id='demo-simple-select-outlined-label'>Speciality</InputLabel>
            <Select
              onChange={handleChange('specialtyId')}
              labelId='demo-simple-select-outlined-label'
              id='demo-simple-select-outlined'
              label='Speciality'
              value={studentData?.specialtyId || ''}
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

export default StudentsModal;
