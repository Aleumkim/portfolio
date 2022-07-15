import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Works from './components/Works'
import Work from './components/Work'
import Work1 from './components/Work1'
import Work2 from './components/Work2'
import Work3 from './components/Work3'
import BackToTopButton from './components/BackToTopButton'
import logo from './img/favicon1.png'
import BackToTopText from './components/BackToTopText'




function App() {
  
  const featuredImage = ( featuredImageObject ) => {
    let imgWidth = featuredImageObject.media_details.sizes.full.width;
    let imgHeight = featuredImageObject.media_details.sizes.full.height;
    let img = `<img src="${featuredImageObject.media_details.sizes.full.source_url}" 
        width="${imgWidth}"
        height="${imgHeight}"
        alt="${featuredImageObject.alt_text}"
        srcset="${featuredImageObject.media_details.sizes.full.source_url} ${imgWidth}w, 
        ${featuredImageObject.media_details.sizes.large.source_url} 1024w,
        ${featuredImageObject.media_details.sizes.medium_large.source_url} 768w,
        ${featuredImageObject.media_details.sizes.medium.source_url} 300w"
        sizes="(max-width: ${imgWidth}) 100vw, ${imgWidth}px">`;
    return {__html: img}
  }

  return (
      <Router basename="/portfolio">
        <header id="masthead" className="site-header">
          <div className="logo">
            <a href="https://aleumkim.com/portfolio/" target="_blank" rel="noreferrer">
            <img
              src={logo}
              alt="logo"
            />
            </a>
          </div>
          <nav className="site-navigation">
            <ul>
              <h3><li><Link to='/'>Home</Link></li></h3>
              <h3><li><Link to='/about'>About</Link></li></h3>
              <h3><li><Link to='/works'>Works</Link></li></h3>
              <h3><li><Link to='/contact'>Contact</Link></li></h3>
            </ul>
          </nav>
        </header>
        <main id="main">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/works' element={<Works featuredImage={featuredImage}/>} />
            <Route path='/work/77' element={<Work featuredImage={featuredImage} />} />
            <Route path='/work/68' element={<Work1 featuredImage={featuredImage} />} />
            <Route path='/work/86' element={<Work2 featuredImage={featuredImage} />} />
            <Route path='/work/84' element={<Work3 featuredImage={featuredImage} />} />
            <Route path='/contact' element={<Contact />} />
  
          
          </Routes>
        </main>

                  <BackToTopText/>
        <footer className='footer'>
				  <p className="copyright"><a href="https://www.linkedin.com/feed/"> Created by Aleum Kim</a>.</p>
          
        </footer>
      </Router>
  );
}

export default App;
