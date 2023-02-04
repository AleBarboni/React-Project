import { useState, useMemo } from "react";
import data from "./data";

function AddNewProductModal(props) {
  const [numeProdus, setNumeProdus] = useState('');
  const [eliberare, setEliberare] = useState('');
  const [stoc, setStoc] = useState('');
  const [pret, setPret] = useState('');
  const [dataExpirarii, setDataExpirarii] = useState('');
  const [errorMessage, setErrorMessage] = useState("");

  const handleOnEliberareChange = (event) => {
    setEliberare(event.target.value)
  }

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

  const resetFormState = () => {
    setNumeProdus('');
    setEliberare('');
    setStoc('');
    setPret('');
    setDataExpirarii('');
  };

  const addNewProductValue = (event) => {
    event.preventDefault();

    const productObjectKeys = {
      numeProdus,
      eliberare,
      stoc,
      pret,
      dataExpirarii
    };

    props.func(productObjectKeys);
    resetFormState();
  }

  const isValid = (value) => value !== "";

  const isFormButtonEnabled = useMemo(() => {
  
    console.log(numeProdus, eliberare, stoc, pret, dataExpirarii)
    return (
      isValid(numeProdus) &&
      isValid(eliberare) &&
      isValid(stoc) &&
      isValid(pret) &&
      isValid(dataExpirarii)
    );
  }, [numeProdus, eliberare, stoc, pret, dataExpirarii]);

  return (
    <div
      className="modal"
    >
      <div className="modal-body">
        <button
          onClick={props.handleModalClose}
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
          <select onChange={handleOnEliberareChange}name="pets" id="pet-select" className='border-2 input-text'>
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
            disabled={!isFormButtonEnabled}
            type="button"
            className={isFormButtonEnabled ? "bg-green-500" : "bg-red-500"}
            onClick={addNewProductValue}>
              Adauga Produs
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNewProductModal;