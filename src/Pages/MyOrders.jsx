import axios from 'axios';
import React, { useEffect, useState } from 'react';

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/orders')
      .then((res) => setMyOrders(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-11/12 mx-auto mt-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-5 text-center">
        My Orders
      </h2>

      <div className="overflow-x-auto">
        <table className="table table-xs w-full border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th>#</th>
              <th>Product</th>
              <th className="hidden md:table-cell">Buyer Name</th>
              <th>Price</th>
              <th className="hidden sm:table-cell">Quantity</th>
              <th className="hidden md:table-cell">Address</th>
              <th>Date</th>
              <th className="hidden sm:table-cell">Phone</th>
            </tr>
          </thead>
          <tbody>
            {myOrders.map((order, index) => (
              <tr key={order._id} className="hover:bg-gray-50">
                <th>{index + 1}</th>
                <td>{order?.productName}</td>
                <td className="hidden md:table-cell">{order?.buyerName}</td>
                <td>${order?.price}</td>
                <td className="hidden sm:table-cell">{order?.quantity}</td>
                <td className="hidden md:table-cell">{order?.address}</td>
                <td>
                  {order?.date
                    ? new Date(order.date).toLocaleString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                        hour: 'numeric',
                        minute: '2-digit',
                        hour12: true,
                      })
                    : ''}
                </td>
                <td className="hidden sm:table-cell">{order?.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
