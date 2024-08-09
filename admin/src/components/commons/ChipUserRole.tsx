const ChipUserRole = ({ content }: { content: string }) => {
  return (
    <div className='relative grid select-none items-center whitespace-nowrap w-fit rounded-full bg-blue-500 py-1.5 px-3 font-sans text-xs font-bold uppercase  text-white'>
      <span className=''>{content}</span>
    </div>
  )
}

export default ChipUserRole
