import React, {useEffect} from 'react'
import ReactDOM from 'react-dom'
import {Container, Grid} from '@mui/material'
import {Alpha} from 'alpha/Alpha'
import {Beta} from 'beta/Beta'
import {Gamma} from 'gamma/Gamma'
import {Delta} from 'delta/Delta'
import './index.css'

enum MESSAGE_TYPES {
    'COLOR',
    'BACKGROUND',
    'TABLE_DATA',
}

const App = () => {

    useEffect(() => {
        window.addEventListener('message', (message) => {
            console.log('Composer, event caught: ', message)
        })
        return () => window.removeEventListener('message', (message) => {
        })
    }, [])

    return (
        <Container maxWidth='lg'>
            <Grid container item xs={12} spacing={5}>
                <Grid item xs={12} lg={8}>
                    <Alpha/>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <Gamma/>
                </Grid>
                <Grid item xs={12} lg={8}>
                    <Beta/>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <Delta/>
                </Grid>
            </Grid>
        </Container>
    )
}
ReactDOM.render(<App/>, document.getElementById('app'))
