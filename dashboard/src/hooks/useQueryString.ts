import { useLocation } from 'react-router-dom'
import qs from 'query-string'
import { useMemo } from 'react'

const useQueryString = () => {
  const location = useLocation()
  const queryString = useMemo(
    () => qs.parse(location.search),
    [location.search]
  )

  return queryString
}

export default useQueryString
