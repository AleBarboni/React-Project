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

  //TODO defaultState nu indica o actiune, l-as numi resetFormState
  //sau reset to defaultState
  const defaultState = () => {
    setNumeProdus('');
    setEliberare('');
    setStoc('');
    setPret('');
    setDataExpirarii('');
  };

  //TODO transfer are cumva sens, dar la final el de fapt face addNewProduct, asa ca
  // l-as redenumi astfel
  const transferValue = (event) => {
    event.preventDefault();

    const product = {
      numeProdus,
      eliberare,
      pret,
      dataExpirarii
    };

    //TODO redenumeste acest prop fiindca func nu este suficient de descriptiv
    props.func(product);
    defaultState();
  }

  const isValid = (value) => value !== "";

  const isFormButtonEnabled = useMemo(() => {
    //TODO in cazul in care validarile difera in functie de tipul de date
    //se vor adauga noi functii de tipul isValid
    console.log(numeProdus,eliberare,pret,dataExpirarii)
    //TODO de adaugat si stoc la validare
    return (
      isValid(numeProdus) &&
      isValid(eliberare) &&
      isValid(pret) &&
      isValid(dataExpirarii)
    );
  }, [numeProdus,eliberare,pret,dataExpirarii]);

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
            onClick={transferValue}>
              Adauga Produs
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNewProductModal;