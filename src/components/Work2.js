import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import house from '../video/house.mp4'
import login from '../video/login.mp4'
import { Route } from 'react-router-dom'




const Post = ({featuredImage}) => {
    const restPath = `https://aleumkim.com/ak-portfolio/wp-json/wp/v2/ak-work/86?_embed`
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
                <a href="https://aleumkim.com/realestat_app/" target="_blank" rel="noreferrer">Website</a>
                <a href="https://github.com/Hyonsok/realestat_app/" target="_blank" rel="noreferrer">Github</a>
                </section>

                <div className="App">

                <Tabs className="Tabs">
                <TabList>
                    <Tab><button>Mockups</button></Tab>
                    <Tab><button>SetUp</button></Tab>
                </TabList>

                    <TabPanel className="tab-content">
                    <h1> House Page </h1>
                    <div class="tab-div">
                    <video width="470" height="200" autoPlay loop muted><source src={house} type="video/mp4"/></video>
                    <p>People can see images of houses and price information on the home page. When people click on the picture of the house, they can find out the detailed price information of the house, the size of the house, the year it was built in, and the characteristics of the house.</p>
                    </div>
                    
                    <h1> Sign Up & Log In </h1>
                    <div class="tab-div">
                    <video width="470" height="200" autoPlay loop muted><source src={login} type="video/mp4"/></video>
                    <p>Sign up & login pages are linked together. When you click the login button, you can enter the user's name, change the entered user's information on the sign up page, and when you press the logout button, the information disappears.</p>
                    </div>

                
                </TabPanel>

                <TabPanel className="tab-content">
                    <h1>SetUp</h1>
                    <p>We set up with React and created a new Git repository in order to be able to push and pull code. The work was divided into different sections and we met up daily to discuss our progress and what we were struggling on. Near the end of the project we all sat together and designed the small details as a team.</p>

                    <h1>Challenge</h1>
                    <p>It was difficult to create a function to enter and log out a name using the Login button. I had to make it using the useDispatch() function in the reducer, but I had a hard time creating the page because I didn't understand the concept clearly.</p>

                    <h1>Solutions</h1>
                    <p>Information was extracted by referring to the reacthooks-related materials learned during class. Also, there were codes related to the assignment that I submitted before, so I could solve the problem.</p>
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

