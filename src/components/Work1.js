import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import moviedata from '../video/moviedata.mp4'
import singledata from '../video/singledata.mp4'
import favoritedata from '../video/favoritedata.mp4'
import sort from '../video/sort.mp4'
import { Route } from 'react-router-dom'




const Post = ({featuredImage}) => {
    const restPath = `https://aleumkim.com/ak-portfolio/wp-json/wp/v2/ak-work/68?_embed`
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
                <article class="single-work" id={`post-${restData.id}`}>
                    
                {restData._embedded['wp:featuredmedia'][0] &&
                            <figure className="featured-image" dangerouslySetInnerHTML={featuredImage(restData._embedded['wp:featuredmedia'][0])}></figure>
                        }
                 
                    <div className="work-content" dangerouslySetInnerHTML={{__html:restData.content.rendered}} 
                     />

                </article>

                <section class="live-tab">
                <a href="https://aleumkim.com/movie-squirrel/" target="_blank" rel="noreferrer"> Website</a>
                <a href="https://github.com/fyeung21/movie-squirrel/" target="_blank" rel="noreferrer"> Github</a>
                </section>
                

                <div className="App">

                <Tabs className="Tabs">
                <TabList>
                    <Tab><button>Mockups</button></Tab>
                    <Tab><button>Wireframe</button></Tab>
                    <Tab><button>SetUp</button></Tab>
                </TabList>

                    <TabPanel className="tab-content">
                    <h1> The Navigation Header </h1>
                    <div class="tab-div">
                    <video width="470" height="200" autoPlay loop muted><source src={moviedata} type="video/mp4"/></video>
                    <p>This shows the different types of pages on the webssite through the navigation. On mobile the navigation is a slider which flexes into a row when hitting the desktop point. The navigation is also accessible on a fixed footer making it easier for usability especially in mobile</p>
                    </div>

                    <h1> The Single Page </h1>
                    <div class="tab-div">
                    <video width="470" height="200" autoPlay loop muted><source src={singledata} type="video/mp4"/></video>
                    <p>The Single page can be accessed from the home page from hovering over a movie and clicking on the more info. The Single page shows the movies hero image, the rating, the overview, and the genre for the movie. The API allows for the correct picture, rating, and genre to be matched with each movie</p>
                    </div>

                    <h1> The Favourites Feature </h1>
                    <div class="tab-div">
                    <video width="470" height="200" autoPlay loop muted><source src={favoritedata} type="video/mp4"/></video>
                    <p>The favourite's feature allows users to favourite movies on the home page or single page and brings the favourited movies into one location, on the favourites page. This information is stored so that when you leave the page website your favourited movie will still be there. The favourited movie can be removed on the Home page, Single Page, or Favourites page. Once removed the heart will be unfilled</p>
                    </div>
                    
                    <h1> The Sorting Feature </h1>
                    <div class="tab-div">
                    <video width="470" height="200" autoPlay loop muted><source src={sort} type="video/mp4"/></video>
                    <p>The sorting feature was created to sort the movies dependant on the URL of the movies that was pulled from the TMDB API. This allows the movies to be sorted whether in Upcoming, Popular, Now Playing, and Top Rated. By using TMDB's API movies can be further sorted by genre's, actors, and rating</p>
                    </div>
                    
                </TabPanel>

                <TabPanel className="tab-content">
                    <p>Tab 2 works!</p>
                </TabPanel>
                
                <TabPanel className="tab-content">
                    <h1>SetUp</h1>
                    <p>We set up with React and created a new Git repository in order to be able to push and pull code. The work was divided into different sections and we met up daily to discuss our progress and what we were struggling on. Near the end of the project we all sat together and designed the small details as a team</p>

                    <h1>Goal</h1>
                    <p>To create a functional and appealing movie database with ideal user experience and ease of use</p>

                    <h1>BrainStorm</h1>
                    <p>As a group of three we started with mockups and design in XD. We discussed the different user interface and what our end goal was for this website. Even though not yet achieved our hopes were to create a login feature so as to make a more ideal user experience. We proceeded in building a site plan and styleguide so as to figure out the ideal colour scheme, fonts, and layout for the optimal user experience. Logo was developed in Adobe Illustrate</p>

                    <h1>Challenge</h1>
                    <p>A challenge faced was the navigation header. This was pulled from CodePen and the code had a few functional problems. This led to a horizontal scrollbar because of the absolute positioning. It took a while to troubleshoot the issue, but after experimenting with the header on another project we were able to adjust the code</p>

                    <h1>Solutions</h1>
                    <p>One thought was to find a different code from codepen, but after researching and testing the issue we were able to troubleshoot and find a solution</p>
                </TabPanel>
                </Tabs>

                </div>       
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

