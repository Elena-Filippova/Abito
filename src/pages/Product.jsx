import { useParams, useOutletContext } from "react-router-dom";

export const Product = () => {
  const { products } = useOutletContext()
  const { id } = useParams();
  const findProduct = products.find((p) => p.id === +id)

  return (
    <section className="content">
      <div className="container">
        <div className="content-box flex">
          {findProduct ? (
            <div className="content-product flex">
              <div className="content-product__left">
                <h2 className="content-product__left-title">
                  {findProduct.title}
                </h2>
                <img src={findProduct.image} alt="product" />
                <p className="content-product__left-text">
                  {findProduct.description}
                </p>
              </div>
              <div className="content-product__right">
                <p className="content-product__right-price">
                  {findProduct.price}
                </p>
                <button className="btn btn-primary btn-large">
                  Показать телефон
                </button>
              </div>
            </div>
          ) : (
            <h2>Такого товара не существует</h2>
          )}
          <div className="content-side">
            <h3 className="content-side__title">Сервисы и услуги</h3>
            <div className="content-side__box">
              <div className="content-side__list flex">
                <div className="content-side__list-item flex">
                  <img src="/image/truck.svg" alt="Truck" />
                  <h5 className="content-side__list-item--title">Доставка</h5>
                  <p className="content-side__list-item--text">
                    Проверка при получении и возможность бесплатно вернуть
                    товар
                  </p>
                </div>
                <div className="content-side__list-item flex">
                  <img src="/image/car.svg" alt="Car" />
                  <h5 className="content-side__list-item--title">Автотека</h5>
                  <p className="content-side__list-item--text">
                    Отчёт с историей авто: пробег, владельцы, сведения о
                    залоге, ДТП и ремонтах
                  </p>
                </div>
                <div className="content-side__list-item flex">
                  <img src="/image/house.svg" alt="House" />
                  <h5 className="content-side__list-item--title">
                    Онлайн-бронирование жилья
                  </h5>
                  <p className="content-side__list-item--text">
                    Посуточная аренда квартир и домов: большой выбор
                    вариантов для поездок по России
                  </p>
                </div>
              </div>
              <div className="content-side__footer flex">
                <p className="content-side__footer-copyright">
                  © ООО «Абито», 2011–2021
                </p>
                <a className="content-side__footer-link" href="#!">
                  Политика конфиденциальности
                </a>
                <a className="content-side__footer-link" href="#!">
                  Обработка данных
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}