import React from 'react'
import logo from './logo.svg'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import styled from '@emotion/styled'
import './App.css'

const StyledTodoListContainer = styled(Grid)`
    height: 100vh;
`

function App() {
    return (
        <Container className="HomeContainer">
            <StyledTodoListContainer
                className="LayoutContainer"
                display={'flex'}
                xs={12}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <Grid item>
                    <p>hello</p>
                </Grid>
            </StyledTodoListContainer>
        </Container>
    )
}

export default App
