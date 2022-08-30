export default function LazuliCardColumns(props) {
    let item_id = 0;

    return (
        <div className="container h-100">
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