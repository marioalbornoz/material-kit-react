import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

export default function LoginForm({ setUsuario}) {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [init, setInit] = useState(false);
  useEffect(() => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    };

    // validar si existe el usuario y contraseña
    if(init){
      fetch('http://localhost:8000/api/usuarios/login', requestOptions).then(response => response.json())
      .then(data => {setUsuario(data)
        if (data) {
          navigate('/dashboard', { replace: true });
        }})
    }
  }, [email, password, init, navigate, setUsuario]);


  const handleClick = () => {
    setInit(true)
    // navigate('/dashboard', { replace: true });
  };

  const handleChangeEmail = (e) => {
    e.preventDefault()
    setEmail(e.target.value);
  }
 const handleChangePassword = (e) => {
  e.preventDefault();
  setPassword(e.target.value);
 }
  return (
    < >
      <Stack spacing={3}>
        <TextField name="email" label="Email address" value={email} onChange={ handleChangeEmail}/>

        <TextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          value={password} onChange = { handleChangePassword} 
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <Checkbox name="remember" label="Remember me" />
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleClick}>
        Login
      </LoadingButton>
    </>
  );
}
