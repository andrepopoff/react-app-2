import { ItemType } from "../types/listingTypes";

type ComponentProps = {
  item: ItemType;
};

const CURRENCY_MAPPER = {
  USD: "$",
  EUR: "€",
};

const MAX_TITLE_LENGTH = 50;

export default function Item({ item }: ComponentProps) {
  function truncateTitle(title) {
    if (title?.length > MAX_TITLE_LENGTH) {
      return title.slice(0, MAX_TITLE_LENGTH) + "…";
    }
    return title;
  }

  function formattedPrice(currency, price) {
    if (CURRENCY_MAPPER[currency]) {
      return `${CURRENCY_MAPPER[currency]}${price}`;
    }
    return `${price} ${currency}`;
  }

  function getQuantityClasses(quantity) {
    const baseClass = "item-quantity";
    if (quantity <= 10) {
      return `${baseClass} level-low`;
    }
    if (quantity <= 20) {
      return `${baseClass} level-medium`;
    }
    return `${baseClass} level-high`;
  }

  return (
    <div className="item">
      <div className="item-image">
        <a href={item.url}>
          <img src={item.MainImage?.url_570xN} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{truncateTitle(item.title)}</p>
        <p className="item-price">
          {formattedPrice(item.currency_code, item.price)}
        </p>
        <p className={getQuantityClasses(item.quantity)}>
          {item.quantity} left
        </p>
      </div>
    </div>
  );
}
