import React from 'react';
import ReactDOM from 'react-dom';

import '../../styles/Backdrop.css'

const Backdrop:React.FC<any> = props => {
    return ReactDOM.createPortal(
        <div className="backdrop" onClick={props.onClick}></div>,
        document.getElementById('backdrop-hook') as HTMLElement
    );
};

export default Backdrop;