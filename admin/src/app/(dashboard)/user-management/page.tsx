import { columns, Payment } from "@/components/pages/user-management/columns"
import { UserTable } from "@/components/pages/user-management/UserTable"

const UserManagementPage = () => {
  const data: Payment[] = [
    {
      id: 1,
      amount: 100,
      status: "pending",
      email: "m@example.com",
    }
  ]
  return (
    <div>
      <UserTable data={data} columns={columns}/>
    </div>
  )
}

export default UserManagementPage
