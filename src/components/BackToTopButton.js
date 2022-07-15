import React from 'react';
import { useEffect, useState } from 'react';

function BackToTopButton() {
     const [backToTopButton, setBackToTopButton] = useState(false);

     useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
     }, [])
     
     const scrollUp = () => {
        window.scrollTo({
            top:0,
            behavior: "smooth"
        })
     }
     return <div className='App'>
         
         {backToTopButton && (
               <button className="scroll" style={{
                position: "fixed",
                bottom: "50px",
                right: "40px",
                height: "60px",
                width: "60px",
                fontSize: "50px",
             }} onClick={scrollUp}>↑</button>
         )}
             
       
     </div>
}

export default BackToTopButton;