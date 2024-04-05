import React, { useState } from 'react';
import './App.css';

const items = [
  { type: 'Fruit', name: 'Apple' },
  { type: 'Vegetable', name: 'Broccoli' },
  { type: 'Vegetable', name: 'Mushroom' },
  { type: 'Fruit', name: 'Banana' },
  { type: 'Vegetable', name: 'Tomato' },
  { type: 'Fruit', name: 'Orange' },
  { type: 'Fruit', name: 'Mango' },
  { type: 'Fruit', name: 'Pineapple' },
  { type: 'Vegetable', name: 'Cucumber' },
  { type: 'Fruit', name: 'Watermelon' },
  { type: 'Vegetable', name: 'Carrot' }
];

const TodoList = () => {
  const [todoItems, setTodoItems] = useState(items);
  const [fruitItems, setFruitItems] = useState([]);
  const [vegetableItems, setVegetableItems] = useState([]);

  const moveItem = (item) => {
    const newItem = { ...item };
    if (newItem.type === 'Fruit') {
      setFruitItems(prevItems => [...prevItems, newItem]);
    } else {
      setVegetableItems(prevItems => [...prevItems, newItem]);
    }
    setTodoItems(prevItems => prevItems.filter(prevItem => prevItem !== item));
    setTimeout(() => {
      setTodoItems(prevItems => [...prevItems, newItem]);
      if (newItem.type === 'Fruit') {
        setFruitItems(prevItems => prevItems.filter(prevItem => prevItem !== newItem));
      } else {
        setVegetableItems(prevItems => prevItems.filter(prevItem => prevItem !== newItem));
      }
    }, 5000);
  };

  return (
    <div className="container">
      <div className="column" id="todoColumn">
        {todoItems.map((item, index) => (
          <button className="button" key={index} onClick={() => moveItem(item)}>
            {item.name}
          </button>
        ))}
      </div>
      <div className="column" style={{ border: '1px solid #ccc' }} id="fruitColumn">
        <div className="card" style={{ backgroundColor: '#f0f0f0', textAlign: 'center' }}>
          <h1 style={{ margin: '5px' }}>Fruit</h1>
        </div>
        {fruitItems.map((item, index) => (
          <button className="button" key={index} onClick={() => moveItem(item)}>
            {item.name}
          </button>
        ))}
      </div>
      <div className="column" style={{ border: '1px solid #ccc' }} id="vegetableColumn">
        <div className="card" style={{ backgroundColor: '#f0f0f0', textAlign: 'center' }}>
          <h1 style={{ margin: '5px' }}>Vegetable</h1>
        </div>
        {vegetableItems.map((item, index) => (
          <button className="button" key={index} onClick={() => moveItem(item)}>
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
