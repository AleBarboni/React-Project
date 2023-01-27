import { useEffect, useState } from "react";
import AddNewProduct from "./AddNewProduct";
import data from "./data";

/** de pus in alt fisier, este componenta ce contine doar tabelul */
function Table({productList, handleSortClick, handleSearchChange, searchInput}){

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

  return (
    <table className="table-auto text-center w-full">
    <thead>
      <tr>
        <th
          className="border-2 pr-96 px-10 text-start"
          onClick={() => handleSortClick("numeProdus")}
        >
          NumeProdus
          <input
            className="border-2 m-2 px-2"
            placeholder="Cauta produs...."
            onChange={handleSearchChange}
          />
        </th>
        <th
          className="border-2 px-10"
          onClick={() => handleSortClick("otc")}>OTC</th>
        <th
          className="border-2 px-10"
          onClick={() => handleSortClick("stoc")}>Stoc</th>
        <th
          className="border-2 unstyled px-10"
          onClick={() => handleSortClick("pret")}>Pret</th>
        <th
          className="border-2 px-10"
          onClick={() => handleSortClick("dataExpirarii")}>DataExpirarii</th>
      </tr>
    </thead>
    <tbody>
      {productList.filter((product) => {
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
  );
}

function TableData() {
  const [productList, setProductList] = useState([]);
  const [filterdList, setFilterdList] = useState([]);
  const [isShown, setIsShown] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [order, setOrder] = useState("ASC");

  useEffect(() => {
    setProductList(data);
    setFilterdList(data);
  }, []);

  function handleOnClick(event) {
    setIsShown(true);
  }

  const addRows = (data) => {
    const totalProducts = productList.length;
    data.id = totalProducts + 1;
    const updatedProduct = [...productList];
    updatedProduct.push(data);
    setProductList(updatedProduct);
  };

  const handleSortClick = (col) => {
    if (order === "ASC") {
      const sorted = [...productList].sort((a,b) => a[col].toLowerCase() < b[col].toLowerCase() ? -1 : 1);
      setProductList(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...productList].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1);
      setProductList(sorted);
      setOrder("ASC");
    }
  };


  const handleSearchChange = (e) => setSearchInput(e.target.value);

  return (
    <div>
      <div>
        <div className="bg-neutral-100">
          <button className="border-2 px-10 mx-11 my-2 bg-neutral-100 font-bold">
            Sterge toate filtrele
          </button>
        </div>
        {/* Aici se va pasa filterdList */}
        <Table
          handleSortClick={handleSortClick}
          handleSearchChange={handleSearchChange}
          productList={productList}
          searchInput={searchInput}
        />
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