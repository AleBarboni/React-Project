import { useState } from "react";
import data from "./data";

function AddNewProductModal(props) {
    const [numeProdus, setNumeProdus] = useState('');
    const [eliberare, setEliberare] = useState('');
    const [stoc, setStoc] = useState('');
    const [pret, setPret] = useState('');
    const [dataExpirarii, setDataExpirarii] = useState('');
    const [errorMessage, setErrorMessage] = useState("");
    
    const handleOnChangeNumeProdus = (event) => {
      setNumeProdus(event.target.value);
    };
    
    const handleOnChangeStoc = (event) => {
      setStoc(event.target.value);
    };

    const handleOnChangePret = (event) => {
      setPret(event.target.value);
    };

    const handleOnChangeDataExpirarii = (event) => {
      setDataExpirarii(event.target.value);
    };

    const defaultState = () => {
      setNumeProdus('');
      setEliberare('');
      setStoc('');
      setPret('');
      setDataExpirarii('');
    };

    const transferValue = (event) => {
      event.preventDefault();

      const product = {
        numeProdus,
        eliberare,
        eliberare,
        pret,
        dataExpirarii
      };

      props.func(product);
      defaultState();
    }

    {/*const errorMessageText = () => {
      setErrorMessage("Nici un camp nu poate fi gol")
    };
   
    function AddProductButton () {
      if (numeProdus || eliberare || eliberare || pret || dataExpirarii === ""){
        return (
            <button 
            onClick={errorMessageText}
            type="button" disabled>Adauga Produs</button>
        )} else if (numeProdus || eliberare || eliberare || pret || dataExpirarii === !""){
          return (
              <button 
                type="button"
                onClick={transferValue}>Adauga Produs</button>
          )
      };
    }; 
  */} 
       
    return (
      <div
        className="modal"
        >
        <div className="modal-body">
          <button
            >X
          </button>
          <div className="flex flex-col px-5 modal-content">
            <label>NumeProdus</label>
            <input
              type="text" 
              value={numeProdus} 
              onChange={handleOnChangeNumeProdus} 
              className='border-2 input-text'
            />
          </div>
          <div className="flex flex-col px-5 modal-content">
            <label>Forma Eliberare</label>
            <select name="pets" id="pet-select" className='border-2 input-text'>
              <option value="">Alege forma de eliberare</option>
              <option value="OTC">OTC</option>
              <option value="P6L">P6L</option>
              <option value="PRF">PRF</option>
            </select>
          </div>
          <div className="flex flex-col px-5 modal-content">
            <label>Stoc</label>
            <input 
              type="number"
              value={stoc}
              onChange={handleOnChangeStoc}
              className='border-2 input-text'
            />
          </div>
          <div className="flex flex-col px-5 modal-content">
            <label>Pret</label>
            <input 
              type="number"
              value={pret}
              onChange={handleOnChangePret}
              className='border-2 input-text'
            />
          </div>
          <div className="flex flex-col px-5 modal-content">
            <label>DataExpirarii</label>
            <input
              type="date"
              value={dataExpirarii}
              onChange={handleOnChangeDataExpirarii}
              className='border-2 input-text'
            />
          </div>
          <div>
          <button 
                type="button"
                onClick={transferValue}>Adauga Produs</button>
          </div>     
        </div>
      </div>
    );
  };

export default AddNewProductModal;