const ChipUserStatus = ({ status }: { status: number }) => {
  const chip = (status: number) => {
    switch (status) {
      case 1:
        return (
          <div className='relative grid select-none items-center whitespace-nowrap w-fit rounded-full bg-blue-500 py-1.5 px-3 font-sans text-xs font-bold uppercase  text-white'>
            <span className=''>Active</span>
          </div>
        )
      case -1:
        return (
          <div className='relative grid select-none items-center whitespace-nowrap w-fit rounded-full bg-red-500 py-1.5 px-3 font-sans text-xs font-bold uppercase text-white'>
            <span className=''>Block</span>
          </div>
        )
      case 0:
        return (
          <div className='relative grid select-none items-center whitespace-nowrap w-fit rounded-full bg-green-500 py-1.5 px-3 font-sans text-xs font-bold uppercase text-white'>
            <span className=''>Pending</span>
          </div>
        )
      default:
        return (
          <div className='relative grid select-none items-center whitespace-nowrap w-fit rounded-full bg-cyan-500 py-1.5 px-3 font-sans text-xs font-bold uppercase text-white'>
            <span className=''>Unknown</span>
          </div>
        )
    }
  }

  return chip(status)
}

export default ChipUserStatus
