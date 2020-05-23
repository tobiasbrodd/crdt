import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

export default class Note extends Component {
    constructor() {
        super();

        this.state = {
            note: "",
            noteID: "note1"
        };
    }

    componentDidMount() {
        this.props.socket.registerHandler(this.handler);

        this.props.socket.join(this.state.noteID, (note) => {
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

    handleNoteChange = (event) => {
        const note = event.target.value;
        this.setState({
            note: note
        });

        this.props.socket.edit(this.state.noteID, note, (note) => {
            console.log(note);
        });
    }

    handleNoteIDChange = (event) => {
        const noteID = event.target.value;
        this.setState({
            noteID: noteID
        });
    }

    submitNoteIDChange = () => {
        this.props.socket.join(this.state.noteID, (note) => {
            this.setState({
                note: note
            });
        });
    }

    render() {
        return (
            <NoteContainer>
                <NoteField
                    variant="outlined"
                    label="Note"
                    fullWidth
                    multiline
                    value={this.state.note}
                    onChange={this.handleNoteChange}
                    rows={10}
                />
                <NoteIDField
                    variant="standard"
                    label="Note ID"
                    fullWidth
                    value={this.state.noteID}
                    onChange={this.handleNoteIDChange}
                />
                <NoteButton
                    color="primary"
                    variant="contained"
                    type="submit"
                    onClick={this.submitNoteIDChange}
                >
                    {"Change Note"}
                </NoteButton>
            </NoteContainer>
        );
    }
}

const NoteContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const NoteField = styled(TextField)`
    width: 50vw;
    margin: 20px;
`;

const NoteIDField = styled(TextField)`
    width: 200px;
    margin: 20px;
`;

const NoteButton = styled(Button)`
    padding: 10px;
`;