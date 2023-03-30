
import { BrowserRouter, Routes, Route, Outlet, Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
   
  return (
    <>
    <div className='header'>
      <nav>
        <ul>
          <Link to='/home'>Home</Link>
          <Link to='/contact'>Contact</Link>
        </ul>
      </nav>
    </div>
      <Outlet/>
    </>
  );

}
  
export default Navbar;