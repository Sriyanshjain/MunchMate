const ShimmerRestaurant = () => {
    return (
      <div className='animate-pulse'>
        <div className='flex w-[80%]  justify-between items-center border-dashed border-b  pb-8'>
          <div className='basis-6/12 space-y-2 '>
            <div className='bg-gray-200 h-6 rounded-md'></div>
            <div className='bg-gray-200 w-[50%] h-6 rounded-md'></div>
          </div>
  
          <div className='basis-2/12 bg-gray-200 h-14 rounded-md'></div>
        </div>
  
        {/* Restaurant Details */}
        <div className='w-full my-4 bg-gray-200 h-16'></div>
        <div className='space-y-4'>
          <div className="flex flex-col gap-4">
          <div className='h-4 bg-gray-100 w-[80%] rounded-md'></div>
          <div className='h-4 bg-gray-100 w-[80%] rounded-md'></div>
          </div>
         
        </div>
      </div>
    );
  };
  
  export default ShimmerRestaurant;