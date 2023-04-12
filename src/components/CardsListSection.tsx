import { Container } from "./container";
import { UserInfoCard } from "./userInfoCard";

export function CardsListSection() {
  return (
    <Container as="section" >
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">  
        <UserInfoCard />
        <UserInfoCard />
        <UserInfoCard />
      </ul>
    </Container>
  )
}