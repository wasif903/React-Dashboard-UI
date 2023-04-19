import { useState } from 'react'
import './App.css'
import { useRoutes } from 'react-router-dom';
import routes from './routes/Routes';


function App() {

  const route = useRoutes(routes);

  return (
    <div className="App">
      {route}
    </div>
  )
}

export default App
