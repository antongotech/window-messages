import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import {Delta} from './components/Delta'
import {Container} from '@mui/material'

const App = () => (
    <Container maxWidth='lg'>
        <Delta/>
    </Container>
)
ReactDOM.render(<App/>, document.getElementById('app'))
