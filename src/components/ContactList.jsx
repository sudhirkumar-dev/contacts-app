import React from 'react';
import Contact from './Contact';
import { Box, Typography } from '@mui/material';

const ContactList = ({ contacts, updateContact, deleteContact }) => {
  return (
    <Box sx={{ width: '100%' }}>
      {contacts.length > 0 ? (
        contacts.map((contact) => (
          <Contact
            key={contact.id}
            contact={contact}
            updateContact={updateContact}
            deleteContact={deleteContact}
          />
        ))
      ) : (
        <Typography variant="body1" color="textSecondary">
          No Contacts Found
        </Typography>
      )}
    </Box>
  );
};

export default ContactList;
