import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
import { Snack } from 'components/Snack/Snack';

import PersonAddRoundedIcon from '@mui/icons-material/PersonAddRounded';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Container,
} from '@mui/material';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const [isSnackOpen, setIsSnackOpen] = useState(false);

  const isContactInList = contactName => {
    const lowercaseName = contactName.toLowerCase();
    return contacts.find(({ name }) =>
      name.toLowerCase().includes(lowercaseName)
    );
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    if (isContactInList(name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const contactItem = {
      name,
      number,
    };

    dispatch(addContact(contactItem));

    setIsSnackOpen(true);

    reset();
  };

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        throw new Error('Not supported type');
    }
  };

  function reset() {
    setName('');
    setNumber('');
  }

  return (
    <>
      {isSnackOpen && (
        <Snack
          isOpen={isSnackOpen}
          handleClose={() => {
            setIsSnackOpen(false);
          }}
          text="Contact created"
          type="success"
        />
      )}
      <Container component="section" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <PersonAddRoundedIcon />
          </Avatar>

          <Box
            component="form"
            noValidate
            onSubmit={handleFormSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={name}
                  onChange={handleInputChange}
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={number}
                  onChange={handleInputChange}
                  required
                  fullWidth
                  id="number"
                  label="Phone number"
                  name="number"
                  autoComplete="tel"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create contact
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};
