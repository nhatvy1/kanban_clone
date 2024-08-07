import { ColumnDef } from '@tanstack/react-table'

export type Payment = {
  id: number
  amount: number
  status: 'pending' | 'processing' | 'success' | 'failed'
  email: string
}

// export const columns: ColumnDef<Payment>[] = [
//   {
//     accessorKey: 'id',
//     header: () => <div className='text-right'>ID</div>,
//     cell: ({ row }) => {
//       const id = parseFloat(row.getValue('id'))
//       return <div className='text-right font-medium'>{id}</div>
//     }
//   },
//   {
//     accessorKey: 'amount',
//     header: () => <div className='text-right'>Amount</div>,
//     cell: ({ row }) => {
//       const amount = parseFloat(row.getValue('amount'))
//       return <div className='text-right font-medium'>{amount}</div>
//     }
//   },
//   {
//     accessorKey: 'status',
//     header: () => <div className='text-right'>Status</div>,
//     cell: ({ row }) => {
//       const status = parseFloat(row.getValue('status'))
//       return <div className='text-right font-medium'>{status}</div>
//     }
//   },
//   {
//     accessorKey: 'email',
//     header: () => <div className='text-right'>Email</div>,
//     cell: ({ row }) => {
//       const email = parseFloat(row.getValue('email'))
//       return <div className='text-right font-medium'>{email}</div>
//     }
//   },
// ]

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'id',
    header: 'ID'
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
]
