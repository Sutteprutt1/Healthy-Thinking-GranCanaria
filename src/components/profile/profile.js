import {useEffect, useState} from "react"
import {Card} from "../activity-card/card/card"
import {
  UserImg,
  UserName,
  UserWrapper,
  ProfileContainer,
  EmailContainer,
  Span,
  Agenda,
  AgendaContainer,
} from "./styles"
import SuscriptionService from "../../services/suscription.service"
import UserService from "../../services/user.service"
import Navbar from "../navbar/navbar"
import account from "./account.png"

export function UserProfile() {
  const [activity, setActivity] = useState([]);
  const [user, setUser] = useState('');
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    retrieveEvent();
    userData();
  }, [])

  const retrieveEvent = () => {
    SuscriptionService.findActivitiesByUserId(userId)
      .then(response => {
        setActivity(response.data)
      })
      .catch(e => {
        console.log(e)
      })
  }

  const userData = () => {
    UserService.getOne(userId)
      .then(response => {
        console.log(response.data)
        setUser(response.data)
      })
      .catch(e => {
        console.log(e)
      })
  }

  return (
    <>
      <UserWrapper>
        <Navbar></Navbar>
        <ProfileContainer>
          <UserImg src={account} alt="profile-img" />
          <UserName>{user.username}</UserName>
        </ProfileContainer>
        <EmailContainer></EmailContainer>
        <AgendaContainer>
          <Span />
          <Agenda>Agenda</Agenda>
          <Span />
        </AgendaContainer>

        {activity &&
          activity.map((event, index) => <Card key={index} activity={event} type="delete"/>)}
      </UserWrapper>
    </>
  )
}
