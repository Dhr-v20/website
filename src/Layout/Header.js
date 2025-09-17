import { Link } from "react-router-dom";
function Header()
{

    return(
        <> 
        
    <div className="homepage">
      {/* Header Section */}
      <header className="heading">
        <nav className="navbar">
          <div className="logo">
            <img src="f18bb1a121031efe83e28fa04d8ec90b84886968.png" alt="Logo" />
          </div>
          <ul className="nav-links">
          
            <li><Link to="/Home" >Home</Link></li>
            <li><Link to="/Gallery" >Gallery</Link></li>
            <li><Link to="/Teacher" >Teachers</Link></li>
            <li><Link to="/About" >About</Link></li>
            <li><Link to="/Contact" >Contact us</Link></li>
            <li><Link to="/Blog" >Blogs</Link></li>
        
          </ul>
        </nav>
    </header>
    </div>
      
        

        </>
    )
}
export default Header;