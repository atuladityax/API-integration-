
import "../components/Usercard.css"
const Usercard = ({product}) => {
  return (
   <div className="product-card">
      <h3 className="product-card__name">
        {product.title}
      </h3>

      <div className="product-card__info">
        <p>
          <span className="label">category </span>
          <span>{product.category}</span>
        </p>
        <p>
          <span className="label">stock </span>
          <span>{product.stock}</span>
        </p>
        <p>
          <span className="label">price </span>
          <span>{product.price}</span>
        </p>
        <p>
          <span className="label des "></span>
          <span>{product.description}</span>
        </p>
      </div>
    </div>
  )
}

export default Usercard