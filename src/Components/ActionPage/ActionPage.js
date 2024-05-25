import React, { useEffect, useState } from "react";
import MaterialPage from "./MaterialPage";
import BandPage from "./BandPage";

function ActionPage() {
  const [page, setPage] = useState('material');

  const handlePageSelect = (option) => {
    if(page == option){
      return
    }else{
    setPage(option)
    }
  }
  return (
    <div style={{ width: "100%", backgroundColor: "#6c757d" }}>
      <button onClick={() => handlePageSelect('material')} style={{width: "48%", margin: "0px 1%", padding: "5px", border: "none", borderRadius: "1rem", marginTop: "12px", backgroundColor: "#343a40", color: "white"}}>Material</button>
      <button onClick={() => handlePageSelect('band')} style={{width: "48%", margin: "0px 1%", padding: "5px", border: "none", borderRadius: "1rem", marginTop: "12px", backgroundColor: "#343a40", color: "white"}}>Bands</button>
      {page === 'material' ? <MaterialPage /> : <BandPage />}
    </div>
  );
}

export default ActionPage;
