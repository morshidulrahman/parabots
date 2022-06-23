import React from 'react'
import CustomerCard from './CustomerCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max:4000, min:768 },
    items: 3
  },
  tablet: {
    breakpoint: { max:768, min:640 },
    items: 2
  },
  mobile: {
    breakpoint: { max:640, min: 0 },
    items: 1
  }
};


function Customers() {
  return (
  <div className='bg-[#F8F8F8]'>
      <div className='container mx-auto px-5 pb-10'> 
     <div className='flex py-6 mb-5 items-center'>
     <h1 className='text-3xl font-bold'>Words from our Customer</h1>
     </div>
     <Carousel responsive={responsive}>
      <CustomerCard 
      img="https://img.freepik.com/free-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=2000"
      profice="bonge"
      adress="Brooklyn , ny"
      icon="😍"
      desc="very international thoughtful and beautiful design.just the right amount of support and cazy!"
      />
      <CustomerCard 
      img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT48ukN18yyXjwJu00yMd3gd4qVi5sBmOgRLg&usqp=CAU '
      profice="nessy"
      adress="Los angeel , CA"
      icon="😘"
      desc='"Great experience overall,Easy to order,smoth delivery,responsive customer service and high quality furniture."'
      />
      <CustomerCard
      img="https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
      profice="tom"
      adress="new york , CA"
      icon="🥰"
      desc="watching tv wount not be the same without my noord sofa.very international thoughtful and beautiful design."
      />
      <CustomerCard
      img="https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?k=20&m=1179420343&s=612x612&w=0&h=G2UGMVSzAXGAQs3pFZpvWlHNRAzwPIWIVtSOxZHsEuc="
      profice="rusid"
      adress="london , Ny"
      icon="😚"
      desc='"Great experience overall,Easy to order,smoth delivery,responsive customer service and high quality furniture."'
      />
      <CustomerCard
      img="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      profice="masew"
      adress="germany , CA"
      icon="😊"
      desc="very international thoughtful and beautiful design.just the right amount of support and cazy!"
      />
     </Carousel>
    </div>
  </div>
  )
}

export default Customers