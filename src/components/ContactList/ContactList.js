import { useSelector } from 'react-redux';
import {
  selectFiltredContacts,
  selectIsLoading,
  selectError,
} from 'redux/selectors';

import { ContactItem } from 'components/ContactItem/ContactItem';

import { Container, Grid, Box } from '@mui/material';

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
          {isLoading && !error && <p>Loading contacts...</p>}
          {error && <p>{error}</p>}
          {filtredContacts.length > 0 && !error ? (
            <Grid container spacing={2} sx={{ marginTop: 1 }}>
              {filtredContacts.map(({ id, name, number }) => (
                <ContactItem key={id} id={id} name={name} number={number} />
              ))}
            </Grid>
          ) : (
            !isLoading && <p>Not found any contact :(</p>
          )}
        </Box>
      </Container>
    </>
  );
}
