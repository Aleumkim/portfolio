import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import video1 from '../video/video1.mp4'
import capstonewire from '../video/capstonewire.mp4'
import { Route } from 'react-router-dom'




const Post = ({featuredImage}) => {
    const restPath = `https://aleumkim.com/ak-portfolio/wp-json/wp/v2/ak-work/77?_embed`
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
                    
                {/* {restData._embedded['wp:featuredmedia'][0] &&
                            <figure className="featured-image" dangerouslySetInnerHTML={featuredImage(restData._embedded['wp:featuredmedia'][0])}></figure>
                        } */}
                 
                    <div className="work-content" dangerouslySetInnerHTML={{__html:restData.content.rendered}} 
                     />
                </article>

                <section class="live-tab">
                <a href="https://fandomonium.bcitwebdeveloper.ca/" target="_blank" rel="noreferrer"> Website</a>
                <a href="https://github.com/htpwebdesign/fandomonium/" target="_blank" rel="noreferrer"> Github</a>
                </section>
       
                
                <div className="App">

                <Tabs className="Tabs">
                <TabList>
                    <Tab><button>Mockups</button></Tab>
                    <Tab><button>Wireframe</button></Tab>
                    <Tab><button>SetUp</button></Tab>
                </TabList>

                <TabPanel className="tab-content">
                    <h1>Coming Soon!</h1>
                    <div>
                    {/* <video width="470" height="200" autoPlay loop muted><source src={video1} type="video/mp4"/></video> */}
                    </div>
                </TabPanel>

                <TabPanel className="tab-content">
                    <h1> ◌ Mobile & Desktop ◌ </h1>
                    <video width="470" height="200" autoPlay loop muted><source src={capstonewire} type="video/mp4"/></video>
                    <p>Wireframes were created in Figma. The wireframes are based off of what was created in the site architecture and content plan. First we created the desktop wireframes and then went to mobile. After the completion of the wireframes we found what WordPress pages would correlate to each section of the wireframe page.</p>
                </TabPanel>
                
                <TabPanel className="tab-content">
                    <h1>SetUp</h1>
                    <p>We set up the tasks that were needed to be completed in Asana. First we discussed the sitemap and content plan for the site. Then we all worked on the functionality of the site in PHP. We used the backend of WordPress in order to upload featured images and create content and used PHP to update it onto the site.</p>

                    <h1>Goal</h1>
                    <p>Fandomonium Vancouver is a spectacular two-day sci-fi, horror, anime, and gaming event that attracts thousands of people to Vancouver. Every year, Fandomonium offers exciting family-friendly attractions, events, and world-renowned Celebrities! In order to make a cool expo website, our team aimed to make 14 events for customers to participate in various events and make vendors to choose four tiers so that customers can be interesting expo.
                    The overall site is clean and crisp with subtle blue highlights, and an underlining tone of light yellow.
                    </p>

                    {/* <h1>BrainStorm</h1>
                    <p>As a group of four we started with mockups and design in Figma. We discussed how to give the best user experience by making alternative designs and making our site accessible for all users. This included experimenting with different types of designs for the services in order to find a design pleasing to the eye and accessible. On mobile we added a navigation in the footer in order for the user to be able to easily access the navigation instead of scrolling to the top of the webpage</p> */}

                    <h1>Challenge</h1>
                    <p>The difficult part for me in this project was to make a google map using acf. I had to output Google Maps using java script and api key, but I didn't know how to do it, so I spent a lot of time to know how to do it.
                    As a result, Google Maps could be used using WP Go Maps plugin, but could not figure out how to output using java script.
                    </p>

                    <h1>Solutions</h1>
                    <p>To solve this problem, I asked the professor how to use the java script code to use the google map, and finally I was able to find out the code. I spent a lot of time trying to figure this out, but in conclusion, it was a good time to learn more about api key and java script.</p>
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

