import { useState } from "react";
import AddNewProduct from "./AddNewProduct";
import data from "./data";
 

function TableData() {
  const [product, setProduct] = useState(data);
  const [isShown, setIsShown] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  function handleOnClick(event) {
    setIsShown(true);
  }
  
  function handleOnChangeSearch(event) {
    setSearchInput(event.target.value);
  }

  const tableRows = product.map((data, index) => {
    return (
      <tr key={index}>
        <td className="text-center border-2 px-10 text-start">{data.numeProdus}</td>
        <td className="text-center border-2">{data.otc}</td>
        <td className="text-center border-2">{data.stoc}</td>
        <td className="text-center border-2">{data.pret}</td>
        <td className="text-center border-2">{data.dataExpirarii}</td>
      </tr>
    );
  });

  const addRows = (data) => {
    const totalProducts = product.length;
    data.id = totalProducts + 1;
    const updatedProduct = [...product];
    updatedProduct.push(data);
    setProduct(updatedProduct);
  };
  
  return (
    <div>
      <div>
        <div className="bg-neutral-100">
        <button className="border-2 px-10 mx-11 my-2 bg-neutral-100 font-bold">
          Sterge toate filtrele
        </button>
        </div>
        <table className="table-auto text-center w-full">
          <thead>
            <tr>
              <th 
                className="border-2 pr-96 px-10 text-start">
                  NumeProdus
                <input 
                className="border-2 mb-2" 
                  onChange={handleOnChangeSearch}></input>
              </th>
              <th 
                className="border-2">
                  OTC
                <input className="border-2 w-16 mb-2" type="text"></input>
              </th>
              <th 
                className="border-2">
                  Stoc
                <input className="border-2 w-16 mb-2 " type="number" min="0"></input>
              </th>
              <th 
                className="border-2 unstyled">
                  Pret
                <input className="border-2 mb-2" type="number" min="0"></input>
              </th>
              <th 
                className="border-2">
                  DataExpirarii
                <input className="border-2 mb-2" type="date"></input>
              </th>
            </tr>
         </thead>
          <tbody>{tableRows}</tbody>
        </table>
      </div>
      <div className="text-center mt-5">
        <button 
          className='px-10 border-2'
          onClick={handleOnClick}>
            Intrare Noua
        </button>
          <div>
            {
              isShown && (
                <AddNewProduct func={addRows} />
              )}
          </div>
      </div>
    </div>
  );
}
  
export default TableData;