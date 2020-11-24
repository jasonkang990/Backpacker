import React from 'react';
import { Container, Box, Table } from 'bloomer';
import { serverUrl } from './config';
import axios from 'axios';

export default class Leaderboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leaderboardData: null
    }
  }

  async componentDidMount() {
    let response = await axios({
      method: 'get',
      url: serverUrl + 'scores',
      withCredentials: true
    });
    this.setState({
      leaderboardData: response.data
    });
  }

  render() {
    let results = [];

    if (this.state.leaderboardData) {
      let noResults = this.state.leaderboardData.length;
      if (noResults > 10) {
        noResults = 10;
      }
      for (let i = 0; i < noResults; i++) {
        results.push(
          <tr>
            <th>{this.state.leaderboardData[i].user}</th>
            <th>{this.state.leaderboardData[i].highScore}</th>
          </tr>
        );
      }
    }

    return (
      <Container>
        <Box>
          <Table>
            <thead>
              <tr>
                <th>Username</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {results}
            </tbody>
          </Table>
        </Box>
      </Container>
    );
  }
}