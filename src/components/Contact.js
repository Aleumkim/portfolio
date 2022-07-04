import { useState, useEffect } from 'react'
import Loading from './Loading'
import { Link } from 'react-router-dom'

const Home = () => {
    const restPath = 'https://aleumkim.com/ak-portfolio/wp-json/wp/v2/pages/8?_embed'
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
            // <article>
            //     <h1>{restData.title.rendered}</h1>
            //     <div className="entry-content">
            //     <section>
            //       <p>{restData.acf.address}</p>
            //       <Link to={`/contact`}><p>{restData.acf.email}</p></Link>
            //     </section>
               
            //     </div>
            // </article>
            <article id={`post-${restData.id}`}>
            <div className="entry-content" dangerouslySetInnerHTML={{__html:restData.content.rendered}}>
            </div>
             <section class="total-contact">
             <h1 class="contact-heading">{restData.acf.contact_heading}</h1>
             <p class="contact-p">{restData.acf.contact_content}</p>
             <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer">
          <img
            src="linked.png"
            alt="example"
          />
                 <a href="https://github.com/" target="_blank" rel="noreferrer">
          <img
            src="github.png"
            alt="example"
          />
        </a>
        </a>
            </section>
            </article>

            
        : 
            <Loading />
        }

        </>   
    )
  
}

export default Home
