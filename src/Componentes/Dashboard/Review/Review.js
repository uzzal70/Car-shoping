import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
// import useAuth from '../../../Hooks/useAuth';

const Review = () =>
{
    // const { user } = useAuth();
    const [users, setUsers] = useState([]);
    useEffect(() =>
    {
        const url = `https://enigmatic-river-03498.herokuapp.com/review`
        fetch(url)
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);
    return (
        <div>
            <h1>Customer Review</h1>
            <hr />
            <div className="container w-50 px-5">
                <Table responsive className="table bg-white rounded shadow-sm table-hover">
                    {/* <thead>
                        <tr>
                            <th>Name</th>
                            <th>Review</th>
                        </tr>
                    </thead> */}
                    <tbody>
                        {users.map((row) => (
                            <tr
                                key={row._id}
                            >
                                <td>
                                    <span className="fw-bold text-uppercase"><i class="fas fa-user"> &nbsp;</i>{row.displayName}</span>
                                </td>

                                <td>
                                    <span className="fw-bold text-info"> {row.description}</span>
                                </td>
                            </tr>

                        ))}
                    </tbody>

                </Table>
            </div>
        </div >
    );
};

export default Review;