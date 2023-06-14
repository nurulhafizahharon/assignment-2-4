function Input({ value, label, valueSetter }) {
  const handleChange = (event) => {
    valueSetter(event.target.value);
  };

  return (
    <div>
      <label>{label}</label>
      <input value={value} onChange={handleChange} />
    </div>
  );
}
export default Input;
