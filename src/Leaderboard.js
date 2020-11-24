import React from 'react';
import {Container, Input, Box, Field, Label, Control, Table} from 'bloomer';
import {serverUrl} from './config';
import axios from 'axios';

export default class Leaderboard extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        user0: null,
        user1: null,
        user2: null,
        user3: null,
        user4: null,
        score0: null,
        score1: null,
        score2: null,
        score3: null,
        score4: null,
      }
    }

    async componentDidMount() {
        let response = await axios({
            method: 'get',
            url: serverUrl + 'scores',
            withCredentials: true
        });
        let highScores = response.data;
        this.setState({
            user0: highScores[0].user,
            user1: highScores[1].user,
            user2: highScores[2].user,
            user3: highScores[3].user,
            user4: highScores[4].user,
            score0: highScores[0].highScore,
            score1: highScores[1].highScore,
            score2: highScores[2].highScore,
            score3: highScores[3].highScore,
            score4: highScores[4].highScore,
        });
    }
  
    render() {
        // let topfive = this.getHighScores().then((value) => {
        //     console.log(value);
        //     topfive = value;
        //     console.log(topfive);
        // });
        return(
            <Container>
            <form autoComplete="off">
                <Field>
                    <Label>Search for other players' scores</Label>
                    <Control>
                        <Input type='text' placeholder='Search by username'></Input>
                    </Control>
                </Field>
            </form>
            <Box>
                <Table>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>{this.state.user0}</th>
                            <th>{this.state.score0}</th>
                        </tr>
                        <tr>
                            <th>{this.state.user1}</th>
                            <th>{this.state.score1}</th>
                        </tr>
                        <tr>
                            <th>{this.state.user2}</th>
                            <th>{this.state.score2}</th>
                        </tr>
                        <tr>
                            <th>{this.state.user3}</th>
                            <th>{this.state.score3}</th>
                        </tr>
                        <tr>    
                            <th>{this.state.user4}</th>
                            <th>{this.state.score4}</th>
                        </tr>
                    </tbody>
                </Table>
            </Box>
        </Container>
        );
    }
}