import '../Gallery.css';
import Footer from '../Layout/Footer';
import Header from '../Layout/Header';



function Gallery() {
  return (
    <div>
    <Header />
      <section className=".headingtext">
         <h3>Gallery</h3>
       

      <div className="maingrid">
        <img src="1d9a891d5d4b93bbd6f94ff026defe8a5d9565d1.png" alt="Gallery Item 1" className="grid" />
        <img src="4fbbbc2fc8af6ed17919e047467b25cab05bcb84.png" alt="Gallery Item 2" className="grid" />
        <img src="30f9610abdd68175e72494dfa902cd01510ae5c7.png" alt="Gallery Item 3" className="grid" />
        <img src="93e387be84f94aaafa53f301d38bc02e4ff1a22a.png" alt="Gallery Item 4" className="grid" />
        <img src="7522aa5de1e60c1fd961de9d0aa5c7121d326003.png" alt="Gallery Item 5" className="grid" />
        <img src="27361a48572740e3c3a5ef3bc53800f55e46eb4f.png" alt="Gallery Item 6" className="grid" />
        <img src="debe80694761b51f52c53cfb88ad4b7ed79df6ec.png" alt="Gallery Item 7" className="grid" />
        <img src="e78ff4483713cc83a4423d25fea0aaa9f47b94cc.png" alt="Gallery Item 8" className="grid" />
        <img src="f0d75cbfaa72abddc44890fb24260b5f6a0a50a1.png" alt="Gallery Item 9" className="grid" />
      </div>
    </section>
    <Footer />
    </div>
  )
}

export default Gallery;
