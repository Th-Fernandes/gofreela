import { useUsers } from "../hooks/useUsers";
import { Container } from "./container";
import { UserInfoCard } from "./userInfoCard";

export function CardsListSection() {
  const { users } = useUsers({amount: 28})

  return (
    <Container as="section" className="mb-8">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">  
        {
          users?.map((user) => (
            <UserInfoCard key={user.login.uuid}/>
          ))
        }
      </ul>
    </Container>
  )
}