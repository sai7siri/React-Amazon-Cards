import React from "react";
import ReactDom from "react-dom/client";
import AmazonTab from "./AmazonTab";



ReactDom.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <h2 style={{textAlign:"center",margin:"15px" }}>Blockbuster Deals on Computer Accessories | Shop Now</h2>
      
      <AmazonTab />
      

   </React.StrictMode>
)