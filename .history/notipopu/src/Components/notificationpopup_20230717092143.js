import React from 'react'
import { useState } from 'react'
import './Popup.css'

function Popup(props){
    const [setTrigger] =useState(false);
    return (props.trigger) ? (
        <div className="popup">
           <div className="popup-inner">
            <button className="close-btn" onClick={() => props.setTrigger(false)}>close</button>
            { props.children }
           </div>
        </div>
    ) : " "
}
export default Popup;