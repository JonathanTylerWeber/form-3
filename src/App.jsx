import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: '',
    subscribe: false
  });

  const [count, setCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleClick = () => {
    setCount((count) => (count + 1))
  }

  return (
    <>
      <h1>React Form</h1>

      <form onSubmit={handleSubmit}>

        <label htmlFor='name'>Name:</label>
        <input
          type='text'
          name='name'
          id='name'
          onChange={handleChange}
          required
        />
        <br />

        <label htmlFor='email'>Email:</label>
        <input
          type='email'
          name='email'
          id='email'
          onChange={handleChange}
          required
        />
        <br />

        <label>Gender:</label>
        <input
          type='radio'
          name='gender'
          id='male'
          value='male'
          checked={formData.gender === 'male'}
          onChange={handleChange}
          required
        />
        <label htmlFor='male'>Male</label>
        <input
          type='radio'
          name='gender'
          id='female'
          value='female'
          checked={formData.gender === 'female'}
          onChange={handleChange}
          required
        />
        <label htmlFor='female'>Female</label>
        <br />

        <label htmlFor='subscribe'>Subscribe:</label>
        <input
          type='checkbox'
          name='subscribe'
          id='subscribe'
          onChange={handleChange}
          checked={formData.subscribe}

        />
        <br />

        <button>Submit</button>

      </form>

      <p>Count: {count} </p>
      <button onClick={handleClick}>+</button>
    </>
  )
}

export default App
