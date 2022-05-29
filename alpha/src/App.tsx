import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import {Container} from '@mui/material'
import {Alpha} from './components/Alpha'
import './index.css'

enum MESSAGE_TYPES {
    'COLOR',
    'BACKGROUND',
    'TABLE_DATA',
}

const App = () => {

    const handleNewMessage = (event) => {
        console.log('EVENT CAUGHT: ', event)
    }

    useEffect(() => {
        window.addEventListener('message', handleNewMessage)

        return () => {
            window.removeEventListener('message', handleNewMessage)
        }
    }, [handleNewMessage])

    return (
        <Container maxWidth='md'>
            <Alpha/>
        </Container>
    )
}

ReactDOM.render(<App/>, document.getElementById('app'))
