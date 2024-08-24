import { useAppDispatch } from '@/hooks/useAppDispatch'
import { clearListTeams, getListTeams } from '@/redux/slices/team.slice'
import { RootState } from '@/redux/store'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const TeamManagementPage = () => {
  const dispatch = useAppDispatch()
  const { listTeams } = useSelector((state: RootState) => state.team)

  useEffect(()=> {
    dispatch(getListTeams(''))

    return (()=> {
      dispatch(clearListTeams())
    })
  }, [])

  return <div>{JSON.stringify(listTeams)}</div>
}

export default TeamManagementPage
