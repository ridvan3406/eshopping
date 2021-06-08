import React from 'react'
import {Card, CardMedia } from '@material-ui/core'

import useStyles from '../styles';

const CoverPage = ({image}) => {

    const classes = useStyles();

    console.log(image)
    return (
        <Card className={classes.root }>
            <CardMedia  className={classes.media} image={image.img}/>  
        </Card>
    )
}

export default CoverPage
