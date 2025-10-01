import { Link } from 'react-router-dom'
import './Card.css'

export const Card = ({ id, title, price, address, date, image }) => {
  return (
    <Link to={`/product/${id}`} className="content-main__list-item flex">
      <div className="content-main__list-item--image flex">
        <img src={image} alt={title} />
      </div>
      <h5 className="content-main__list-item--title">
        {title}
      </h5>
      <span className="content-main__list-item--price">
        {price}
      </span>
      <span className="content-main__list-item--address">
        {address}
      </span>
      <span className="content-main__list-item--date">
        {date}
      </span>
    </Link>
  );
}