import Item from "./Item";
import { ItemType } from "../types/listingTypes";

type ComponentProps = {
  items: Array<ItemType>;
};

export default function Listing(props: ComponentProps) {
  const { items } = props;

  return (
    <div className="item-list">
      {items.map((item) => (
        <Item item={item} key={item.listing_id} />
      ))}
    </div>
  );
}
