import React from 'react';
import WeatherInfo from '../components/Advisory/WeatherInfo';
import ProductList from '../components/Marketplace/ProductList';

const Home = () => {
  const products = [
    { id: 1, name: 'Tomato Seeds', description: 'High-quality seeds', price: 2000 },
    { id: 2, name: 'Fertilizer', description: 'Organic fertilizer', price: 1500 },
  ];

  return (
    <div className="home-page">
      <WeatherInfo />
      <ProductList products={products} onSelect={(product) => alert(product.name)} />
    </div>
  );
};

export default Home;
