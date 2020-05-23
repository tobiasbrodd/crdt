import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import socket from '../controllers/socket';

export default class Note extends Component {
    constructor() {
        super();

        this.state = {
            note: "",
            noteID: "note1",
            client: socket()
        };
    }

    componentDidMount() {
        this.state.client.registerHandler(this.handler);

        this.state.client.join(this.state.noteID, (note) => {
            this.setState({
                note: note
            });
        });
    }

    handler = (message) => {
        const noteID = message.noteID;
        const note = message.note;

        console.log(noteID + ": " + note);

        this.setState({
            note: note
        });
    }

    handleChange = (event) => {
        const note = event.target.value;
        this.setState({
            note: note
        });

        this.state.client.edit(this.state.noteID, note, (note) => {
            console.log(note);
        });
    }

    render() {
        return (
            <NoteText
                variant="outlined"
                fullWidth
                multiline
                value={this.state.note}
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