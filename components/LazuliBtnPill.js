import { React } from 'react';

function LazuliBtnPill(props){
    const className = "btn btn-sm rounded-pill " + props.className;

    return (
        <button type="button"
            className={className}
            onClick={props.onClick}></button>
    );
}

export default LazuliBtnPill;