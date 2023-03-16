import styled from "styled-components"
import {colors} from "../globalStyles"

export const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`
export const ProfileContainer = styled.div`
  background-color: ${colors.lightGreen};
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 120px;
  padding: 0 90px 20px;
  border-radius: 20px;
  position: relative;
`

export const UserImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  margin-top: -50%;
  overflow: hidden;
`

export const ImgForm = styled.form`
  position: absolute;
  width: 150px;
  height: 150px;
  top: -50%;
`

export const ImgInput = styled.input`
  width: 99%;
  height: 99%;
  opacity: 0;
`
export const UserName = styled.h1`
  font-size: 22px;
  display: flex;
  justify-content: center;
`

export const EmailContainer = styled.div`
  background-color: ${colors.lightGreen};
  border-radius: 2em;
  border: none;
  margin-top: 20px;
  width: 318px;
  height: 40px;
  display: flex;
`
export const Email = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 20px;
  align-self: center;
  font-size: 14px;
`

export const Span = styled.span`
  display: flex;
  padding: 0 60px;
  margin: 0 20px;
  border-bottom: 1px solid ${colors.lightGreen};
`
export const AgendaContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 15px 0;
  margin-top: 70px;
`
export const Agenda = styled.h3`
  font-family: sans-serif;
  font-style: italic;
  color: ${colors.darkGreen};
  padding: 0;
  margin: 0;
`
