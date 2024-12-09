import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Page2 from '../components/Page2'
import Skills from '../components/Skills'
import Page4 from '../components/Page4'
import Page5 from '../components/Page5'
import Contact from '../components/Contact'

function Home() {
  return (
    <div className='outfit relative overflow-x-hidden'>
      <Header />
      <Hero/>
      <Page2 />
      <Skills />
      <Page4/>
      <Page5 />
      <Contact/>
      {/* <div className="h-screen bg-red-300"></div> */}
    </div>
  )
}

export default Home