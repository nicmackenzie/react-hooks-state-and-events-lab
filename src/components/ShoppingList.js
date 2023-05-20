import React, { useState } from 'react';
import Item from './Item';

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [filteredItems, setFilteredItems] = useState(items);

  const filterHandler = e => {
    setSelectedCategory(e.target.value);
    const filtered = items.filter(item => item.category === e.target.value);
    setFilteredItems(filtered);
  };

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={filterHandler}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map(item => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
