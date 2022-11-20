import { React } from 'react';

function LazuliLenPill(props){
    return (
        <input type="number"
            className="form-control form-control-sm text-end rounded-pill"
            style={{'height': '1rem', 'width': '3rem'}}
            min={props.min !== undefined ? props.min : 1}
            max={props.max}
            value={props.value}
            onChange={props.onChange}></input>
    );
}

export default LazuliLenPill;