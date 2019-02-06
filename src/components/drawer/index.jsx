import React from 'react'
import Drawer from "@material-ui/core/Drawer";


export default (props) => {
    return <Drawer anchor="left" open={props.open} >
        <div
            tabIndex={0}
            role="button"
        >
            {props.texto}
        </div>
        {props.withCosito ? <div>con cosito</div> : <div>sin cosito</div>}
    </Drawer>
}