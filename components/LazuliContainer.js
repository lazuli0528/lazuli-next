import {React, useState, useEffect} from 'react';

import CardColumns from './LazuliCardColumns';
import Card from './LazuliCard';
import Sample1 from './Sample1';
import Sample2 from './Sample2';
import SchulteTable from './LazuliSchultetable';
import Chessboard from './LazuliChessboard';

function LazuliContainer(props){
    const [length, setLength] = useState(5);
    const [isStartShulte, setIsStartShulte] = useState(false);

    const start = ()=> {
        setIsStartShulte(!isStartShulte);
    }

    return (
        <div className="container bg-lazuli">
            <CardColumns>
                <Card title="Schulte Table">
                    <nav className="navbar">
                        <div className="ms-auto"></div>
                        <div className="d-flex justify-content-start align-items-center rounded-pill bg-lazuli">
                            <input type="number" min={1} className="form-control form-control-sm text-end rounded-pill" style={{'height': '1rem', 'width': '3rem'}} value={length} onChange={(e)=> { setLength(e.target.value) }}></input>
                            <button type="button" className="btn btn-sm rounded-pill" onClick={start}>
                                start
                            </button>
                        </div>
                    </nav>

                    <SchulteTable length={length} isStart={isStartShulte}></SchulteTable>
                </Card>
                <Card title="Chessboard">
                    <div className="d-flex justify-content-center">
                        <Chessboard></Chessboard>
                    </div>
                </Card>
                <Card title="Next.js Sample - localStorage CRUD by jquery">
                    <Sample1></Sample1>
                </Card>
                <Card title="Next.js Sample - Getting data by axios">
                    <Sample2></Sample2>
                </Card>
                {/* <Card title="iframe test" iframeSrc="https://lazuli0528.github.io/lazuli0528/">
                </Card> */}
            </CardColumns>
        </div>
    );
}

export default LazuliContainer;