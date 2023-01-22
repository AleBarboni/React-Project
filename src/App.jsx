import { useState } from 'react'
import './App.css'
import TableData from './Components/TableData';

function App() {
  return (
    <div className="App">
    <h1 className='text-xl font-bold bg-blue-400 py-3 pl-4'>Lista Produse</h1>
    <TableData />
    </div>
  )
}
 


export default App;
