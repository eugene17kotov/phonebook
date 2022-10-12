import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Typography, Box } from '@mui/material';

import { fetchContacts } from 'redux/operations';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Box sx={{ pt: 2, pb: 4 }}>
        <ContactForm />
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h2" variant="h4">
            Contacts
          </Typography>
          <Filter />
          <ContactList />
        </Box>
      </Box>
    </>
  );
};

export default ContactsPage;
