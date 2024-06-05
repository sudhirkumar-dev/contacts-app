import React, { useState } from 'react';
import ContactList from './components/ContactList';
import Statistics from './components/Statistics';
import ContactsForm from './components/ContactsForm';
import { Button, Container, Typography, Grid, TextField } from '@mui/material';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'Sudhir Kumar', gender: 'Male', type: 'Business' },
    { id: 2, name: 'Karuna', gender: 'Female', type: 'Personal' },
    { id: 3, name: 'Aravind', gender: 'Male', type: 'Business' },
    { id: 4, name: 'Manikanta', gender: 'Male', type: 'Personal' },
    { id: 5, name: 'Shivam', gender: 'Male', type: 'Business' },
    { id: 6, name: 'Naveen', gender: 'Male', type: 'Personal' }
  ]);

  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState('');

  const addContact = (contact) => {
    setContacts([...contacts, { ...contact, id: contacts.length + 1 }]);
    setOpen(false);
  };

  const updateContact = (updatedContact) => {
    setContacts(
      contacts.map((contact) =>
        contact.id === updatedContact.id ? updatedContact : contact
      )
    );
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Container maxWidth="md" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Contact List App
      </Typography>
      <Statistics contacts={contacts} />
      <Button variant="contained" color="primary" onClick={() => setOpen(true)} sx={{ mb: 2 }}>
        Add New Contact
      </Button>
      <TextField
        label="Filter by name"
        variant="outlined"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        sx={{ mb: 2 }}
      />
      <ContactsForm addContact={addContact} open={open} handleClose={() => setOpen(false)} />
      <Typography variant="h5" component="h2" gutterBottom>
        Contact List
      </Typography>
      <ContactList
        contacts={filteredContacts}
        updateContact={updateContact}
        deleteContact={deleteContact}
      />
    </Container>
  );
};

export default App;
