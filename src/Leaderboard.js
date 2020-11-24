import React from 'react';
import {Container, Input, Box, Field, Label, Control, Table} from 'bloomer';
import {serverUrl} from './config';
import axios from 'axios';

export default class Leaderboard extends React.Component {
    constructor(props) {
      super(props);

    }

    handleChange() {

    }

    async getHighScores() {
        let response = await axios({
            method: 'get',
            url: serverUrl + 'scores',
            withCredentials: true
        });
        let highScores = response.data;
        let topfive = [];
        for (let i = 0; i < 5; i++) {
            topfive[i] = highScores[i];
        }
        return topfive;
    }
  
    render() {
        let topfive = this.getHighScores();
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
                        
                    </tbody>
                </Table>
            </Box>
        </Container>
        );
    }
  }