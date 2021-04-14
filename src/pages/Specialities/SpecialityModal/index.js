import React, { useEffect, useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';
import '../../Data.scss';

const SpecialityModal = (props) => {
  const [specialityData, setSpecialityData] = useState(props.selectedSpeciality);
  useEffect(
    () =>
      setSpecialityData({
        ...props.selectedSpeciality,
        facultyId: props.selectedSpeciality && props.selectedSpeciality.facultyView.id,
      }),
    [props.selectedSpeciality]
  );
  const handleChange = (key) => (event) => {
    setSpecialityData({ ...specialityData, [key]: event.target.value });
  };
  const handleClose = () => {
    setSpecialityData(null);
    props.handleClose();
  };

  const handleSave = () => {
    const resultData = { ...specialityData, admissionPlan: Number(specialityData.admissionPlan) };
    delete resultData.facultyName;
    delete resultData.facultiView;
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
            onChange={handleChange('title')}
            className='text-field'
            size='small'
            id='outlined-basic'
            label='Speciality Name'
            value={specialityData?.title || ''}
            variant='outlined'
          />
          <TextField
            onChange={handleChange('admissionPlan')}
            className='text-field'
            size='small'
            id='outlined-basic'
            label='Admission plan'
            value={specialityData?.admissionPlan || ''}
            variant='outlined'
          />
          <FormControl className='text-field' variant='outlined'>
            <InputLabel id='demo-simple-select-outlined-label'>Faculty</InputLabel>
            <Select
              onChange={handleChange('facultyId')}
              labelId='demo-simple-select-outlined-label'
              id='demo-simple-select-outlined'
              label='Speciality'
              value={specialityData?.facultyId || ''}
            >
              {props.faculties &&
                props.faculties.map((faculty) => (
                  <MenuItem key={faculty.id} value={faculty.id}>
                    {faculty.title}
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

export default SpecialityModal;
