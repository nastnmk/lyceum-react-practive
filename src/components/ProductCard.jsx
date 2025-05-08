import './ProductCard.css'

function ProductCard({product, onAdd}){
    return(
        <div className='card'>
            <img src={product.image} alt={product.name} className='card-image' />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price}₽</p>
            <button className='add-button' onClick={() => onAdd(product)}>Добавить в корзину</button>
        </div>
    );
}

export default ProductCard;