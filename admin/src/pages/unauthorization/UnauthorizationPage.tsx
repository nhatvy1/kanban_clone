const UnauthorizationPage = () => {
  return (
    <div className='h-full flex flex-col justify-center items-center'>
      <h1 className='text-4xl font-bold text-primary'>403 Forbidden</h1>
      <p className='text-gray-500 mt-4'>
        You do not have permission to access this page.
      </p>
    </div>
  )
}

export default UnauthorizationPage
