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
                    <p>Tab 1 works!</p>
                    <div>
                    <video width="470" height="200" autoPlay loop muted><source src={video1} type="video/mp4"/></video>
                    </div>
                </TabPanel>

                <TabPanel className="tab-content">
                    <h1> Mobile & Desktop</h1>
                    <video width="470" height="200" autoPlay loop muted><source src={capstonewire} type="video/mp4"/></video>
                    <p>Wireframes were created in Figma. The wireframes are based off of what was created in the site architecture and content plan. First we created the desktop wireframes and then went to mobile. After the completion of the wireframes we found what WordPress pages would correlate to each section of the wireframe page</p>
                </TabPanel>
                
                <TabPanel className="tab-content">
                    <h1>SetUp</h1>
                    <p>We set up the tasks that were needed to be completed in Asana. First we discussed the sitemap and content plan for the site. Then we all worked on the functionality of the site in PHP. We used the backend of WordPress in order to upload featured images and create content and used PHP to update it onto the site</p>

                    <h1>Goal</h1>
                    <p>To create a functional gym and personal training website. The primary audience is targeted to everyone promoting body positivity and being inviting and positive to all clients. The gym's features includes PreNatal, Nutrition, Individual Personal Training, and Rehab classes. The overall site is clean and inviting. At first our group was leaning towards a gym with a dark background and a crisp hero image. However, since we wanted to target the website towards everyone, our website is clean and crisp with subtle blue highlights, and an underlining tone of light grey.</p>

                    <h1>BrainStorm</h1>
                    <p>As a group of four we started with mockups and design in Figma. We discussed how to give the best user experience by making alternative designs and making our site accessible for all users. This included experimenting with different types of designs for the services in order to find a design pleasing to the eye and accessible. On mobile we added a navigation in the footer in order for the user to be able to easily access the navigation instead of scrolling to the top of the webpage</p>

                    <h1>Challenge</h1>
                    <p>A challenge faced was figuring out how to target the individual blog posts rather than the entire blog page. At first I went into the element trying to target the specific element rather than finding the individual page class name and then targeting the class within the page. I wasn't able to visually see my code in the code editor because of how the blog posts were set up with no ACFs, but after undertsanding how to target each element in the inspector the styling and overall functionality was easier to acheive</p>

                    <h1>Solutions</h1>
                    <p>At first I spent quite a bit of time understanding how to flex or use grid on the blog posts since I could not add divs. I researched and ended up having to discuss my confusion with my prof, even though this may have appeared simple discussing this issue with my prof helped me be able to visualize how to style WordPress more efficiently. When the time came for me to style the 404 page this went more quickly than before, and I finally understood how and what I was looking for</p>
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

