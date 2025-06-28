import gsap from 'gsap'
import { ScrollTrigger,SplitText } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger,SplitText)
import React from 'react'

const App = () => {
  return (
    <div className='flex-center h-[100vh]'>
      <h1 className='text-3xl font-bold underline'>
        Hello world!
      </h1>
      <p className='text-lg'>
        this is the App component
      </p>      
    </div>
  )
}

export default App
