import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'

const Services = () => {
    const servicesData=[
                    {
                        title:'Advertising',
                        description:'We turn bold ideas into powerful digital solutions that connect, engage...',
                        icon:assets.ads_icon
                    },
                    {
                        title:'Content marketing',
                        description:'We turn bold ideas into powerful digital solutions that connect, engage and...',
                        icon:assets.marketing_icon
                    },
                    {
                        title:'Content writing',
                        description:'We turn bold ideas into powerful digital solutions that connect...',
                        icon:assets.content_icon
                    },
                    {
                        title:'Social Media',
                        description:'We turn bold ideas into powerful digital solutions that connect...',
                        icon:assets.social_icon
                    },
                     ]
  return (
    <div id='services' className='relative overflow-hidden flex flex-col items-center gap-7 px-4 
sm:px-12 lg:px-24 xl:px-40 pt-10 text-gray-700 dark:text-white'>

  {/* Adjust the -top-110 if the background is still too high or low */}
  <img src={assets.bgImage2} alt="" className='absolute -top-20 -left-70 
        -z-1 dark:hidden'/>
  
  <Title title='How can we help?' desc='From strategy to
   execution, we craft the solution to move your bussiness forward' />
   <div className='flex flex-col md:grid grid-cols-2'>
    {servicesData.map((service,index)=>(
        <ServiceCard key={index} service={service} index={index}/>
    ))}
   </div>
</div>
  )
}

export default Services