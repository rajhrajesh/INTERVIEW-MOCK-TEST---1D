import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #152850;
`

export const LoginCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 81%;
  height: 81vh;
  background-color: #e0eefe;
  border-radius: 29px;
`

export const LoginImage = styled.img`
  width: 50%;
`

export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 41%;
  background-color: #ffffff;
  height: 100%;
  border-radius: 29px;
  padding: 19px;
`

export const LoginHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 29px;
  font-weight: 550;
  color: #183b56;
`

export const InputLabel = styled.label`
  font-size: 15px;
  font-weight: 500;
  color: #5a7184;
  margin-bottom: 14px;
`

export const Input = styled.input`
  width: 80%;
  background-color: transparent;
  height: 41px;
  border-radius: 10px;
  border: 1px solid #c3cad9;
  outline: none;
  padding-left: 20px;
  font-size: 16px;
  font-weight: 500;
  color: #183b56;
  margin-bottom: 20px;
`

export const LoginButton = styled.button`
  width: 89%;
  height: 41px;
  background-color: #1565d8;
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  margin-top: 15px;
  cursor: pointer;
`

export const ErrorMsg = styled.p`
  font-size: 14px;
  font-weight: 550;
  color: #ff0b37;
  align-self: center;
`