import React from 'react'
import {  Button } from '../components';

const ECommerce = () => {
  return (
    <div className='mt-12'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-xl w-full h-64 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center'>
          <div className='flex justify-between items-center'>
            <div>
              <p className='font-bold text-gray-400'>Earnings</p>
              <p className='text-2xl'>$63,448.78</p>
            </div>
          </div>
          <div className='mt-6'>
            <Button
              color='white'
              bgColor='blue'
              text='Download'
              borderRadius='10px'
            />
          </div>
        </div>



      </div>
      
      
    </div >
  )
}

export default ECommerce