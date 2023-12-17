import React, { useState } from 'react';

function Foods() {
  const [foodName, setFoodName] = useState('');
  const [calories, setCalories] = useState('');
  const [protein, setProtein] = useState('');
  const [fat, setFat] = useState('');
  const [carbs, setCarbs] = useState('');
  const [fiber, setFiber] = useState('');

  const [foods, setFoods] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const food = {
      name: foodName,
      calories: parseInt(calories),
      protein: parseInt(protein),
      fat: parseInt(fat),
      carbs: parseInt(carbs),
      fiber: parseInt(fiber)
    };

    setFoods([...foods, food]);

    setFoodName('');
    setCalories('');
    setProtein('');
    setFat('');
    setCarbs('');
    setFiber('');

    console.log(food);
  };

  return (
    <div>
      <h1>Add Food</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="foodName">Name:</label>
        <input
          type="text"
          id="foodName"
          value={foodName}
          onChange={(event) => setFoodName(event.target.value)}
          required
        />
        <label htmlFor="calories">Calories:</label>
        <input
          type="number"
          id="calories"
          value={calories}
          onChange={(event) => setCalories(event.target.value)}
          required
        />
        <label htmlFor="protein">Protein:</label>
        <input
          type="number"
          id="protein"
          value={protein}
          onChange={(event) => setProtein(event.target.value)}
          required
        />
        <label htmlFor="fat">Fat:</label>
        <input
          type="number"
          id="fat"
          value={fat}
          onChange={(event) => setFat(event.target.value)}
          required
        />
        <label htmlFor="carbs">Carbs:</label>
        <input
          type="number"
          id="carbs"
          value={carbs}
          onChange={(event) => setCarbs(event.target.value)}
          required
        />
        <label htmlFor="fiber">Fiber:</label>
        <input
          type="number"
          id="fiber"
          value={fiber}
          onChange={(event) => setFiber(event.target.value)}
          required
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default Foods;