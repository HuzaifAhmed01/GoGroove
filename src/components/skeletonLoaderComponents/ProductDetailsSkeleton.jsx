import React from 'react'

const ProductDetailsSkeleton = () => {
  return (
    <div className="p-4">
    <div className="flex flex-col lg:flex-row gap-10 justify-around p-4 lg:p-8">
      {/* Carousel Skeleton */}
      <div className="w-full lg:w-[50%] h-[40vh] lg:h-[60vh] mt-8 lg:mt-17 bg-gray-200 animate-pulse rounded-lg"></div>

      {/* Product Details Skeleton */}
      <div className="w-full lg:w-[50%] flex flex-col gap-4 p-2">
        <div className="flex flex-col gap-3">
          <div className="h-4 w-24 bg-gray-200 animate-pulse rounded"></div>
          <div className="h-6 w-48 bg-gray-200 animate-pulse rounded"></div>
          <div className="h-4 w-32 bg-gray-200 animate-pulse rounded"></div>
          <div className="h-6 w-20 bg-gray-200 animate-pulse rounded"></div>
          <div className="flex gap-2">
            <div className="h-10 w-32 bg-gray-200 animate-pulse rounded"></div>
            <div className="h-10 w-32 bg-gray-200 animate-pulse rounded"></div>
          </div>
          <div className="h-4 w-20 bg-gray-200 animate-pulse rounded"></div>
          <div className="h-16 w-full bg-gray-200 animate-pulse rounded"></div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProductDetailsSkeleton
