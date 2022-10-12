import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

export default function Footer() {
  return (
    <>
      <Box
        component="footer"
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          py: 3,
          px: 2,
          marginTop: 2,
          backgroundColor: '#3f51b5',
        }}
      >
        <Copyright />
      </Box>
    </>
  );
}

function Copyright(props) {
  return (
    <Typography variant="body2" color="white" align="center" {...props}>
      {'Copyright © '}
      <Link
        color="inherit"
        href="https://github.com/eugene17kotov"
        target="_blank"
        rel="noopener noreferrer"
      >
        My Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
