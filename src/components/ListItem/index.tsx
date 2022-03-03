import React, { useState } from "react";
import { Item } from "../../types/Item";
import * as C from "./styles";

type Props = {
  item: Item;
};

const ListItem = ({ item }: Props) => {
  const [isCheked, setIsChecked] = useState(item.done);

  return (
    <C.Container done={isCheked}>
      <input
        type="checkbox"
        checked={isCheked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      <label htmlFor="">{item.name}</label>
    </C.Container>
  );
};

export default ListItem;
