import { Skeleton } from "@nextui-org/react"

const SkeletonTable = () => {
  return (
    <div className="">
      {Array.from({ length: 1 }, (_, index) => (
        <div key={index}>
          <Skeleton className="w-full h-10 bg-red-400"/>
        </div>
      ))}
    </div>
  )
}

export default SkeletonTable
