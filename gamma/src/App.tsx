import React, {useEffect} from 'react'
import ReactDOM from 'react-dom'
import {Gamma} from './components/Gamma'

import './index.css'
import {Container} from '@mui/material'

const App = () => {

    useEffect(() => {
        window.addEventListener('message', (message) => {

        })
        return () => window.removeEventListener('message', (message) => {
        })
    }, [])

    return (
        <Container maxWidth='lg'>
            <Gamma/>
        </Container>
    )
}
ReactDOM.render(<App/>, document.getElementById('app'))
