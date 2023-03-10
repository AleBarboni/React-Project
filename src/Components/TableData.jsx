import { useEffect, useState } from "react";
import Table from "./Table";
import data from "./data";
import AddNewProductModal from "./AddNewProductModal";

function TableData() {
  const [productList, setProductList] = useState([]);
  const [filterdList, setFilterdList] = useState([]);
  const [resetAllFilters, setResetAllFilters] = useState([]);
  const [shownAddProductModal, setShownAddProductModal] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [order, setOrder] = useState("ASC");
  const [orderNumbers, setOrderNumbers] = useState("ASC");
 
  
  useEffect(() => {
    setProductList(data);
    setFilterdList(data);
    setResetAllFilters(data);
  }, []);

  const handleOnModalOpen = () => {
    setShownAddProductModal(true);
  };

  const handleModalClose = () => {
    setShownAddProductModal(false);
  };

  const addRows = (data) => {
    const totalProducts = productList.length;
    data.id = totalProducts + 1;
    const updatedProduct = [data, ...productList];
    setProductList(updatedProduct);
  };
  
  const handleSortClick = (col) => {
    if (order === "ASC") {
      const sortedList = [...productList].sort((a,b) => 
      a[col].toLowerCase() < b[col].toLowerCase() ? -1 : 1);
      setProductList(sortedList);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sortedList = [...productList].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1);
      setProductList(sortedList);
      setOrder("ASC");
    }
  };

  const handleSortNumbersClick = (col) => {
    if (orderNumbers === "ASC") {
      const sortedList = [...productList].sort((a,b) => 
      a[col] < b[col] ? -1 : 1);
      setProductList(sortedList);
      setOrderNumbers("DSC");
    }
    if (orderNumbers === "DSC") {
      const sortedList = [...productList].sort((a, b) =>
        a[col] < b[col] ? 1 : -1);
      setProductList(sortedList);
      setOrderNumbers("ASC");
    }
  };

  const handleSearchChange = (e) => {
  setSearchInput(e.target.value);
  };


  return (
    <div key={data.id}>
      <div>
        <div className="bg-neutral-100">
          <button 
            className="border-2 px-10 mx-11 my-2 bg-neutral-100 font-bold">
              Sterge toate filtrele
          </button>
        </div>
        {/* Aici se va pasa filterdList */}
        <Table
          handleSortClick={handleSortClick}
          handleSearchChange={handleSearchChange}
          handleSortNumbersClick={handleSortNumbersClick}
          productList={productList}
          searchInput={searchInput}
        />
      </div>
      <div className="text-center mt-5">
        <button
          className='px-10 border-2'
          onClick={handleOnModalOpen}>
          Intrare Noua
        </button>
        <div>
          {
            shownAddProductModal && (
              <AddNewProductModal 
                func={addRows}
                handleModalClose={handleModalClose}
              />
            )}
        </div>
      </div>
    </div>
  );
}

export default TableData;