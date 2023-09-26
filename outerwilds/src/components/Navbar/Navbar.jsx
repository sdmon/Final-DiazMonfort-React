import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import logo from '../../assets/logo.png'
import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (    
    <AppBar>        
        <Toolbar className='toolbar-navbar' sx={{display: 'flex', justifyContent: 'center'}}>
            <NavLink to="/">
                <img src={logo} alt="Outer Wilds Logo" height="55" width="60" />
            </NavLink>
            <NavLink className="navbar-link" to="/">
                Home
            </NavLink>
            <NavLink className="navbar-link" to="/categories">
                Categorias
            </NavLink>
            <NavLink className="navbar-link" to="/products">
                Productos
            </NavLink>            
            <CartWidget />                   
        </Toolbar>

    </AppBar>);   
}

export default Navbar;




