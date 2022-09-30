import { useState, useEffect } from 'react';

function LazuliCard(props) {
    const contents = props.iframeSrc !== undefined ?
        <iframe src={props.iframeSrc} className="h-100 w-100"></iframe> : props.children;

    return (
        <div className="card h-100">
            <div className="card-header">
                <div className="d-flex justify-content-start align-items-center">
                    <div>{props.title}</div>
                </div>
            </div>
            <div className="card-body p-0">
                {contents}
            </div>
        </div>
    );
}

export default LazuliCard;