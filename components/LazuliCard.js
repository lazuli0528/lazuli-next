import { useState, useEffect } from 'react';

export default function LazuliCard(props) {
    const [title, setTitle] = useState(props.title);

    return (
        <div className="card">
            <div className="card-header">
                {title}
            </div>
            <div className="card-body p-0">
                {props.children}
            </div>
        </div>
    );
}