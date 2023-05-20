import React from 'react';

function Item({ name, category }) {
  const [added, setAdded] = React.useState(false);
  return (
    <li className={added ? 'in-cart' : ''}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={() => setAdded(prev => !prev)}>
        {added ? 'Remove From Cart' : 'Add to Cart'}
      </button>
    </li>
  );
}

export default Item;
