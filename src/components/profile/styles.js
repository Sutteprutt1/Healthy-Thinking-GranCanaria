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
`

export const UserImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  margin-top: -50%;
`

export const UserName = styled.h1`
  font-size: 18px;
  display: flex;
  justify-content: center;
`

export const EmailContainer = styled.input`
  background-color: ${colors.lightGreen};
  border-radius: 2em;
  border: none;
  padding: 5px 55px;
  margin-top: 20px;
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
