import { InputNumber } from 'antd';
const Item = (props) => {
  const { name, qty, price, handleQty } = props;
  return (
    <>
      <td className="border border-black text-center">{name}</td>
      <td className="border border-black">
        <input type="number" min={1} value={qty} onChange={(e) => handleQty(e.target.value)} className="w-full text-center outline-0 border-transparent" />
      </td>
      <td className="border border-black">
        <InputNumber value={price} disabled="disabled" className="w-full text-black" size="small" />
      </td>
      <td className="border border-black">
        <InputNumber value={price * qty} disabled="disabled" className="w-full text-black" size="small" />
      </td>
    </>
  );
};

export default Item;
