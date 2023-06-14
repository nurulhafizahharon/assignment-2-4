import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import PriceInput from "./PriceInput";

function Counter() {
  const [count, setCount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [name, setName] = useState("Banana");
  const [price, setPrice] = useState(2.99);

  const handlePlus = () => {
    setCount((prevCount) => {
      let count = prevCount + 1;
      if (count >= 5) {
        setDiscount(20);
      }
      return count;
    });
  };

  const handleMinus = () => {
    setCount((prevCount) => {
      let count = prevCount - 1;
      if (count < 5) {
        if (count <= 0) {
          count = 0;
        }
        setDiscount(0);
      }
      return count;
    });
  };

  const handleChangeName = (value) => {
    setName(value);
  };

  const handleChangePrice = (value) => {
    if (!isNaN(value)) {
      setPrice(value);
    }
  };

  return (
    <>
      <h2>{name}</h2>
      <Button label="-" onClick={handleMinus} />
      <span>{count}</span>
      <Button label="+" onClick={handlePlus} />
      <h2>{`$ ${price}`} each</h2>
      <h3>{`Discount: ${discount}%`}</h3>
      <Input value={name} label="Product:" valueSetter={handleChangeName} />
      <PriceInput
        value={price}
        label="Price:"
        valueSetter={handleChangePrice}
      />
    </>
  );
}
export default Counter;
