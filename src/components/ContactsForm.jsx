import React, { useState } from 'react';
import { Modal, Box, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const ContactForm = ({ open, handleClose, addContact }) => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('Male');
  const [type, setType] = useState('Personal');

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact({ name, gender, type });
    setName('');
    setGender('Male');
    setType('Personal');
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={{ p: 4, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24 }}>
        <h2>Add Contact</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Gender</InputLabel>
            <Select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel>Type</InputLabel>
            <Select
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <MenuItem value="Personal">Personal</MenuItem>
              <MenuItem value="Business">Business</MenuItem>
            </Select>
          </FormControl>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Button type="submit" variant="contained" color="primary">
              Add Contact
            </Button>
            <Button variant="contained" color="secondary" onClick={handleClose}>
              Cancel
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};

export default ContactForm;
