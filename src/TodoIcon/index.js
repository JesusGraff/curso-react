import React from "react";
import {BsCheckAll} from 'react-icons/bs';
import {AiOutlineDelete} from 'react-icons/ai';
import './TodoIcon.css';

const iconTypes = {
    "check": color => (
        <BsCheckAll className="Icon-svg Icon-svg--check" fill={color} />
    ),
    "delete": color => (
        <AiOutlineDelete className="Icon-svg Icon-svg--delete" fill={color} />
    )
}
function TodoIcon({ type, color = 'gray', onClick }) {
    return(
        <span 
      className={`Icon-container Icon-container--${type}`}
      onClick={onClick}
      >
        {iconTypes[type](color)}
      </span>
    );
    
}

export {TodoIcon};