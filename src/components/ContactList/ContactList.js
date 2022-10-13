import { useSelector } from 'react-redux';
import {
  selectFiltredContacts,
  selectIsLoading,
  selectError,
} from 'redux/selectors';

import { ContactItem } from 'components/ContactItem/ContactItem';
import { Snack } from 'components/Snack/Snack';

import { Container, Grid, Box, CircularProgress } from '@mui/material';

export function ContactList() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filtredContacts = useSelector(selectFiltredContacts);

  return (
    <>
      <Container component="section" sx={{ marginTop: 2 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {isLoading && !error && <CircularProgress sx={{ mt: 4 }} />}
          {error && <p>{error}</p>}
          {filtredContacts.length > 0 && !error ? (
            <Grid container spacing={2} sx={{ marginTop: 1 }}>
              {filtredContacts.map(({ id, name, number }) => (
                <ContactItem key={id} id={id} name={name} number={number} />
              ))}
            </Grid>
          ) : (
            !isLoading && <Snack type="error" text="Not found any contact :(" />
          )}
        </Box>
      </Container>
    </>
  );
}
