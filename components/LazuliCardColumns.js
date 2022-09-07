export default function LazuliCardColumns(props) {
    if (props.children === undefined){
        return false;
    }

    if (props.children.length > 1){
        let item_id = 0;

        return (
            <div className="container">
                <div className="row row-cols-lg-2 row-cols-1">
                    {props.children.map((content)=>
                        <div key={item_id++} className="col mb-4">
                            {content}
                        </div>
                    )}
                </div>
            </div>
        );
    }
    else {
        return (
            <div className="container">
                <div className="row">
                    <div className="col mb-4">
                        {props.children}
                    </div>
                </div>
            </div>
        );
    }
}