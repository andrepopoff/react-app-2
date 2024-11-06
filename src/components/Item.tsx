import { ItemType } from "../types";

type ComponentProps = {
  item: ItemType;
};

export default function Item({ item }: ComponentProps) {
  return (
    <div className="item">
      <div className="item-image">
        <a href={item.url}>
          <img src={item.MainImage?.url_570xN} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{item.title}</p>
        <p className="item-price">
          {item.currency_code}
          {item.price}
        </p>
        <p className="item-quantity level-medium">{item.quantity} left</p>
      </div>
    </div>
  );
}
