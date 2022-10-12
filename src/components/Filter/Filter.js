import { useSelector, useDispatch } from 'react-redux';

import { filterValue } from 'redux/filterSlice';
import { selectFilterValue } from 'redux/selectors';

import { TextField, Container } from '@mui/material';

export const Filter = () => {
  const filter = useSelector(selectFilterValue);
  const dispatch = useDispatch();
  const handleFilterChange = e => {
    dispatch(filterValue(e.currentTarget.value));
  };

  return (
    <>
      <Container
        component="section"
        maxWidth="sm"
        sx={{
          marginTop: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <TextField
          value={filter}
          onChange={handleFilterChange}
          name="filter"
          fullWidth
          id="filter"
          label="Find by name"
          sx={{
            marginTop: 2,
          }}
        />
      </Container>
    </>
  );
};
