import data from "./data";


function searchNune() {
    return (
    data
        .filter((produs) =>{
            return (
                search.toLowerCase() === "" 
              ? produs 
              : produs.numeProdus.toLowerCase().includes(searchInput)
        )})
        .map((produs) => 
            <tr key={index}>
            <td className="text-center border-2 px-10 text-start">{data.numeProdus}</td>
            <td className="text-center border-2">{data.otc}</td>
            <td className="text-center border-2">{data.stoc}</td>
            <td className="text-center border-2">{data.pret}</td>
            <td className="text-center border-2">{data.dataExpirarii}</td>
        </tr>
    ))};
                
    export default searchNune
      
          

