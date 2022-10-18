import React from 'react';
import Footer from './footer';
import Header from './header';

export default function Home() {
  return (
    <div className="body flex flex-col min-h-screen justify-between">
      <Header/>
      <div className="h-full w-full flex flex-col justify-center">
        <div className='grid justify-center grid-flow-row md:grid-flow-col w-full items-center h-full p-6'>
            <div className='flex flex-col text-white md:m-20 p-3 m-3 bg-[#141613] text-3xl border-[1px] rounded-md font-sans'>
                <div className='text-center py-2 flex flex-col justify-start'>
                  <span>Join now to meet new people.</span><span>Join to get your work done.</span>
                </div>
                <div className='flex justify-center flex-col md:flex-row'>
                    <a href="/login" className='md:text-6xl shadow-2xl bg-[#222024] w-full hover:bg-white border-2 hover:text-[#222024] py-1 md:px-5 m-2 rounded-md'>LOGIN</a>
                    <a href="/register" className='md:text-6xl bg-[#222024]  shadow-2xl w-full hover:bg-white border-2 hover:text-[#222024] py-1 md:px-5 m-2 rounded-md'>REGISTER</a>
                </div>
            </div>
            <img src="images/mannwomen.jfif" className='rounded h-48 w-48 md:h-96 md:w-96 hidden md:block' alt="Dog and cat"/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
