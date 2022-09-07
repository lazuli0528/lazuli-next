import React from 'react';

import CardColumns from './LazuliCardColumns';
import Card from './LazuliCard';
import Sample1 from '../components/Sample1';
import Sample2 from '../components/Sample2';

export default function Container(props){
    return (
        <div className="bg-lazuli">
            <CardColumns>
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