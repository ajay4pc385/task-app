import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { MdAccessTimeFilled } from "react-icons/md";
const TopBar = () => {
  return (
    <div>
          <div className=" bg-gray-900 text-white text-sm py-2 p-3 px-4 fixed top-0 w-full z-50 shadow-md">
          <div className="container mx-auto flex gap-3 justify-end items-center">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <IoLocationOutline className='w-4 h-6 text-orange-500'/>
                <span className='fs-6'>Sydney, Australia</span>
              </div>
              <div className="flex items-center space-x-1">
                <IoCall className='w-4 h-6 text-orange-500'/>
                <span className='fs-6'>0468328227</span>
              </div>
              <div className="flex items-center space-x-1">
                <MdAccessTimeFilled className='w-4 h-6 text-orange-500'/>
                <span className='fs-6'>Mon - Fri: 9:00am - 5:00pm</span>
              </div>
            </div>
            <div className="flex items-center space-x-1">
            <MdAccessTimeFilled className='w-4 h-6 text-orange-500'/>

            <span className='fs-6'> Weekends Appointments Only</span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default TopBar