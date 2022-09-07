import { useState, useEffect } from 'react';

export default function LazuliCard(props) {
    const toggleExtend = (e)=> {
        $(e.target).parents('.col').toggleClass("vh-100 vw-100");
    }

    const contents = props.iframeSrc !== undefined ?
        <iframe src={props.iframeSrc} className="h-100 w-100"></iframe> : props.children;

    return (
        <div className="card h-100">
            <div className="card-header">
                <div className="d-flex justify-content-start align-items-center">
                    <div>{props.title}</div>
                    {/* <div className="ms-auto"></div>
                    <button type="button" className="btn btn-sm btn-lazuli" onClick={toggleExtend}> </button> */}
                </div>
            </div>
            <div className="card-body p-0">
                {contents}
            </div>
        </div>
    );
}