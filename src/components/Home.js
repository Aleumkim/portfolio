import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Loading from './Loading'
import atom from '../img/atom.png'
import js from '../img/js.png'
import php from '../img/php.png'
import press from '../img/press-release.png'
import sort from '../video/sort.mp4'

const Home = () => {
    const restPath = 'https://aleumkim.com/ak-portfolio/wp-json/wp/v2/pages/13?_embed'
    const [restData, setData] = useState([])
    const [isLoaded, setLoadStatus] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(restPath)
            if ( response.ok ) {
                const data = await response.json()
                setData(data)
                setLoadStatus(true)
            } else {
                setLoadStatus(false)
            }
        }
        fetchData()
    }, [restPath])
    
    return (
        <>
        
        { isLoaded ?
        
                <article id={`post-${restData.id}`}>
                    <div className="entry-content" dangerouslySetInnerHTML={{__html:restData.content.rendered}}>
                    </div>
                   
                <div class="wrapper-button">
               <a><Link to={`/works/`} class="home-button">View My Work </Link></a> 
               </div>
              </article>
                
                
        : 
            
            
            <Loading />
         
            
              }

          <section class="icon">
          <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer">
           <img
           src={atom}
           alt="example"
         />
         </a>
          
          <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer">
          <img
             src={js}
             alt="example"
          />
          </a>

          <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer">
          <img
            src={php}
            alt="example"
          />
        </a>

        <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer">
          <img
            src={press}
            alt="example"
          />
        </a>

        </section>
    


        
    

        
     
     
       
    
        </>   
    )
  
}

export default Home
