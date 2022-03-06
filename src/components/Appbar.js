import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import DashboardSharpIcon from '@mui/icons-material/DashboardSharp';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';


import { clearUser } from '../store/slices/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { Icon } from '@mui/material';
import { color } from '@mui/system';

export default function ButtonAppBar() {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          />
          < IconButton to="/" component={Link}><DashboardSharpIcon/></IconButton>
          <Typography variant="h6" className='logo-text'  sx={{ flexGrow: 1 } }>
            the accountant.
          </Typography>
          {
            !user.token ? <><Button component={Link} to="/login" color="inherit">Login</Button>
            <Button component={Link} to="/register" color="inherit">Register</Button></> : <Button onClick={()=>{
              dispatch(clearUser());
            }} color="inherit">Logout</Button>
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}