import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import styled from 'styled-components';
import Title from './components/Title.jsx';
import Note from './components/Note.jsx';
import socket from './controllers/socket';

class App extends Component {
    constructor() {
        super();

        this.state = {
            socket: socket()
        };
    }

    render() {
        return (
            <AppContainer>
                <LayoutHeader position="static" color="secondary">
                    <Title />
                </LayoutHeader>
                <LayoutContent>
                    <Note socket={this.state.socket} />
                </LayoutContent>
            </AppContainer>
        );
    }
}

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    overflow: hidden;
    min-width: 320;
`;

const LayoutHeader = styled(AppBar)`
    height: 10vh;
    padding: 0;
    justify-content: center;
    align-content: center;
`;

const LayoutContent = styled.main`
    flex: auto;
    min-height: 0;
`;

export default App;
