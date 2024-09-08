import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { MdAccessTimeFilled } from "react-icons/md";
const TopBar = () => {
  return (
    <div className=''>
     <div className=''>
  <div className="bg-gray-900 text-white text-sm py-2 px-4 w-full z-50 shadow-md">
    <div className="w-full flex flex-col sm:flex-row sm:justify-end gap-4 sm:gap-6 items-start sm:items-center">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center">
        <div className="flex items-center space-x-1 pt-2 mb-2">
          <IoLocationOutline className="w-5 h-5 text-orange-500" />
          <span className='fs-6'>Sydney, Australia</span>
        </div>
        <div className="flex items-center space-x-1 pt-2 mb-2 ">
          <IoCall className="w-5 h-5 text-orange-500" />
          <span  className='fs-6'>0468328227</span>
        </div>
        <div className="flex items-center space-x-1 pt-2 mb-2">
          <MdAccessTimeFilled className="w-5 h-5 text-orange-500" />
          <span  className='fs-6'>Mon - Fri: 9:00am - 5:00pm</span>
        </div>
      </div>
      <div className="flex items-center space-x-1 pt-2 mb-2">
        <MdAccessTimeFilled className="w-5 h-5 text-orange-500" />
        <span  className='fs-6'>Weekends Appointments Only</span>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default TopBar