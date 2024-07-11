export const mapOrder = <T>(
  originalArray: T[],
  orderArray: string[],
  key: keyof T
) => {
  if (!originalArray || !orderArray || !key) return []

  const clonedArray = [...originalArray]
  const orderedArray = clonedArray.sort((a: T, b: T) => {
    return (
      orderArray.indexOf(a[key] as string) -
      orderArray.indexOf(b[key] as string)
    )
  })

  return orderedArray
}

//   example
const originalItems = [
  { id: 'id-1', name: 'One' },
  { id: 'id-2', name: 'Two' },
  { id: 'id-3', name: 'Three' },
  { id: 'id-4', name: 'Four' },
  { id: 'id-5', name: 'Five' }
]
const itemOrderIds = ['id-5', 'id-4', 'id-2', 'id-3', 'id-1']
const key = 'id'

const orderedArray = mapOrder(originalItems, itemOrderIds, key)
console.log(orderedArray)