import { useSearchParams } from 'react-router-dom'
import qs from 'query-string'

const usePushQueryString = () => {
  let [searchParams, setSearchParams] = useSearchParams()

  function handlePushLocationSearch(data: any) {
    const filter = qs.stringify(data, { skipEmptyString: true })
    setSearchParams(filter)
  }

  return handlePushLocationSearch
}

export default usePushQueryString
