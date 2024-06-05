import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';

const Statistics = ({ contacts }) => {
  const maleCount = contacts.filter(contact => contact.gender === 'Male').length;
  const femaleCount = contacts.filter(contact => contact.gender === 'Female').length;
  const personalCount = contacts.filter(contact => contact.type === 'Personal').length;
  const businessCount = contacts.filter(contact => contact.type === 'Business').length;

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-around', margin: 5 }}>
      <Card sx={{ minWidth: 150 }}>
        <CardContent>
          <Typography variant="h6" component="div">
            Male Contacts
          </Typography>
          <Typography variant="body2">
            {maleCount}
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 150 }}>
        <CardContent>
          <Typography variant="h6" component="div">
            Female Contacts
          </Typography>
          <Typography variant="body2">
            {femaleCount}
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 150 }}>
        <CardContent>
          <Typography variant="h6" component="div">
            Personal Contacts
          </Typography>
          <Typography variant="body2">
            {personalCount}
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 150 }}>
        <CardContent>
          <Typography variant="h6" component="div">
            Business Contacts
          </Typography>
          <Typography variant="body2">
            {businessCount}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Statistics;
