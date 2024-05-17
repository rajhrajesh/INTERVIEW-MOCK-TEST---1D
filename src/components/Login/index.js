import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  LoginContainer,
  LoginCardContainer,
  LoginImage,
  LoginFormContainer,
  LoginHeading,
  InputLabel,
  Input,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {userId: '', userPin: '', loginError: '', errMessage: ''}

  loginSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  loginError = errMsg => {
    this.setState({loginError: true, errMessage: errMsg})
  }

  loginRequest = async event => {
    event.preventDefault()
    const {userId, userPin} = this.state
    const url = 'https://apis.ccbp.in/ebank/login'
    const userData = {user_id: userId, pin: userPin}
    const options = {
      method: 'POST',
      body: JSON.stringify(userData),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.loginSuccess(data.jwt_token)
    } else {
      this.loginError(data.error_msg)
    }
  }

  onChangeUserId = event => {
    this.setState({userId: event.target.value})
  }

  onChangePin = event => {
    this.setState({userPin: event.target.value})
  }

  render() {
    const {userId, userPin, loginError, errMessage} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <LoginContainer>
        <LoginCardContainer>
          <LoginImage
            src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
            alt="website login"
          />

          <LoginFormContainer onSubmit={this.loginRequest}>
            <LoginHeading>Welcome Back!</LoginHeading>
            <InputLabel htmlFor="ID">User ID</InputLabel>
            <Input
              id="ID"
              type="text"
              value={userId}
              placeholder="Enter User ID"
              onChange={this.onChangeUserId}
            />

            <InputLabel htmlFor="PIN">PIN</InputLabel>
            <Input
              id="PIN"
              type="password"
              value={userPin}
              placeholder="Enter PIN"
              onChange={this.onChangePin}
            />

            <LoginButton type="submit">Login</LoginButton>
            {loginError ? <ErrorMsg>{errMessage}</ErrorMsg> : null}
          </LoginFormContainer>
        </LoginCardContainer>
      </LoginContainer>
    )
  }
}

export default Login