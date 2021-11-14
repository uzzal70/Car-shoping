import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import { Table } from 'react-bootstrap';

const PurchaseProducts = () =>
{
    const { user } = useAuth();
    const [purchase, setPurchase] = useState([]);
    useEffect(() =>
    {
        const url = `https://enigmatic-river-03498.herokuapp.com/purchase?email=${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPurchase(data));

    }, []);

    const handelDeleteUser = id =>
    {
        const proced = window.confirm('Are you sure, You want to DELETE ');

        if (proced) {
            const url = `https://enigmatic-river-03498.herokuapp.com/purchase/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data =>
                {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully');
                        const remainingUsers = purchase.filter(user => user._id !== id);
                        setPurchase(remainingUsers);
                    }
                })
        }

    }
    return (
        <div>
            <h1>Purchase <span className="fw-bold text-danger">{purchase.length}</span> Cars</h1>
            <hr />
            <div className="container px-5">
                <Table responsive className="table bg-white rounded shadow-sm table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Location</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {purchase.map((row) => (
                            <tr
                                key={row._id}
                            >
                                <td>
                                    <span className="fw-bold text-uppercase"><i class="fas fa-user"> &nbsp;</i>{row.displayName}</span>
                                </td>
                                <td>
                                    {row.phone}
                                </td>
                                <td>
                                    {row.location}
                                </td>
                                <td>
                                    {row.email}
                                </td>
                                <button onClick={() => handelDeleteUser(row._id)} className="btn bg-danger my-1 px-3 fw-bold">
                                    Delete
                                </button>
                            </tr>

                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default PurchaseProducts;