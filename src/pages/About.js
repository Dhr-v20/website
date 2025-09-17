import Footer from "../Layout/Footer";
import Header from "../Layout/Header";



function About() {
  return (
    <div>
      <Header />
      <section >
      <div>
        <div className="headingtext">
          <h3>
            Selamat datang calon peserta didik baru SMPN 1 CIBADAK Tahun Pelajaran 2024-2025
          </h3>
        </div>
      </div>
    </section>
     <div>
      <section className="container2">
        <div className="abbuton">
          <button>Informasi</button>
        </div>
        <div className="sec2div">
          <p>
            Sebagai informasi, Pendaftaran untuk periode 2021-2022 untuk jalur
            Afirmasi, Perpindahan Orangtua/Wali, dan Prestasi akan dibuka pada
            tanggal 28 Juni s.d 2 Juli 2021, sedangkan untuk jalur Zonasi akan
            dibuka pada tanggal 5 Juli – 9 Juli 2021
          </p>
          <p>
            Simulasi pendaftaran sudah dibuka, namun diluar tanggal yang
            disebutkan diatas, akan dihapus kembali
          </p>
          <p>Terima Kasih</p>
          <p>Admin PPDB SMPN 1 Cibadak</p>
        </div>
      </section>
    </div>
    <Footer />
    </div>
  )
}

export default About;
