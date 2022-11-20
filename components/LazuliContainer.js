import {React, useState, useEffect} from 'react';

import CardColumns from './LazuliCardColumns';
import Card from './LazuliCard';
import Sample1 from './Sample1';
import Sample2 from './Sample2';
import SchulteTable from './LazuliSchultetable';
import Chessboard from './LazuliChessboard';
import Canvas from './LazuliCanvas';
import PasswordGame from './LazuliPasswordGame';
import NavPill from './LazuliNavPill';
import LenPill from './LazuliLenPill';
import BtnPill from './LazuliBtnPill';

function LazuliContainer(props){
    const [shulteLength, setShulteLength] = useState(5);
    const [isReloadShulte, setIsReloadShulte] = useState(false);
    const [pwLen, setPwLen] = useState(8);
    const [isReloadPw, setIsReloadPw] = useState(false);
    const [isHiddenPw, setIsHiddenPw] = useState(false);
    const [isNotMark, setIsNotMark] = useState(true);

    return (
        <div className="container bg-lazuli">
            <CardColumns>
                <Card title="Password Game">
                    <nav className="navbar">
                        <PasswordGame length={pwLen} isReload={isReloadPw} isHidden={isHiddenPw} isNotMark={isNotMark}></PasswordGame>
                        <div className="ms-auto"></div>
                        <NavPill className="bg-lazuli">
                            <LenPill
                                value={pwLen}
                                onChange={(e)=> { setPwLen(e.target.value) }}></LenPill>
                            <BtnPill className="btn-reload" onClick={()=> {setIsReloadPw(!isReloadPw)}}></BtnPill>
                            <BtnPill className="btn-hidden" onClick={()=> {setIsHiddenPw(!isHiddenPw)}}></BtnPill>
                        </NavPill>
                        <div className="form-check form-switch switch-pyrite m-2">
                            <label className="form-check-label" htmlFor="isNotMark">is not mark</label>
                            <input className="form-check-input" type="checkbox" role="switch" id="isNotMark" defaultChecked={isNotMark} onClick={(e)=> {setIsNotMark(!isNotMark);}} />
                        </div>
                    </nav>
                </Card>
                <Card title="Schulte Table">
                    <nav className="navbar">
                        <div className="ms-auto"></div>
                        <NavPill className="bg-lazuli">
                            <LenPill
                                value={shulteLength}
                                onChange={(e)=> { setShulteLength(e.target.value) }}></LenPill>
                            <BtnPill className="btn-reload" onClick={()=> {setIsReloadShulte(!isReloadShulte)}}></BtnPill>
                        </NavPill>
                    </nav>

                    <div className="d-flex justify-content-center align-items-top mb-2">
                        <SchulteTable length={shulteLength} isReload={isReloadShulte}></SchulteTable>
                    </div>
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