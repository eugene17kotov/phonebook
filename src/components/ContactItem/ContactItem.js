import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/operations';

import {
  Typography,
  Button,
  CardContent,
  CardActions,
  Card,
  Avatar,
  Grid,
} from '@mui/material';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

export function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();

  const onDeleteContact = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <Grid item>
        <Card sx={{ minWidth: 275 }}>
          <CardContent sx={{ paddingBottom: 0 }}>
            <Grid container spacing={2}>
              <Grid item>
                <Avatar
                  alt={name}
                  src="#"
                  sx={{ m: 1, bgcolor: 'secondary.main' }}
                ></Avatar>
              </Grid>
              <Grid item>
                <Typography variant="h5">{name}</Typography>
                <Typography variant="h6" color="text.secondary" gutterBottom>
                  {number}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>

          <CardActions>
            <Grid container justifyContent="center">
              {/* <Grid item>
                <Button
                  size="small"
                  variant="contained"
                  type="button"
                  onClick={onDeleteContact}
                  startIcon={<EditRoundedIcon />}
                >
                  Edit
                </Button>
              </Grid> */}
              <Grid item sx={{ pb: 1 }}>
                <Button
                  size="small"
                  variant="contained"
                  type="button"
                  onClick={onDeleteContact}
                  startIcon={<DeleteForeverRoundedIcon />}
                >
                  Delete
                </Button>
              </Grid>
            </Grid>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
