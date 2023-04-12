import { useEffect, useState } from "react"
import { users } from "../types/users";

interface Props {
  amount: number
}

export function useUsers({amount}:Props) {
  const [users, setUsers] = useState<users[]>();

  useEffect(() => {
    const getUsers: Promise<users | void> =  fetch(`https://randomuser.me/api/?results=${amount}`)
      .then(res => res.json())
      .then(usersData => setUsers(usersData?.results) );
  }, [])
  
  return {
    users
  }
}