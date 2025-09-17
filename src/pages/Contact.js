


import Footer from '../Layout/Footer';
import Header from '../Layout/Header';


function Contact() {
  return (
    <>
    <Header />
      <section className="container2">
        <div className="form-container">
          <div className="grid-row">
            <div className="grid-col">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value=""
                placeholder="Mikasa Ackerman"
              />
            </div>
            <div className="grid-col">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value=""
                placeholder="emailkamu@gmail.com"
              />
            </div>
          </div>

          <div className="form-row">
            <label>No Trip</label>
            <div className="phone-prefix">
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="+62"
              />
            </div>
          </div>

          <div className="form-title">#1 Pesan</div>

          <div className="form-row">
            <label htmlFor="message">Pesan kamu</label>
            <textarea id="message" name="message"></textarea>
          </div>

          <div className="form-row">
            <button type="submit" className="submit-btn">Kirim</button>
          </div>
        </div>
      </section>

      <section className="mapcontainer">
        <div className="map">
          <img src="81a29224f8528ad5b872d2b5c124ec4c658543ee.png" alt="" />
        </div>

        <div className="maingroup">
          <div>
            <img
              src="e7459cfd18b86210608a5a5ea7de1876a32632d1.png"
              alt=""
              className="gropimg"
            />
          </div>
          <h1>SMP Negeri 1 Cibadak</h1>
          <p>Jl. Siliwangi No 123, Cibadak, Sukabumi, Jawa Barat 43351, Indonesia</p>
          <p>📞 (0266) 531333</p>

          <p>
            4.6
            <img src="star.png" alt="" className="star" />
            <img src="star.png" alt="" className="star" />
            <img src="star.png" alt="" className="star" />
            <img src="star.png" alt="" className="star" />
            <img src="star.png" alt="" className="star" />
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;

