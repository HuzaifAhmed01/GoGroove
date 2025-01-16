import React from 'react'

const AllCardsSkeleton = () => {
  return (
      <div className="w-full py-3 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 px-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="w-full h-auto p-2 flex flex-col items-center text-center bg-gray-200 rounded-lg shadow animate-pulse"
        >
          <div className="w-full h-48 rounded-lg bg-gray-300"></div>
          <div className="w-full mt-2 space-y-2">
            <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
            <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
            <div className="h-8 w-full bg-gray-300 rounded"></div>
          </div>
        </div>
      ))}
    </div>
      
    
  )
}

export default AllCardsSkeleton
