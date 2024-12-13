import React from 'react';
// this is a menu page , all food items are showing here

const Menu = () => {
  const menuItems = [
    { name: 'Espresso', price: '$3', image: '/images/espresso.jpg' },
    { name: 'Cappuccino', price: '$4', image: '/images/cappuccino.jpg' },
    { name: 'Croissant', price: '$2', image: '/images/croissant.jpg' },
    { name: 'Blueberry Muffin', price: '$2.50', image: '/images/muffin.jpg' },
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Our Menu</h1>
      <div className="row">
        {menuItems.map((item, index) => (
          <div key={index} className="col-md-3 mb-4 text-center">
            <img
              src={item.image}
              alt={item.name}
              className="img-fluid rounded mb-2"
              style={{ height: '150px', objectFit: 'cover' }}
            />
            <h5>{item.name}</h5>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
