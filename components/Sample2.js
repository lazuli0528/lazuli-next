import React, { useState } from "react";
import axios from "axios";

function Sample2(props) {
    const [data, setData] = useState([]);

    const doit = ()=> {
        axios.get('https://jsonplaceholder.typicode.com/users').then(
            res=> {
                setData(res.data);
            }
        );
    }

    return (
            <div className="container">
                <nav className="navbar">
                    <button type="button" className="btn btn-info btn-sm" onClick={doit}>GET</button>
                </nav>

                <div className="table-responsive">
                    {/* <style jsx>{`
                        table { height: 500px; }
                    `}</style> */}
                    <table id="sample2-table" className="table table-sm table-bordered table-hover">
                        <thead>
                            <tr className="alert-info">
                                <th className="align-middle">No</th>
                                <th className="align-middle">name</th>
                                <th className="align-middle">user</th>
                                <th className="align-middle">email</th>
                                <th className="align-middle">address</th>
                                <th className="align-middle">company</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(val=>(
                                <tr key={val.id}>
                                    <td className="align-middle">{val.id}</td>
                                    <td className="align-middle">{val.name}</td>
                                    <td className="align-middle">{val.username}</td>
                                    <td className="align-middle">{val.email}</td>
                                    <td className="align-middle">
                                        <div className="d-flex justify-content-start align-imtes-center">
                                            <div>{val.address.street}</div>
                                            <div>{val.address.suite}</div>
                                            <div>{val.address.city}</div>
                                            <div>{val.address.zipcode}</div>
                                            <div>{val.address.geo.lat}</div>
                                            <div>{val.address.lng}</div>
                                        </div>
                                    </td>
                                    <td className="align-middle">
                                        <div className="d-flex justify-content-start align-imtes-center">
                                            <div>{val.company.name}</div>
                                            <div>{val.company.catchPhrase}</div>
                                            <div>{val.company.bs}</div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
    );
}

export default Sample2;
