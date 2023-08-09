import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import { ExitToApp } from '@mui/icons-material';

function Profile() {
  const logOut = () => {
    localStorage.clear();
    window.location.href = '/';
  };
  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h3">Kho phim JAV</Typography>
        <Button onClick={logOut} color="inherit">
          Logout &nbsp;<ExitToApp />
        </Button>
      </Box>
    </Box>
  );
}

export default Profile;
