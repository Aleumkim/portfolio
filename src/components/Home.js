import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Loading from './Loading'

const Home = () => {
    const restPath = 'http://localhost:8888/ak-portfolio/wp-json/wp/v2/pages/13?_embed'
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

 
         

        <div class="icon">
        <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer">
          <img
            src="atom.png"
            alt="example"
          />
        </a>

        <a href="https://github.com/" target="_blank" rel="noreferrer">
          <img
            src="php.png"
            alt="example"
          />
        </a>

        
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          <img
            src="js.png"
            alt="example"
          />
        </a>

        
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          <img
            src="press-release.png"
            alt="example"
          />
        </a>
        </div>
        

       

        </>   
    )
  
}

export default Home
