import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';

export default class Note extends Component {
    constructor() {
        super();

        this.state = {
            text: ""
        };
    }

    handleChange = (event) => {
        this.setState({
            text: event.target.value
        });
    };

    render() {
        return (
            <NoteText
                variant="outlined"
                fullWidth
                multiline
                value={this.state.text}
                onChange={this.handleChange}
                rows={10}
            />
        );
    }
}

const NoteText = styled(TextField)`
    display: flex;
    width: 50vw;
    height: 85vh;
    margin: 0 auto;
    padding: 20px;
`;