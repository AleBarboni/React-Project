import { useState } from "react";
import AddNewProduct from "./AddNewProduct";
import data from "./data";

function TableData() {
  const [product, setProduct] = useState(data);
  const [isShown, setIsShown] = useState(false);

  function handleOnClick(event) {
    setIsShown(true);
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
        <table className="table-auto text-center w-full">
          <thead>
            <tr>
              <th className='pl-20 border-2 pr-96'>NumeProdus</th>
              <th className='px-10 border-2'>OTC</th>
              <th className='px-10 border-2'>Stoc</th>
              <th className='px-20 border-2'>Pret</th>
              <th className='px-10 border-2'>DataExpirarii</th>
            </tr>
         </thead>
          <tbody>{tableRows}</tbody>
        </table>
      </div>
      <div className="text-center mt-5">
        <button onClick={handleOnClick} className='px-10 border-2'>Intrare Noua</button>
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