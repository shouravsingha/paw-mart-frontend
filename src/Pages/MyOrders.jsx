import axios from 'axios';
import React, { useEffect, useState } from 'react';

const MyOrders = () => {

    const [myOrders, setMyOrders] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/orders')
            .then(res => {
                setMyOrders(res.data)
            })
            .catch(err => {
                console.log(err);

            })
    }, [])
    console.log(myOrders);

    return (
        <div className="overflow-x-auto mt-15 w-11/12 mx-auto">
            <table className="table table-xs">
                <thead>
                    <tr>
                        <th></th>
                        <th>Product Name</th>
                        <th>Buyer Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Address</th>
                        <th>Date</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myOrders.map((order, index) =>
                            <tr>
                                <th>{index + 1}</th>
                                <td>{order?.productName}</td>
                                <td>{order?.buyerName}</td>
                                <td>{order?.price}</td>
                                <td>{order?.quantity}</td>
                                <td>{order?.address}</td>
                                <td>{order?.date}</td>
                                <td>
                                    {order?.date
                                        ? new Date(order.date).toLocaleString("en-US", {
                                            year: "numeric",
                                            month: "short",
                                            day: "numeric",
                                            hour: "numeric",
                                            minute: "2-digit",
                                            hour12: true,
                                        })
                                        : ""}
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;