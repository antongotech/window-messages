import {Button, Card, CardActions, CardContent, CardMedia, Typography} from '@mui/material'
import React from 'react'

export const Gamma = () => {
    return (
        <Card sx={{maxWidth: 345}}>
            <CardMedia
                component="img"
                height="140"
                image="https://post.healthline.com/wp-content/uploads/2021/06/lizard-iguana-1200x628-facebook.jpg"
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}
