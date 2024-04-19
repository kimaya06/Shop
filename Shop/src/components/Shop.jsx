import Product from './Product.jsx';

export default function Shop({ products, onAddItemToCart }) {
  return (
    <section id="shop">
      <ul id="products">
        {products.map((product) => (
          <li key={product.id}>
            <Product {...product} onAddToCart={onAddItemToCart} />
          </li>
        ))}
      </ul>
    </section>
  );
}
