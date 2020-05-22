import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

export default class Title extends Component {
    render() {
        return (
            <TitleContent variant="h1">{"CRDT Demo"}</TitleContent>
        );
    }
}

const TitleContent = styled(Typography)`
    text-align: center;
`;