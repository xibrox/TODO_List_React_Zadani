import React, { useState, useEffect } from 'react';
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";

function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch("/api")
      .then(res => {
        return res.json();
      })
      .then(data => {
        setData(data);
      })
  };

  useEffect(() => {
    fetchData();
  }, []);

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  // <p>{!data ? "Loading..." : data}</p>

  return (
    <div>
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
      <div>
        {data.length > 0 && (
          <ul>
            {data.map(data => (
              <li key={data.id}>{data.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
