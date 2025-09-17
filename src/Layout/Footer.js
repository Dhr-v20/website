
import { Link } from "react-router-dom";

function Footer()
{
    return(
    <>
      {/* <footer>
         <div className="footermain">
           <div className="footerfirst">
             <div className="ff">
               <img src="f18bb1a121031efe83e28fa04d8ec90b84886968.png" alt="logo" />
             </div>
             <div className="ff">
               <p>
                 Jl. Siliwangi No 123, Cibadak, Cibadak, Sukabumi, Jawa Barat 43351,
                 Indonesia, (0266)531333
               </p>
             </div>
             <div className="ff">
               <Link to="mailto:info@smpn1cibadak.sch.i">info@smpn1cibadak.sch.i</Link>
               <a href=""></a> */}
            {/* </div>
             <div className="ff">
               <Link to="mailto:smpn1cbd_kabsi@yahoo.co.id">smpn1cbd_kabsi@yahoo.co.id</Link>
               <a href=""></a> */}
             {/* </div>
           </div>

           <div className="footersec">
             <div className="fs"><b><p>Jelajah</p></b></div>
             <div className="fs"><p>Sambutan</p></div>
             <div className="fs"><p>Profil Sekolah</p></div>
             <div className="fs"><p>Berita</p></div>
             <div className="fs"><p>Galeri</p></div>
           </div>

           <div className="footerthr">
             <div className="thr"><b><p>Halaman Umum</p></b></div>
             <div className="thr"><p>Data Guru</p></div>
             <div className="thr"><p>PPDB SMPN 1 Cibadak</p></div>
             <div className="thr"><p>Panduan PPDB</p></div>
             <div className="thr"><p>Lokasi</p></div>
             <div className="thr"><p>Kontak</p></div>
           </div>

           <div className="footerfor">
             <div className="fr"><b><p>Media Sosial</p></b></div>
             <div className="icon">
               <img src="Screenshot 2025-05-25 174103.png" alt="social-icon" />
             </div>
           </div>
         </div>

         <div className="copyright">
           <p>
             Copyright © SMP Negeri 1 Cibadak. All right Reserved. Hosting By
             IDCloudHost
           </p>
         </div>
      </footer> 
     */}
      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="f18bb1a121031efe83e28fa04d8ec90b84886968.png" alt="Logo" />
            <p>Jl. Siliwangi No 129, Cibadak, Sukabumi, Jawa Barat 43351</p>
            <p>info@smpn1cibadak.sch.id</p>
            <div >
               <Link to="mailto:info@smpn1cibadak.sch.i">info@smpn1cibadak.sch.i</Link>
          </div>
             <div >
               <Link to="mailto:smpn1cbd_kabsi@yahoo.co.id">smpn1cbd_kabsi@yahoo.co.id</Link>
               </div>
          </div>
          
          <div className="footer-links">
            <h4>Jelajah</h4>
            <ul>
              <li>Sambutan</li>
              <li>Profil Sekolah</li>
              <li>Berita</li>
              <li>Galeri</li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Halaman Umum</h4>
            <ul>
              <li>Data Guru</li>
              <li>PPDB SMPN 1 Cibadak</li>
              <li>Panduan PPDB</li>
              <li>Kontak</li>
            </ul>
          </div>
          <div className="footer-social">
            <h4>Media Sosial</h4>
            <div className="icons">
              <img src="Screenshot 2025-05-25 174103.png" alt="social-icon" />

              {/* <span>📘</span>
              <span>🐦</span>
              <span>📸</span> */}
            </div>
          </div>
        </div>
        <p className="footer-bottom">© SMP Negeri 1 Cibadak. All rights reserved.</p>
      </footer>
      </>
      )
}

export default Footer;
