import React from 'react';
import {Container, Field, Label, Control, Input, Button, Box} from 'bloomer';
import {serverUrl, axios} from './config';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      pass: "",
      unauthorized: false,
      success: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    let response = await axios({
      method: 'post',
      url: serverUrl + 'login',
      data: {
        user: this.state.user,
        pass: this.state.pass
      }
    });
    if (response.data !== "Sent OK") {
      this.setState({
        unauthorized: true,
        success: false
      });
    } else {
      this.setState({
        unauthorized: false,
        success: true
      })
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Container>
          <Field>
            <Label>Username</Label>
            <Control>
              <Input
                type="text"
                name="user"
                placeholder="Username"
                onChange={this.handleChange}
              />
            </Control>
          </Field>  
          <Field>
            <Label>Password</Label>
            <Control>
              <Input
                type="password"
                name="pass"
                placeholder="Password"
                onChange={this.handleChange}
              />
            </Control>
          </Field>
          <Field>
            <Control>
              <Button
                type="submit"
                isColor="primary"
              >
                Login / Signup
              </Button>
            </Control>
          </Field>
          {this.state.unauthorized ? <Box>Unauthorized</Box> : null}
          {this.state.success ? <Box>Success</Box> : null}
        </Container>
      </form>
    );
  }
}