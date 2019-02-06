import React from 'react'
import {Paper} from "@material-ui/core/es/index";

export default (props) => {
    return (
        <Paper elevation={1} style={{color: 'black'}}>
            <h1>{props.titulo}</h1>
            {props.imageRight? <SlideRight content={props} /> : <SlideStandar content={props}/>}
        </Paper>
    )
}