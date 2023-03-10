import data from "./data";

function Table({productList, handleSortClick, handleSearchChange, searchInput, handleSortNumbersClick}){

    function tableProductRow(data) {
        return (
            <tr key={data.id}>
                <td className="text-center border-2 px-10 text-start">{data.numeProdus}</td>
                <td className="text-center border-2">{data.eliberare}</td>
                <td className="text-center border-2">{data.stoc}</td>
                <td className="text-center border-2">{data.pret}</td>
                <td className="text-center border-2">{data.dataExpirarii}</td>
                <td className="text-center border-2 font-bold"><button>X</button></td>
            </tr>
        )
    }
  
    return (
        <table className="table-auto text-center w-full">
            <thead>
                <tr key={data.id}>
                    <th
                        className="border-2 px-10 text-start items-center">
                        NumeProdus
                        <input
                        className="border-2 m-2 px-2"
                        placeholder="Cauta produs...."
                        onChange={handleSearchChange}
                        />
                        <h1 onClick={() => handleSortClick("numeProdus")}>↑↓</h1>
                    </th>
                    <th
                        className="border-2 px-30">
                        Forma Eliberare
                        <h1 onClick={() => handleSortClick("eliberare")}>↑↓</h1>
                    </th>
                    <th
                        className="border-2 px-10">
                        Stoc
                        <h1 onClick={() => handleSortNumbersClick("stoc")}>↑↓</h1>
                    </th>
                    <th
                        className="border-2 unstyled px-10">
                        Pret
                        <h1 onClick={() => handleSortNumbersClick("pret")}>↑↓</h1>
                    </th>
                    <th
                        className="border-2 px-10">
                        DataExpirarii
                        <h1 onClick={() => handleSortClick("dataExpirarii")}>↑↓</h1>
                    </th>
                    <th className="border-2 px-2"></th>
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
                tableProductRow(data)
                ))}
            </tbody>
        </table>
    );
}

export default Table;