import { createTeam } from '@/apiRequest/team'
import NextDrawer from '@/components/ui/NextDrawer'
import NextInput from '@/components/ui/NextInput'
import usePushQueryString from '@/hooks/usePushQueryString'
import { IFormTeam, ITeam } from '@/types/team.type'
import { Button } from '@nextui-org/react'
import { Dispatch, memo, SetStateAction, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { toast } from 'react-toastify'

interface Props {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  team: ITeam | null
  setTeam: Dispatch<SetStateAction<ITeam | null>>
}

const AddEditTeam = ({ isOpen, setIsOpen, team, setTeam }: Props) => {
  const [isLoading, setIsLoading] = useState(false)
  const [searchParams] = useSearchParams()
  const pushQueryString = usePushQueryString()
  const handleClose = () => {
    setIsOpen(false)
  }

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormTeam>()

  const onSubmit: SubmitHandler<IFormTeam> = async (data: IFormTeam) => {
    try {
      setIsLoading(true)
      const res = await createTeam(data)
      handleClose()
    } catch (e: any) {
      toast.error(e?.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      <NextDrawer
        title={team ? `Cập nhật team ${team?.name}` : 'Thêm mới team'}
        isOpen={isOpen}
        onClose={handleClose}
      >
        <div className='p-5'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <NextInput
              placeholder='Nhập tên team'
              label='Tên team'
              className='mb-3'
              {...register('name')}
            />
            <Button
              className='bg-transparent border rounded-[5px] bg-primary text-white w-full'
              type='submit'
              isLoading={isLoading}
            >
              Thêm mới
            </Button>
          </form>
        </div>
      </NextDrawer>
    </div>
  )
}

export default memo(AddEditTeam)
