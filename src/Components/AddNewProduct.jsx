import { useState } from "react";

function AddNewProduct(props) {
    const [numeProdus, setNumeProdus] = useState('');
    const [otc, setOtc] = useState('');
    const [stoc, setStoc] = useState('');
    const [pret, setPret] = useState('');
    const [dataExpirarii, setDataExpirarii] = useState('');
    
    const handleOnChangeNumeProdus = (event) => {
      setNumeProdus(event.target.value);
    };
    
    const handleOnChangeOtc = (event) => {
      setOtc(event.target.value);
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
      setOtc('');
      setStoc('');
      setPret('');
      setDataExpirarii('');
    };

    const transferValue = (event) => {
      event.preventDefault();

      const product = {
        numeProdus,
        otc,
        stoc,
        pret,
        dataExpirarii
      };

      props.func(product);
      defaultState();
    };
    
    return (
      <div className="w-full">
        <div className="flex flex-row">
          <div className="flex flex-col px-5">
            <label>NumeProdus</label>
            <input type="text" value={numeProdus} onChange={handleOnChangeNumeProdus} className='border-2'/>
          </div>
          <div className="flex flex-col px-5">
            <label>OTC</label>
            <input type="text" value={otc} onChange={handleOnChangeOtc} className='border-2'/>
          </div>
          <div className="flex flex-col px-5">
            <label>Stoc</label>
            <input type="number" value={stoc} onChange={handleOnChangeStoc} className='border-2'/>
          </div>
          <div className="flex flex-col px-5">
            <label>Pret</label>
            <input type="number" value={pret} onChange={handleOnChangePret} className='border-2'/>
          </div>
          <div className="flex flex-col px-5">
            <label>DataExpirarii</label>
            <input type="date" value={dataExpirarii} onChange={handleOnChangeDataExpirarii} className='border-2'/>
          </div>    
        </div>
        <div className="text-center mt-5">
          <button onClick={transferValue} className='px-10 border-2'>Adauga Produs</button>
        </div>
      </div>
    );
  }

export default AddNewProduct;