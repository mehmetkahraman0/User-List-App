import { useEffect, useState } from "react"
import type { User } from './models/User';
import UserCard from './components/UserCard';

function App() {

  const [users, setUsers] = useState<User[]>([])
  const fetchGetUser = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users")
      const data: User[] = await res.json()
      setUsers(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchGetUser()
  }, [])

  console.log(users)

  return (
    <div className="flex flex-row flex-wrap justify-evenly gap-10 mt-5">
      {users.map((user, index) => (
        <UserCard key={index} user={user} />
      ))}
    </div>
  )
}

export default App
