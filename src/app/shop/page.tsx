import React from 'react';
import Image from 'next/image';

const Shop = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* Shop Heading */}
      <h1 style={{ color: 'blue' }}>Shop List</h1>

      {/* Home, Pages, and Shopping List */}
      <h3 style={{ color: 'black' }}>Home</h3>
      <h3 style={{ color: 'black' }}>Pages</h3>
      <h3 style={{ color: 'black' }}>Shopping List</h3>

      <div style={{ marginBottom: '50px' }}></div>

      {/* Ecommerce Accessories & Fashion Items */}
      <h2 style={{ color: 'blue' }}>Ecommerce Accessories & Fashion Items</h2>
      <p>About 9,620 results (0.62 seconds)</p>

      {/* Per Page, Sort By, and View */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '20px', marginBottom: '20px' }}>
        <div>
          <label>Per Page:</label>
          <input type="number" placeholder="10" style={{ marginLeft: '10px' }} />
        </div>
        <div>
          <label>Sort By:</label>
          <select style={{ marginLeft: '10px' }}>
            <option>Best Match</option>
            <option>Prices: Low To High</option>
            <option>Prices: High To Low</option>
          </select>
        </div>
        <div>
          <label>View:</label>
          <input type="number" placeholder="12" style={{ marginLeft: '10px' }} />
        </div>
      </div>

      {/* Product Listings */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '30px' }}>
        {[
          { img: '/shoplist1.webp', title: 'Accumsan tincidunt', price: '$120.00', oldPrice: '$150.00', description: 'Consectetur adipiscing elit.' },
          { img: '/shoplist2.webp', title: 'In nulla', price: '$99.00', oldPrice: '$130.00', description: 'Magna in est adipiscing in phasellus.' },
          { img: '/shoplist3.webp', title: 'Vel sem', price: '$99.00', oldPrice: '$130.00', description: 'Lorem ipsum dolor sit amet.' },
          { img: '/shoplist4.webp', title: 'Porttitor cum', price: '$99.00', oldPrice: '$130.00', description: 'Lorem ipsum dolor sit amet.' },
          { img: '/shoplist5.webp', title: 'Nunc in', price: '$99.00', oldPrice: '$130.00', description: 'Lorem Magna in est adipiscing.' },
          { img: '/shoplist6.webp', title: 'Vitae facilisis', price: '$99.00', oldPrice: '$130.00', description: 'Consectetur adipiscing elit.' },
          { img: '/shoplist7.webp', title: 'Curabitur lectus', price: '$99.00', oldPrice: '$130.00', description: 'Lorem ipsum dolor sit amet.' },
        ].map((product, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              gap: '20px',
              alignItems: 'center',
              border: '1px solid #ddd',
              padding: '15px',
            }}
          >
            <Image
              src={product.img}
              alt={product.title}
              width={600}
              height={400}
              style={{ objectFit: 'cover', borderRadius: '8px' }}
            />
            <div>
              <h4>{product.title}</h4>
              <p>
                <strong>{product.price}</strong>{' '}
                <span style={{ textDecoration: 'line-through', color: 'gray' }}>{product.oldPrice}</span>
              </p>
              <p>{product.description}</p>
              <div style={{ color: 'gold' }}>★★★★★</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
