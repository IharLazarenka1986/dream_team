import React, { useState } from 'react';

const ingredientsData = [
  { id: 1, name: 'Сыр', price: 20, weight:150},
  { id: 2, name: 'Ветчина', price: 30, weight:150 },
  { id: 3, name: 'Грибы', price: 25, weight:150 },
  { id: 4, name: 'Оливки', price: 15, weight:150 },
];

const saucesData = [
  { id: 1, name: 'Томатный' },
  { id: 2, name: 'Сливочный' },
  { id: 3, name: 'Барбекю' },
  { id: 4, name: 'Чесночный' },
];

const PizzaOrder = ({ onBackToHome }) => {
  const [size, setSize] = useState('small');
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [selectedSauce, setSelectedSauce] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const toggleIngredient = (id) => {
    setSelectedIngredients((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleSauceChange = (e) => {
    setSelectedSauce(parseInt(e.target.value));
  };

  const totalPrice =
    (size === 'small' ? 100 : size === 'medium' ? 125 : 150) +
    selectedIngredients.reduce((acc, id) => {
      const ingredient = ingredientsData.find((i) => i.id === id);
      return acc + (ingredient ? ingredient.price : 0);
    }, 0);

  const stepsCompleted =
    (size ? 1 : 0) +
    (selectedSauce ? 1 : 0) +
    (selectedIngredients.length > 0 ? 1 : 0);

  const progress = Math.round((stepsCompleted / 3) * 100);

  const handleClose = () => {
    // Сбросить всё состояние
    setSize('small');
    setSelectedSauce(null);
    setSelectedIngredients([]);
    setSubmitted(false);
    if (onBackToHome) {
      onBackToHome();
    }
  };

  return (
    <div className="order-container">
      <h2>Собери свою пиццу</h2>

      <div>
        <h3>Размер:</h3>
        <label className="radio-label">
          <input type="radio" value="small" checked={size === 'small'} onChange={() => setSize('small')} />
          Маленькая (300 г)
        </label>
        <label className="radio-label">
          <input type="radio" value="medium" checked={size === 'medium'} onChange={() => setSize('medium')} />
          Средняя (400 г)
        </label>
        <label className="radio-label">
          <input type="radio" value="large" checked={size === 'large'} onChange={() => setSize('large')} />
          Большая (500 г)
        </label>
      </div>

      <div>
        <h3>Соус:</h3>
        {saucesData.map(({ id, name }) => (
          <label key={id} className="radio-label">
            <input
              type="radio"
              name="sauce"
              value={id}
              checked={selectedSauce === id}
              onChange={handleSauceChange}
            />
            {name}
          </label>
        ))}
      </div>

      <div>
        <h3>Ингредиенты:</h3>
        {ingredientsData.map(({ id, name, price, weight }) => (
          <label key={id} className="checkbox-label">
            <input
              type="checkbox"
              checked={selectedIngredients.includes(id)}
              onChange={() => toggleIngredient(id)}
            />
                {name} (+{price}р) (+{weight}гр)
          </label>
        ))}
      </div>

    
      <div className="progress-container" style={{ textAlign: 'center', marginTop: '30px' }}>
        <svg width="120" height="120">
          <circle cx="60" cy="60" r="50" stroke="#ddd" strokeWidth="10" fill="none" />
          <circle
            cx="60"
            cy="60"
            r="50"
            stroke="#ff4500"
            strokeWidth="10"
            fill="none"
            strokeDasharray={2 * Math.PI * 50}
            strokeDashoffset={(1 - progress / 100) * 2 * Math.PI * 50}
            transform="rotate(-90 60 60)"
          />
          <text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="18" fill="#ff4500">
            {progress}%
          </text>
        </svg>
      </div>

      <button className="submit-btn" onClick={() => setSubmitted(true)} disabled={submitted}>
        Оформить заказ
      </button>

      {submitted && (
        <div className="confirmation animate-bounce-in-3d">
          <h3>Ваш заказ оформлен!</h3>
          <p>Сумма к оплате: {totalPrice}р</p>
          <p>Ваш заказ готовится... 🍕</p>
          <button className="back-btn" onClick={handleClose}>
            Закрыть
          </button>
        </div>
      )}
    </div>
  );
};

export default PizzaOrder;


