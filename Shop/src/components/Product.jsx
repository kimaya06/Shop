export default function Product({
  id,
  image,
  title,
  price,
  description,
  category,
  rating,
  onAddToCart,
}) {
  return (
    <article className="product">
      <img src={image} alt={title}/>
      <div className="product-content">
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
          <p>{category}</p>
          <p className='product-price'>${price}</p>
          <h4>Rating:</h4>
          <p className='product-price'>{rating.rate}</p>
          <p className='product-price'>{rating.count}</p>
        </div>
        <p className='product-actions'>
          <button onClick={() => onAddToCart(id)}>Add to Cart</button>
        </p>
      </div>
    </article>
  );
}
