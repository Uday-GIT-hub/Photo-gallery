import React,{useState} from 'react';
import '../App.css';
import image from '../Images/Dslr-Camera-icon.png';


function Sidebar() {

  const [clicked,setclicked] = useState(false)

  const clickHandler = () => {
    setclicked(!clicked)
  }
  return (
    <div className ="sidebar">
      <div className="header">
        <div className="logo">
          <img src={image} alt="logo"width="35px"></img>
        </div>
        <div className="text">
          <h2>Photo Gallery</h2>
        </div>
      </div>
      <div className="menu-icon" onClick={clickHandler}>
        <i className={clicked ? "close icon" :"bars icon"}></i>
      </div>
      <div className ="nav">
        <ul className={clicked ? "Sidebar-list" : "Sidebar-list close"}>
          <li>Home</li>
          <li>Features</li>
          <li>Pages</li>
          <li>Works</li>
          <li>Blogs</li>
        </ul>
      </div>
      <div className="footer">
        <div><i class="facebook icon"></i></div>
        <div><i class="instagram icon"></i></div>
        <div><i class="twitter icon"></i></div>
        <div><i class="envelope icon"></i></div>
      </div>
      
    </div>
  )
}

export default Sidebar