import axios from 'axios';
import React, { useEffect, useState } from 'react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    axios
      .get('https://paw-mart-backend-six.vercel.app/orders')
      .then((res) => setMyOrders(res.data))
      .catch((err) => console.log(err));
  }, []);

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text('My Orders Report', 14, 10);

    autoTable(doc, {
      head: [
        ['#', 'Product', 'Buyer Name', 'Price', 'Quantity', 'Address', 'Date', 'Phone'],
      ],
      body: myOrders.map((order, index) => [
        index + 1,
        order.productName,
        order.buyerName,
        `$${order.price}`,
        order.quantity,
        order.address,
        order.date
          ? new Date(order.date).toLocaleString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
          })
          : '',
        order.phone,
      ]),
      startY: 20,
    });

    doc.save('my-orders.pdf');
  };

  return (
    <div className="w-11/12 mx-auto mt-10 text-base-content">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl md:text-3xl font-bold">My Orders</h2>

        {/* Export Button */}
        <button
          onClick={exportPDF}
          className="px-4 py-2 bg-primary text-primary-content rounded-md hover:bg-primary-focus transition-colors duration-200"
        >
          Export PDF
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="table w-full border border-base-content/20">
          <thead className="bg-base-200 text-base-content">
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
              <tr
                key={order._id}
                className="hover:bg-base-300 transition-colors duration-200"
              >
                <th>{index + 1}</th>
                <td>{order.productName}</td>
                <td className="hidden md:table-cell">{order.buyerName}</td>
                <td>${order.price}</td>
                <td className="hidden sm:table-cell">{order.quantity}</td>
                <td className="hidden md:table-cell">{order.address}</td>
                <td>
                  {order.date
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
                <td className="hidden sm:table-cell">{order.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
