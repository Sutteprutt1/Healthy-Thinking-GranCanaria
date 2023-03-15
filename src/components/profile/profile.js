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
import ActivityService from "../../services/activity.service.js"
import Navbar from "../navbar/navbar"
import account from "./account.png"

export function UserProfile() {
  const [activity, setActivity] = useState([])

  useEffect(() => {
    retrieveEvent()
  }, [])

  const retrieveEvent = () => {
    SuscriptionService.findActivitiesByUserId(localStorage.getItem("userId"))
      .then(response => {
        setActivity(response.data)
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
          <UserName>Your name</UserName>
        </ProfileContainer>
        <EmailContainer></EmailContainer>
        <AgendaContainer>
          <Span />
          <Agenda>Agenda</Agenda>
          <Span />
        </AgendaContainer>

        {activity &&
          activity.map((event, index) => <Card key={index} activity={event} />)}
      </UserWrapper>
    </>
  )
}
