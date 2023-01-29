import './App.css'
import TableData from './Components/TableData';
import AddNewProductModal from './Components/AddNewProductModal';

function App() {
  

  return (
    <div className="App">
    <h1 className="text-xl font-bold bg-neutral-300 py-3 pl-4 px-10">Lista Produse</h1>
    <TableData />
    </div>
  )
}
 
export default App;
