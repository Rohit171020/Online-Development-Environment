import React from 'react';
import { AppBar, Toolbar, styled } from "@mui/material"

const Container = styled(AppBar)`
    background: #060606;
    position: static;
    border-bottom: 1px solid #2f2f2f;
    height: 9vh;
`;

const Header = () => {
    return (
        <Container>
            <Toolbar >
                <h2>Online Development Environment</h2>
            </Toolbar>
        </Container>
    )
}

export default Header