import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import enter from '../video/enter-name.mp4'
import easy from '../video/easy-mode.mp4'
import hard from '../video/hard.mp4'
import show from '../video/show-words.mp4'
import { Route } from 'react-router-dom'




const Post = ({featuredImage}) => {
    const restPath = `https://aleumkim.com/ak-portfolio/wp-json/wp/v2/ak-work/84?_embed`
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
                <a href="https://aleumkim.com/Typing%20Master/" target="_blank" rel="noreferrer"> Website</a>
                </section>

                <div className="App">

                <Tabs className="Tabs">
                <TabList>
                    <Tab><button>Mockups</button></Tab>
                    <Tab><button>Functionality</button></Tab>
                    <Tab><button>Challenge</button></Tab>
                </TabList>

                    <TabPanel className="tab-content">
                    <h1> ◌ Enter Your Name ◌ </h1>
                    <div class="tab-div">
                    <video width="470" height="200" autoPlay loop muted><source src={enter} type="video/mp4"/></video>
                    <p>Game users can type their names before the game and change their names by pressing button again.</p>
                    </div>

                    <h1> ◌ Eeay Mode ◌ </h1>
                    <div class="tab-div2">
                    <video width="470" height="200" autoPlay loop muted><source src={easy} type="video/mp4"/></video>
                    <p>The easy mode has a time limit of 15 seconds, and user has to type the words that are randomly provided in it to move on to the next word. If user failes to type a word in 15 seconds, the game automatically ends.</p>
                    </div>

                    <h1> ◌ Hard Mode ◌ </h1>
                    <div class="tab-div">
                    <video width="470" height="200" autoPlay loop muted><source src={hard} type="video/mp4"/></video>
                    <p>The hard mode has a time limit of 7 seconds, and user has to type the words that are randomly provided in it to move on to the next word. If user failes to type a word in 7 seconds, the game automatically ends.</p>
                    </div>

                    <h1> ◌ Show Words ◌ </h1>
                    <div class="tab-div4">
                    <video width="470" height="200" autoPlay loop muted><source src={show} type="video/mp4"/></video>
                    <p>If the user enters something before pressing the start button, the word press the button appears on the right. When the game starts and the user types the word correctly, the word is displayed on the left.</p>
                    </div>
                </TabPanel>

                <TabPanel className="tab-content">
                    <p>The setInterval() function was used to limit typing time, and the ClearInterval() function was used to stop time.
                         Toastify was used to display the typed word in the upper left. Toast Notifications are popup messages that are added so as to display a message to a user.
                    </p>
                </TabPanel>
                
                <TabPanel className="tab-content">
                   
                    <h1>Challenge</h1>
                    <p>It was difficult to separate the function of reducing both easy mode and hard mode with different time limits and then stopping at 0 seconds. I made this function complete, but the other problem was that the function of increasing the score by 1 point didn't work properly.</p>

                    <h1>Solutions</h1>
                    <p>I found a channel on YouTube looking for solutions related to these problems, and I was able to solve the problem by watching related videos. In conclusion, I was able to make two checkstatus() functions by separating the functions of easy mode and hard mode.</p>
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

