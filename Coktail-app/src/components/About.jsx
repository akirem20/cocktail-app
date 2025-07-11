import { useGSAP } from '@gsap/react'
import React from 'react'
import { SplitText } from 'gsap/all'
import gsap from 'gsap'

const About = () => {
    useGSAP(() => {
       const titleSplit = SplitText.create('.content h2', {
        type: 'words'})

       const scrollTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: "#about",
            start: "top center",
        }
    })
       scrollTimeline.from(titleSplit.words, {
           y: 100,
           opacity: 0,
           duration: 1,
           stagger: 0.01,
           ease: "expo.out",
       })
       .from('.top-grid div, .bottom-grid div', {
           opacity: 0,
           duration: 1,
           stagger: 0.04,
           ease: "power1.inOut",
       },'-=0.5)')
    })
  return (
    <div id="about">
      <div className="md-16 md:px-0 px-5">
        <div className="content">
        <div className="md:col-span-8">
          <p className="badge">Best Cocktails</p>
          <h2>Where every detail matters <span className="text-white">-</span>
           from muddle to garnish</h2>
        </div>
        <div className="sub-content">
           <p>
            Every cocktail we serve is a reflection of our obsession with detail — from the first muddle to the final garnish. That care is what turns a simple drink into something truly memorable. 
           </p>
           <div>
            <p className="md:text-3xl text-xl font-bold">
              <span>4.5</span>/5
            </p>
            <p className="text-sm text-white-100">
             More than 12000 customers
            </p>
           </div>
        </div>
        </div>
        </div>
       <div className="top-grid">
        <div className="md:col-span-3">
        <div className="noisy" />
        <img src="/images/abt1.png" alt="gid-img-1"/>
        </div>
        
        <div className="md:col-span-6">
        <div className="noisy" />
        <img src="/images/abt2.png" alt="gid-img-2"/>
        </div>
        
        <div className="md:col-span-3">
        <div className="noisy" />
        <img src="/images/abt5.png" alt="gid-img-5"/>
        </div>
       </div>
       
       <div className="bottom-grid">
        <div className="md:col-span-8">
        <div className="noisy" />
        <img src="/images/abt3.png" alt="gid-img-3"/>
        </div>
        
        
        <div className="md:col-span-4">
        <div className="noisy" />
        <img src="/images/abt4.png" alt="gid-img-4"/>
        </div>
       </div>

    </div>
  )
}

export default About
