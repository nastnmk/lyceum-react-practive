function SecondPage({ cart, setCart }) {
  const handleRemove = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Список товаров</h2>
      {cart.map((item, index) => (
        <div key={index}>
          {item.name}, {item.price}₽
          <button onClick={() => handleRemove(index)}>Удалить</button>
        </div>
      ))}
      <h3>Общая сумма: {total}₽</h3>
    </div>
  );
}
export default SecondPage;