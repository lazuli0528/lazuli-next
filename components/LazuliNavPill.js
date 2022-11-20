import { React } from 'react';

function LazuliNavPill(props){
    const className = "d-flex justify-content-start align-items-center rounded-pill " + props.className;

    return (
        <div className={className}>
            {props.children}
        </div>
    );
}

export default LazuliNavPill;