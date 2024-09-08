import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { MdAccessTimeFilled } from "react-icons/md";
const TopBar = () => {
  return (
    <div className='pt-5'>
         <div className="bg-gray-900 text-white text-sm py-2 px-4 fixed top-0 w-full z-50 shadow-md ">
      <div className="container mx-auto flex gap-6 justify-end items-center">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-1">
            <IoLocationOutline className="w-5 h-5 text-orange-500" />
            <span>Sydney, Australia</span>
          </div>
          <div className="flex items-center space-x-1">
            <IoCall className="w-5 h-5 text-orange-500" />
            <span>0468328227</span>
          </div>
          <div className="flex items-center space-x-1">
            <MdAccessTimeFilled className="w-5 h-5 text-orange-500" />
            <span>Mon - Fri: 9:00am - 5:00pm</span>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <MdAccessTimeFilled className="w-5 h-5 text-orange-500" />
          <span>Weekends Appointments Only</span>
        </div>
      </div>
    </div>
    </div>
  )
}

export default TopBar