import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const ViewDetail = () => {
    const loadedData =useLoaderData();
   
    
    return (
        <div>
           <p>name{loadedData.price}</p>
        </div>
    );
};

export default ViewDetail;