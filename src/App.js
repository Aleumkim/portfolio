import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Works from './components/Works'
import Work from './components/Work'


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
      <Router basename="/wp-react">
        <header id="masthead" className="site-header">
          <div className="site-branding">
            {/* <p className="site-title">AK Portfolio</p> */}
          </div>
          <nav className="site-navigation">
            <ul>
              <h2><li><Link to='/'>Home</Link></li></h2>
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
            <Route path='/work/:id' element={<Work featuredImage={featuredImage} />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </main>
        <footer>
				  <p className="copyright">Created by <a href="https://wp.bcitwebdeveloper.ca/">Aleum Kim</a>.</p>
        </footer>
      </Router>
  );
}

export default App;
