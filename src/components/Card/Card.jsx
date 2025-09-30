import './Card.css'

export const Card = ({ title, price, address, date, image }) => {
  return (
    <a href="./product.html" className="content-main__list-item flex">
      <div class="content-main__list-item--image flex">
        <img src={image} alt={title} />
      </div>
      <h5 class="content-main__list-item--title">
        {title}
      </h5>
      <span class="content-main__list-item--price">
        {price}
      </span>
      <span class="content-main__list-item--address">
        {address}
      </span>
      <span class="content-main__list-item--date">
        {date}
      </span>
    </a>
  );
}