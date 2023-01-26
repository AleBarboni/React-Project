import { useState } from "react";
import AddNewProduct from "./AddNewProduct";
import data from "./data";

function TableData() {
  const [product, setProduct] = useState(data);
  const [isShown, setIsShown] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [order, setOrder] = useState("ASC");


  function handleOnClick(event) {
    setIsShown(true);
  }
  
  const addRows = (data) => {
    const totalProducts = product.length;
    data.id = totalProducts + 1;
    const updatedProduct = [...product];
    updatedProduct.push(data);
    setProduct(updatedProduct);
  };

  function tableRows(data) {
    return (
      <tr key={data.id}>
        <td className="text-center border-2 px-10 text-start">{data.numeProdus}</td>
        <td className="text-center border-2">{data.otc}</td>
        <td className="text-center border-2">{data.stoc}</td>
        <td className="text-center border-2">{data.pret}</td>
        <td className="text-center border-2">{data.dataExpirarii}</td>
      </tr>
    )
  } 
 
  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...product].sort((a, b) => 
      a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1);
    setProduct(sorted);
    setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...product].sort((a, b) => 
      a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1);
    setProduct(sorted);
    setOrder("ASC");
    } 
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
                  className="border-2 m-2 px-2"
                  placeholder="Cauta produs...." 
                  onChange={(e) => setSearchInput(e.target.value)}
                />
              </th>
              <th 
                className="border-2 px-10"
                onClick={() => sorting("otc")}>OTC</th>
              <th 
                className="border-2 px-10"
                onClick={() => sorting("stoc")}>Stoc</th>
              <th 
                className="border-2 unstyled px-10"
                onClick={() => sorting("pret")}>Pret</th>
              <th 
                className="border-2 px-10"
                onClick={() => sorting("dataExpirarii")}>DataExpirarii</th>
            </tr>
         </thead>
          <tbody>
            {data.filter((product) => {
              if (searchInput === "") {
                return product;
              } else if (product.numeProdus.toLowerCase().includes(searchInput.toLowerCase())) {
                return product
              }
            }).map((data) => (
              tableRows(data)
            ))}
          </tbody>
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