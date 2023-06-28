import React from 'react';
import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Button,
  Stack,
  Checkbox
} from '@mui/material';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';

import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';

const AuthLogin = ({ title, subtitle, subtext }) => (
  <>
    {title ? (
      <Typography fontWeight="700" variant="h2" mb={1}>
        Ingresar
      </Typography>
    ) : null}

    {subtext}

    <Stack>
      <Box>
        <Typography variant="subtitle1" fontWeight={600} component="label" htmlFor='username' mb="5px">
          Usuario
        </Typography>
        <CustomTextField id="username" variant="outlined" fullWidth />
      </Box>
      <Box mt="25px">
        <Typography variant="subtitle1" fontWeight={600} component="label" htmlFor='password' mb="5px">
          Contraseña
        </Typography>
        <CustomTextField id="password" type="password" variant="outlined" fullWidth />
      </Box>
      <Stack justifyContent="space-between" direction="row" alignItems="center" my={2}>
        <Typography
          component={Link}
          to="#"
          fontWeight="500"
          sx={{
            textDecoration: 'none',
            color: 'primary.main',
          }}
        >
          Olvidaste la contraseña?
        </Typography>
      </Stack>
    </Stack>
    <Box>
      <Button
        color="primary"
        variant="contained"
        size="large"
        fullWidth
        component={Link}
        to="/"
        type="submit"
      >
        Ingresar
      </Button>
    </Box>
    <Box mt={2} display="flex" alignItems="center" justifyContent="center">
      <Button
        variant="outlined"
        startIcon={<FaGoogle />}
        size="large"
        fullWidth
        component={Link}
        to="#"
        type="submit"
      >
        Ingresar con Google
      </Button>
    </Box>
    {subtitle}
  </>
);

export default AuthLogin;
