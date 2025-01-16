import React from 'react'

const ProductGridSkeleton = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
    {[...Array(6)].map((_, index) => (
      <div
        key={index}
        className="bg-gray-200 rounded-lg overflow-hidden p-4 flex flex-col items-center animate-pulse"
      >
        <div className="w-28 h-24 mb-3 bg-gray-300 rounded-lg"></div>
        <div className="w-3/4 h-4 bg-gray-300 rounded mb-2"></div>
        <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
      </div>
    ))}
  </div>
  )
}

export default ProductGridSkeleton
