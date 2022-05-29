import React from 'react'
import {Button, ButtonGroup, TextField} from '@mui/material'

enum MESSAGE_TYPES {
    'COLOR',
    'BACKGROUND',
    'TABLE_DATA',
}

export const Delta = () => {
    const randomColor = () => {
        const o = Math.round, r = Math.random, s = 255
        return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')'
    }

    const onBgChange = () => {
    }

    const onColorChange = () => {
        const customEvent = new CustomEvent('message', {detail: 'CUSTOM'})
        console.log('DISPATCHED: ', customEvent)
        window.dispatchEvent(customEvent)
    }
    return (
        <>
            <ButtonGroup variant='outlined' aria-label='outlined button group'>
                <Button onClick={() => onColorChange()}>Send color event</Button>
                <Button onClick={() => onBgChange()}>Send bg event</Button>
                <Button>Three</Button>
            </ButtonGroup>

            <TextField id="standard-basic" label="Standard" variant="standard"/>
            <Button>Three</Button>
        </>
    )
}