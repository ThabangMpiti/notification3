import React from 'react'
import { useState } from 'react'
import './Popup.css'

function Popup(props){
        <div className="popup">
           <div className="popup-inner">
            <button className="close-btn" onClick={() => props.setTrigger()}>close</button>
            { props.children }
           </div>
        </div>
    ) : " "
}
export default Popup;