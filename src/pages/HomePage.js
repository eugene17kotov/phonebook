import contacts from 'images/contacts.webp';
import phonebook from 'images/phonebook.png';
import { Box, Typography, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom/dist';

const HomePage = () => {
  const navigate = useNavigate();

  const handleNavigateToRegister = () => {
    navigate('/register');
  };

  return (
    <>
      <Box
        sx={{
          backgroundImage: `linear-gradient(
      to right,
      rgba(0, 0, 0, 0.63),
      rgba(0, 0, 0, 0.63)
    ), url(${contacts})`,
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h6" component="p" sx={{ color: 'white', mt: 6 }}>
          With the best contact apps, you'll spend less time looking for your
          contacts and more time connecting.
        </Typography>
        <Box sx={{ display: 'flex', mt: 4 }}>
          <img
            src={phonebook}
            alt="contact"
            width={400}
            height={400}
            loading="lazy"
          />
          <Box maxWidth="500px" sx={{ pt: 3, ml: 3 }}>
            <Typography variant="h6" component="p" sx={{ color: 'white' }}>
              The best contact app stand at the ready to implement some order on
              your disorganized address book. All those duplicate entries
              cluttering up your contacts will be a thing of the past, and
              that's just the start of what a good contact app can do for you.
            </Typography>
            <Typography
              variant="h6"
              component="p"
              sx={{ color: 'white', mt: 6 }}
            >
              From now on, forget about paper contact books.{' '}
              <Link onClick={handleNavigateToRegister} href="#">
                Register
              </Link>{' '}
              and keep all your most valuable connections in quick access from
              anywhere in the world and at any time.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
