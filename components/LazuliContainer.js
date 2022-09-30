import {React, useState, useEffect} from 'react';

import CardColumns from './LazuliCardColumns';
import Card from './LazuliCard';
import Sample1 from './Sample1';
import Sample2 from './Sample2';
import SchulteTable from './LazuliSchultetable';
import Chessboard from './LazuliChessboard';

function LazuliContainer(props){
    return (
        <div className="container bg-lazuli">
            <CardColumns>
                <Card title="Schulte Table">
                    <SchulteTable length={5}></SchulteTable>
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