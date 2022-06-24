import { useState, useEffect } from 'react'
import Loading from './Loading'


const About = () => {
    const restPath = 'http://localhost:8888/ak-portfolio/wp-json/wp/v2/pages/97?_embed'
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
            
            <article class="about" id={`post-${restData.id}`}>
                
               <div class="headshot">
                </div>
                <section class="about-section">
                <h1 class="about-title">Hi, I'm Aleum.</h1>
                <p><div className="entry-content" dangerouslySetInnerHTML={{__html:restData.content.rendered}}>
                </div></p>
                </section>
            </article>
        : 
            <Loading />
        }
   
 
        </>
        
    )

}

export default About
