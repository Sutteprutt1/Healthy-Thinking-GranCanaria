import { useEffect, useState } from "react"
import { Card } from "../activity-card/card/card"
import {
  UserImg,
  UserName,
  UserWrapper,
  ProfileContainer,
  ImgForm,
  ImgInput,
  EmailContainer,
  Email,
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
  const [hasImage, setHasImage] = useState(false);
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
        setUser(response.data)
        response.data.filename ? setHasImage(true) : setHasImage(false)
      })
      .catch(e => {
        console.log(e)
      })
  }

  const updateImage = (e) => {
    let file = document.getElementById("uploadImage").files[0]
    const dataToSend = {
      username: user.username,
      email: user.email,
      password: user.password,
      location: user.location,
      filename: file,
    };
    console.log(file);
    UserService.updateOne(userId, dataToSend)
      .then(() => {
        window.location.reload();
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
          {hasImage ? (
            <UserImg src={'https://healthy-thinking.onrender.com/public/images/' + user.filename} alt="profile-img" />
          ) : (
            <UserImg src={account} alt="profile-img" />
          )}
          <ImgForm onSubmit={updateImage}>
            <ImgInput
              id="uploadImage"
              onChange={(e) => updateImage(e.target.value)}
              type="file"
              accept=".jpg,.png"
            />
          </ImgForm>
          <UserName>{user.username}</UserName>
        </ProfileContainer>
        <EmailContainer>
          <Email>e-mail: {user.email}</Email>
        </EmailContainer>
        <AgendaContainer>
          <Span />
          <Agenda>Agenda</Agenda>
          <Span />
        </AgendaContainer>

        {activity &&
          activity.map((event, index) => <Card key={index} activity={event} type="delete" />)}
      </UserWrapper>
    </>
  )
}
