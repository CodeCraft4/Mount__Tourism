import React from 'react'
import Navbar from './Components/Hero/Navbar/Index'
import Header from './Components/Hero/Header/Index'
import MainSection from './Components/Main/Index'
import FooterArea from './Components/Footer/Index'

const About = () => {
  return (
    <div>
      <header>
        <nav>
          <Navbar />
        </nav>
      <Header />
      </header>
      <main>
        <section>
          <MainSection/>
        </section>
      </main>
      <footer>
        <FooterArea/>
      </footer>
    </div>
  )
}

export default About
