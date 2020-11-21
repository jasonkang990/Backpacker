import React from 'react';
import {Container, Input, Box, Field, Label} from 'bloomer';
import {serverUrl, axios} from './config';

/* display top 5 scores <table>
   have a search bar <input>
*/

export default class Leaderboard extends React.Component {
    constructor(props) {
      super(props);

    }
  
    render() {
        return(
            <Container>
                <Field>
                    <Label>Search for other players' scores</Label>
                    <Input type='text' placeholder='Search by username'></Input>
                </Field>
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
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </Table>
                </Box>
            </Container>
        );
    }
  }