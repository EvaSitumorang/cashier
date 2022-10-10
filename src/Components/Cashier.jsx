import React from 'react';
import { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import AddItems from './AddItems/AddItems';
import Items from './Items/Items';
import { InputNumber } from 'antd';

const Cashier = () => {
  const [items, setItems] = useState([]);
  const [payment, setPayment] = useState('');

  const handlePayment = (e) => {
    setPayment(e.target.value);
  };

  const handleAddOnItems = (Product) => {
    setItems([...items, { ...Product, qty: 1 }]);
  };

  let total = 0;
  items.forEach((Product) => {
    total += Product.price * Product.qty;
  });

  const handleQtyChange = (index, qty) => {
    const newItems = [...items];
    newItems[index].qty = qty;
    setItems(newItems);
  };

  const HandleDeleteItem = (Product) => {
    const newDelete = [...items].filter((removeItem) => removeItem.id !== Product.id);
    setItems(newDelete);
    console.log(Product);
  };

  return (
    <div className="m-5">
      <table className="w-full border-2 border-black">
        <thead>
          <tr>
            <td className="border-2 border-black text-center bg-gray-300 font-bold">No</td>
            <td className="border-2 border-black text-center bg-gray-300 font-bold">Quota</td>
            <td className="border-2 border-black text-center bg-gray-300 font-bold">Quantity</td>
            <td className="border-2 border-black text-center bg-gray-300 font-bold">Price</td>
            <td className="border-2 border-black text-center bg-gray-300 font-bold">SubPrice</td>
            <td className="border-2 border-black text-center bg-gray-300">
              <MdDelete className="w-full text-center" />
            </td>
          </tr>
        </thead>
        <tbody>
          <Items items={items} handleQtyChange={handleQtyChange} HandleDeleteItem={HandleDeleteItem} />
          {/* mengirimkan data dari parent ke child */}
          <AddItems AddOn={handleAddOnItems} />
          {/* mengambil data dari parent ke child */}
          <tr>
            <td className="text-right pr-2" colSpan={4}>
              Total Price :
            </td>
            <td className="text-left" colSpan={2}>
              <InputNumber value={total} className="w-full text-black" disabled />
            </td>
          </tr>
          <tr className="w-full">
            <td className="text-right pr-2" colSpan={4}>
              Payment :
            </td>
            <td colSpan={2} className="text-left flex pl-3 border-2 w-full">
              <input min={0} placeholder={0} onChange={handlePayment} className="w-full text-black outline-0 pl-1" />
            </td>
          </tr>
          <tr>
            <td className="text-right pr-2" colSpan={4}>
              Change :
            </td>
            <td className="text-left">
              <InputNumber value={payment - total} className="w-full text-black" disabled />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Cashier;
