import { useSearchParams } from 'react-router-dom'
import qs from 'query-string'

const usePushQueryString = () => {
  let [searchParams, setSearchParams] = useSearchParams()

  function handlePushLocationSearch(data: any) {
    // const locationSearch = qs.parse(location.search)
    const filter = qs.stringify(data)
    setSearchParams(filter)
  }

  return handlePushLocationSearch
}

export default usePushQueryString
