import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Loading from './Loading'

const Works = ( {featuredImage} ) => {
    const restPath = 'http://localhost:8888/ak-portfolio/wp-json/wp/v2/ak-work?order=asc&orderby=title&_embed'
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
                {restData.map(post => 
                    <div class="works" key={post.id} id={`post-${post.id}`}>
                        <Link to={`/work/${post.id}`}><h2 class="works-title">{post.title.rendered}</h2></Link>
                        {post._embedded['wp:featuredmedia'][0] &&
                            <figure className="featured-image" dangerouslySetInnerHTML={featuredImage(post._embedded['wp:featuredmedia'][0])}></figure>
                        }
                        {/* <p> by: {post._embedded['author'][0].name }</p> */}
                        
                        {/* <div className="entry-content" dangerouslySetInnerHTML={{__html:post.content.rendered}}></div> */}
                        {/* <p>Category: {post._embedded['wp:term'][0][0].name}</p> */}
                    </div>
                )}
            </>
        : 
            <Loading />
        }
        </>
    )
}

export default Works
