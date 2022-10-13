import { Snackbar, Alert } from '@mui/material';

export const Snack = ({
  isOpen = true,
  handleClose,
  text,
  position = { vertical: 'bottom', horizontal: 'center' },
  type,
}) => {
  return (
    <Snackbar
      open={isOpen}
      onClose={handleClose}
      autoHideDuration={3000}
      anchorOrigin={position}
    >
      <Alert onClose={handleClose} severity={type}>
        {text}
      </Alert>
    </Snackbar>
  );
};
