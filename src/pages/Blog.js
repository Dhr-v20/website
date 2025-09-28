import Footer from "../Layout/Footer";
import Header from "../Layout/Header";



function Blog() {
  return (
    <>
      <Header />
      <section >
        <div className="hero-content">
          <h1 className="hero-title">Blogs</h1>
          <p className="hero-subtitle">Our latest news and updates</p>
        </div>
      </section>

      <section className="blogs-section">
        <h2>Blogs</h2>
        <div className="blog-grid">
          <div className="blog-card">
            <img
              src="a85de816b007f850bb19d6ccc9c71f1b7e5e4e72.jpg"
              alt="Kegiatan Belajar Mengajar di Rumah 2020"
            />
            <div className="blog-card-content">
              <h3>Kegiatan Belajar Mengajar di Rumah 2020</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua...
              </p>
              <p>Read More...</p>
            </div>
          </div>

          <div className="blog-card">
            <img
              src="9efe4a4ca2cd8b61986457572fa7c65fe425adc6.png"
              alt="Kegiatan Belajar Mengajar di Rumah"
            />
            <div className="blog-card-content">
              <h3>Kegiatan Belajar Mengajar di Rumah</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua...
              </p>
              <p >Read More...</p>
            </div>
          </div>

          <div className="blog-card">
            <img
              src="ba95afe00263cf29d3813271a98b2247489be42e.png"
              alt="Belajar dirumah"
            />
            <div className="blog-card-content">
              <h3>Belajar dirumah</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua...
              </p>
              <p>Read More...</p>
            </div>
          </div>
        </div>

        <div className="large-blog-post">
          <img
            src="6bf5d2c8225856fab5b73476de8cf3f219c933cb.jpg"
            alt="Kegiatan Belajar Mengajar dirumah"
          />
          <div className="large-blog-post-content">
            <h3>Kegiatan Belajar Mengajar dirumah</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat...
            </p>
            <p>Read More</p>
          </div>
        </div>

        <div className="blog-grid">
          <div className="blog-card">
            <img
              src="a85de816b007f850bb19d6ccc9c71f1b7e5e4e72 (1).jpg"
              alt="Kegiatan Belajar Mengajar di Rumah 2020"
            />
            <div className="blog-card-content">
              <h3>Kegiatan Belajar Mengajar di Rumah 2020</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua...
              </p>
              <p>Read More...</p>
            </div>
          </div>

          <div className="blog-card">
            <img
              src="9efe4a4ca2cd8b61986457572fa7c65fe425adc6.png"
              alt="Kegiatan Belajar Mengajar di Rumah"
            />
            <div className="blog-card-content">
              <h3>Kegiatan Belajar Mengajar di Rumah</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua...
              </p>
              <p>Read More...</p>
            </div>
          </div>

          <div className="blog-card">
            <img
              src="ba95afe00263cf29d3813271a98b2247489be42e.png"
              alt="Belajar dirumah"
            />
            <div className="blog-card-content">
              <h3>Belajar dirumah</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua...
              </p>
              <p>Read More...</p>
            </div>
          </div>

          <div className="blog-card">
            <img
              src="66acaf5315268a4da64ef2cd2f6fb6470d00f5a0.jpg"
              alt="Kegiatan Pembelajaran daring"
            />
            <div className="blog-card-content">
              <h3>Kegiatan Pembelajaran daring</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua...
              </p>
              <p>Read More...</p>
            </div>
          </div>
        </div>

        <div className="recent-posts">
          <h2>Recent Post</h2>
          <div className="recent-post-tags">
            <p>Belajar di rumah</p>
            <p>Belajar Sekolah Luar di Kelas SMPN 1 Cibadak</p>
            <p>Kegiatan Belajar mengajar di rumah</p>
            <p >Kegiatan Belajar Mengajar di Rumah- 2020</p>
          </div>
        </div>
      </section>
     <Footer />
    </>
  )
}

export default Blog;
