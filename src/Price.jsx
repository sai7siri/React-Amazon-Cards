import React from 'react'

const Price = ({oldprice, newprice}) => {
   let old = {
      fontFamily: "arial",
      fontWeight:"500",
      textDecoration: "line-through"
   };

   let newPri = {
      fontFamily: "arial",
      fontWeight:"600",
      
   }
   let div= {
      backgroundColor:"rgb(240, 190, 81)",
      paddingTop:"5px",
      height: '42px',
      borderBottomLeftRadius:"15px",
      borderBottomRightRadius:"15px"
   }
  return (
    <div style={div}>
      <span style={old}>{oldprice}</span>  &nbsp;&nbsp;&nbsp;
      <span style={newPri}>{ newprice}</span>
    </div>
  )
}

export default Price;