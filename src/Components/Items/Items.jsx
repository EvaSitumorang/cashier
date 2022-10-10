import React from 'react';
import Item from './Item/Item';
import { MdDelete } from 'react-icons/md';

const Items = (props) => {
  const { items, handleQtyChange, HandleDeleteItem } = props;

  return items.map((Product, index) => (
    <tr key={'Item' + Product.id}>
      <td className="border border-black text-center">{index + 1}</td>
      <Item
        key={index}
        {...Product}
        handleQty={(qty) => {
          handleQtyChange(index, qty);
        }}
      />
      <td className="border border-black" onClick={() => HandleDeleteItem(Product)}>
        <MdDelete className="w-full text-center" />
      </td>
    </tr>
  ));
};

export default Items;
