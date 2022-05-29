import React, {useEffect} from 'react'
import ReactDOM from 'react-dom'
import {Container} from '@mui/material'
import {Beta} from './components/Beta'
import './index.css'

enum MESSAGE_TYPES {
    'COLOR',
    'BACKGROUND',
    'TABLE_DATA',
}

const App = () => {
    useEffect(() => {
        window.addEventListener('message', (customEvent: CustomEvent) => {
            const {detail} = customEvent || {}
            console.log('data from custom event', JSON.stringify(detail))
        })
        return () => window.removeEventListener('eventFromMfe', (message) => {
        })
    }, [])

    return (
        <Container maxWidth='md'>
            <Beta/>
        </Container>
    )
}

ReactDOM.render(<App/>, document.getElementById('app'))
