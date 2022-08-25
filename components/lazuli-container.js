import React from 'react';
import $ from 'jquery'; 

import Sample1 from '../components/Sample1';
import Sample2 from '../components/Sample2';    

class Container extends React.Component{
  render(){
    return (
        <div className="bg-lazuli">
            <div className="container h-100">
                <div className="row row-cols-lg-2 row-cols-1">
                    <div className="col mb-4">
                        <div className="card">
                            <div className="card-header border-bottom">
                                <div>Next.js Sample - CRUD by localStorage</div>
                            </div>
                            <div className="card-body p-0">
                                <Sample1></Sample1>
                            </div>
                        </div>
                    </div>                    
                    <div className="col mb-4">
                        <div className="card">
                            <div className="card-header border-bottom">
                                <div>Next.js Sample - Getting data from REST API</div>
                            </div>
                            <div className="card-body p-0">
                                <Sample2></Sample2>
                            </div>
                        </div>      
                    </div>                    
                    <div className="col mb-4">
                        <div className="card">
                            <div className="card-header border-bottom">
                                <div>DataTables Sample</div>
                            </div>
                            <div className="card-body p-0">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item d-flex justify-contents-start align-items-center">
                                        <a href="https://lazuli0528.github.io/lazuli0528//html/DataTables/jsonList.html" >Json List</a>
                                    </li>
                                    <li className="list-group-item d-flex justify-contents-start align-items-center">
                                        <a href="https://lazuli0528.github.io/lazuli0528//html/DataTables/list.html" >List Page Layout</a>
                                    </li>
                                </ul>
                            </div>
                        </div>      
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Container;
