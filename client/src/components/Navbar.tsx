import React, {useState} from 'react'
import '../styles/Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

// created interface for the open and setopen props
interface Iprops{
  open:boolean;
  setopen: React.Dispatch<React.SetStateAction<boolean>>
}
const Navbar = ({open, setopen}:Iprops) => {
  
  return (
    <div className='nav-container'>
      <div className='logo-div'><h4>MapBox</h4></div>
      <div className='menu-div'>
        {open?<CloseIcon sx={{color:"white", fontSize:30, cursor: "pointer"}}/>:
        <MenuIcon sx={{color:"white", fontSize:30, cursor: "pointer"}}/>}
      </div>
    </div>
  )
}

export default Navbar