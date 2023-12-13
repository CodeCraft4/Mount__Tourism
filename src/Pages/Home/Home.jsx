import React from 'react'
import Hero from './Components/Hero/Index'
import Trails from './Components/Trail/Index'
import Info from './Components/Information/Index'
import Experience from './Components/Experience/Index'
import FooterArea from './Components/Footer/Index'
import BackToTop from './Components/FixedButton/Index'
import { Button } from '@mui/material'

const Home = () => {


  const sum = () => {
    // const data = {
    //   id: 5,
    //   imgpath: 'https://static.wixstatic.com/media/ea71bb_d7aa5f6c03c04c1c9bd06d2f2b7eaed5~mv2.jpg/v1/fill/w_455,h_455,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_d7aa5f6c03c04c1c9bd06d2f2b7eaed5~mv2.jpg',
    //   title: 'Half Day Snowhoe',
    //   offers: 'Offered Daily',
    //   price: 80
    // }

    //De structuring of object
    // Here i destruct the object is equal to data.
    
    // const { imgpath, price } = data
    
    // console.log(typeof (price.toString() * 1))
    // i make to the image path to convert into Array. but separate from backward slash

    // console.log(imgpath.split('/'))

    //here i get it all number in imgpath. becouse the imgpath is value is string.
    //first i convert string in to Number than after i run the filter loop for every element.
    //then after i create a some logic and run it. 


    //** In this situation first i divide a total element in 0 then equal,typeof equal to 0 */
    //The result return all the number shown but 0 number is doesnt shown why becouse 0 is already 0
    //in this situation the zero is not print.
    // then after i  use a OR logic and i say if element is equal and its type is equal to to string 0,

    // const findNumber = [...imgpath].filter((e) => 0 / e === 0 || e === '0')
    // console.log(findNumber)



  }

  return (
    <div>
      {/* Navigation Bar and header Area.. */}
      <header>
        <BackToTop />
        <Hero />
      </header>
      <main>
        <section>
          <Trails />
        </section>
        <section>
          <Info />
        </section>
        <article>
          <Experience />
        </article>
      </main>
      <footer>
        <FooterArea />
      </footer>
      <Button variant='contained' color='secondary' onClick={sum}>Click me</Button>
    </div>
  )
}

export default Home
