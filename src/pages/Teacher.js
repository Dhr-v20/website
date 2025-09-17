
 import '../Teacher.css';
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
function Teacher() {
  return (
     <>
     <Header />

      <section>
          <div class="headingtext">
            <h3>Our Best Facultys</h3>
            <p>Data Guru - Guru SMP Negeri 1 Cibadak</p>
          </div>
          
      </section>

      <section class="search-container">
        <div>
          <input type="text" placeholder="Search..." class="search-box" />
          <button class="search-button">🔍</button>
        </div>
      </section>

      <section class="grid-container">
        <div class="grid-item">
          <img src="03021c1508a6df32dfa0dc2d23d774b8aa5581f8.jpg" alt="Teacher 1" class="gridimg" />
          <h3><b>Name:</b> Hj. ELIS HERNAWATI, S.Pd.</h3>
          <p><b>NIP:</b> 196606051992032008</p>
          <p><b>Pelajaran:</b> Ilmu Pengetahuan Sosial</p>
        </div>
        <div class="grid-item">
          <img src="7fe840666469b87699be114c7e2d3d899c7f2571.jpg" alt="Teacher 2" class="gridimg" />
          <h3><b>Name:</b> Drs. Osad</h3>
          <p><b>NIP:</b> 196203121989031014</p>
          <p><b>Pelajaran:</b> Bahasa Indonesia</p>
        </div>
        <div class="grid-item">
          <img src="c2bcc5d4bcdb6cebe60a5184c36d701215594e3e.jpg" alt="Teacher 3" class="gridimg" />
          <h3><b>Name:</b> Hj. ENUNG NURHASANAH, S.Pd.</h3>
          <p><b>NIP:</b> 196202021983022006</p>
          <p><b>Pelajaran:</b> Bahasa Indonesia</p>
        </div>
        <div class="grid-item">
          <img src="d99b364dbce05cad2466847a1f0adcefffad4a9e.jpg" alt="Teacher 4" class="gridimg" />
          <h3><b>Name:</b> HANA WIJAYA, S.Pd.</h3>
          <p><b>NIP:</b> 196207091983022001</p>
          <p><b>Pelajaran:</b> Matematika</p>
        </div>
        <div class="grid-item">
          <img src="0c7ed9f52e27db47fb55221bc8166938685834d8.jpg" alt="Teacher 1" class="gridimg" />
          <h3><b>Name:</b> MAMAN, S.Pd., M.M.Pd.</h3>
          <p><b>NIP:</b> 196402161989031005</p>
          <p><b>Pelajaran:</b> Penjaskes</p>
        </div>
        <div class="grid-item">
          <img src="e230df68458739f97fd748b512f30e72718ac04b.jpg" alt="Teacher 2" class="gridimg" />
          <h3><b>Name:</b> RAKHMAT, S.Pd.,M.Si.</h3>
          <p><b>NIP:</b> 196703101986031002</p>
          <p><b>Pelajaran:</b> Pendidikan Kewarganegaraan</p>
        </div>
        <div class="grid-item">
          <img src="e3c63927ea078034299232019537fd5b47178779.jpg" alt="Teacher 3" class="gridimg" />
          <h3><b>Name:</b> RITA NURYANTI, S.Pd.</h3>
          <p><b>NIP:</b> 197108041998022003</p>
          <p><b>Pelajaran:</b> Ilmu Pengetahuan Alam</p>
        </div>
        <div class="grid-item">
          <img src="890bb7e06d43771d98ef99ea4fe1448c96fbb9ad.jpg" alt="Teacher 4" class="gridimg" />
          <h3><b>Name:</b> IDA LAELASARI, S.Pd.</h3>
          <p><b>NIP:</b> 196811231998022001</p>
          <p><b>Pelajaran:</b> Bahasa Sunda</p>
        </div>
        <div class="grid-item">
          <img src="a27bb91afb0ec304610b4834f08a60cec93a7a06.jpg" alt="Teacher 1" class="gridimg" />
          <h3><b>Name:</b> SUPRIYONO, S.Pd.</h3>
          <p><b>NIP:</b> 196511141998021001</p>
          <p><b>Pelajaran:</b> Bahasa Inggris</p>
        </div>
      </section>
      <Footer />
    </>
  )
}
export default Teacher;
