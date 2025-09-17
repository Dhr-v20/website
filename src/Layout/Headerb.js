import { Link } from "react-router-dom";
// import  "./Header.css";
function Header()
{

    return(
        <> 
        <header className="heading">
          <div className="headingtext">
            <p>Motto</p>
            <h3>
              SMP N 1 Cibadak (Cerdas Beretika) Ceria, Empati, Rasional, Damai, Aktif,
              Sabar, Bersih, Elok, Tulus, Iman, Konsiste, Amanah.
            </h3>
            <button className="Contactbutton">Contact us</button>
          </div>
        </header>

        <div>
       <section className="container1">
        <nav className="navbar">
          <div className="logo">
            <img src="f18bb1a121031efe83e28fa04d8ec90b84886968.png" alt="Logo" />
          </div>
          <ul className="navtext">
            <li><Link to="/Home" className="a">Home</Link></li>
            <li><Link to="/Gallery" className="a">Gallery</Link></li>
            <li><Link to="/Teacher" className="a">Teachers</Link></li>
            <li><Link to="/About" className="a">About</Link></li>
            <li><Link to="/Contact" className="a">Contact us</Link></li>
            <li><Link to="/Blog" className="a">Blogs</Link></li>
          </ul>
        </nav>

        <div className="divprdiv">
          <div className="mainimg">
            <div className="headingimg">
              <img src="" alt="" className="img1" />
            </div>
          </div>
        </div>
      </section>
      </div>
        </>
    )
}
export default Header;