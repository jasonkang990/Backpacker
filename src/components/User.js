import React from 'react';
import axios from 'axios';
import {serverUrl} from '../config'
import { Card, CardHeader, CardHeaderTitle, CardContent, Content } from 'bloomer';

export default class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  async componentDidMount() {
    let user = await axios({
      method: 'get',
      url: serverUrl + 'user',
      withCredentials: true
    });
    this.setState({
      user: user.data
    });

    let highscore = await axios({
      method: 'get',
      url: serverUrl + 'highscore',
      withCredentials: true
    });
    this.setState({
      highScore: highscore.data
    });
  }

  render() {
    if (this.state.user) {
      return(
        <Card className = "userCard">
          <CardHeader>
            <CardHeaderTitle>
              {this.state.user}
            </CardHeaderTitle>
          </CardHeader>
          <CardContent>
            <Content>
              Total Player Score: {this.state.highScore}
            </Content>
          </CardContent>
        </Card>
      );
    }

    return null;
  }
}