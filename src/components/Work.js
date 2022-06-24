import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
// import Loading from './Loading'


const Post = ({featuredImage}) => {
    const { id } = useParams();
    const restPath = `http://localhost:8888/ak-portfolio/wp-json/wp/v2/ak-work/${id}?_embed`
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
            <>
                <article id={`post-${restData.id}`}>
                    
                {restData._embedded['wp:featuredmedia'][0] &&
                            <figure className="featured-image" dangerouslySetInnerHTML={featuredImage(restData._embedded['wp:featuredmedia'][0])}></figure>
                        }
                 
                    <h1>{restData.title.rendered}</h1>
                    <div className="entry-content" dangerouslySetInnerHTML={{__html:restData.content.rendered}}></div>
                 
                    <h1>hh</h1>
          
                </article>
           
            </>
        : 
            // <Loading />
            <>
            </>
                }
   
        </>
        
    )
  
}

export default Post
