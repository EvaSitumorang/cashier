import React from 'react';
import Products from '../Barang.json';

const AddItems = (props) => {
  const { AddOn } = props;

  const handleAddOn = (e) => {
    const Product = Products.find((Product) => Product.id === parseInt(e.target.value));
    AddOn(Product);
  };

  return (
    <tr>
      <td className="border border-black"></td>
      <td className="border border-black" colSpan={5}>
        <select name="" id="" onChange={handleAddOn} className="mx-2 px-4">
          <option value="Keranjang Barang" hidden>
            Keranjang Barang
          </option>
          {Products.map((Product) => (
            <option value={Product.id} key={Product.id}>
              {Product.name}
            </option>
          ))}
        </select>
      </td>
    </tr>
  );
};

export default AddItems;
