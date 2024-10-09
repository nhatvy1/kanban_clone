import { Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/react'
import { ReactNode } from 'react'
import { MdOutlineArrowRightAlt } from 'react-icons/md'

interface Props {
  children: ReactNode
  title?: string
  isOpen: boolean
  onClose: any
  placement?: 'left' | 'right'
}

const NextDrawer = ({
  children,
  title,
  isOpen,
  onClose,
  placement = 'left'
}: Props) => {
  const motionProps =
    placement === 'left'
      ? {
          initial: { x: '100%' },
          animate: { x: '0%' },
          exit: { x: '100%' },
          transition: { duration: 0.3 }
        }
      : {
          initial: { x: '100%' },
          animate: { x: '0%' },
          exit: { x: '100%' },
          transition: { duration: 0.3 }
        }

  const handleClose = () => {
    onClose()
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        backdrop='opaque'
        motionProps={motionProps && motionProps}
        classNames={{
          wrapper: `w-full overflow-hidden ${
            placement === 'left' ? '!justify-end' : '!justify-start'
          }`,
          base: `max-h-[100vh] min-w-[30%] v-max max-w-[30%] h-full !my-0 !mr-0 !ml-0 rounded-none border-l-1 border-default-300`,
          header: 'justify-end border-b-1 border-default-200',
          body: 'overflow-y-auto rounded-tr-none !rounded-none p-0',
          closeButton: 'right-5 z-[100] text-lg'
        }}
        hideCloseButton
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='flex items-center justify-between gap-1'>
                <p>{title}</p>
                <div className='flex justify-end'>
                  <MdOutlineArrowRightAlt
                    size={24}
                    className='text-grayNormal cursor-pointer'
                    onClick={onClose}
                  />
                </div>
              </ModalHeader>
              <ModalBody>{children}</ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default NextDrawer
