import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Box, TextField, Select, MenuItem } from '@mui/material';

const Contact = ({ contact, updateContact, deleteContact }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(contact.name);
  const [gender, setGender] = useState(contact.gender);
  const [type, setType] = useState(contact.type);

  const handleUpdate = () => {
    updateContact({ id: contact.id, name, gender, type });
    setIsEditing(false);
  };

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        {isEditing ? (
          <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField 
              label="Name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              fullWidth
            />
            <Select 
              value={gender} 
              onChange={(e) => setGender(e.target.value)} 
              fullWidth
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
            </Select>
            <Select 
              value={type} 
              onChange={(e) => setType(e.target.value)} 
              fullWidth
            >
              <MenuItem value="Personal">Personal</MenuItem>
              <MenuItem value="Business">Business</MenuItem>
            </Select>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
              <Button variant="contained" color="primary" onClick={handleUpdate}>
                Update
              </Button>
              <Button variant="contained" color="secondary" onClick={() => setIsEditing(false)}>
                Cancel
              </Button>
            </Box>
          </Box>
        ) : (
          <>
            <Typography variant="h6">{contact.name}</Typography>
            <Typography color="textSecondary">Gender: {contact.gender}</Typography>
            <Typography color="textSecondary">Type: {contact.type}</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
              <Button variant="contained" color="primary" onClick={() => setIsEditing(true)}>
                Edit
              </Button>
              <Button variant="contained" color="secondary" onClick={() => deleteContact(contact.id)}>
                Delete
              </Button>
            </Box>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default Contact;
