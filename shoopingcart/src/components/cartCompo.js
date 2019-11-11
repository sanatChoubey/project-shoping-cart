import React,{ useEffect,useState } from 'react';
import { useSelector } from 'react-redux'
import styled from 'styled-components';

const CartDiv = styled.div`
  border-bottom:1px solid gray;
  height:200px;
  width:100%;
`
const CartCompo = ()=>{
  const [set,useset]= useState(0)
  const cartData = useSelector(state=> state)
  console.log(cartData)
  if(cartData.Cart){
    return(
      <div>
     { cartData.Cart.map(data=>{
        return(
          
            <CartDiv>
              <h2>{data.name}</h2>
              <p>price <b>{data.price}</b></p>
              <div style={{display:'flex',flexDirection:'row'}}>
              Quantity 
                <button onClick={()=>{ 
                  useset(set+1) 
                  if(data.quantity===0){

                  }else{data.quantity=data.quantity-1}}
                  }>-</button>
                <div>{data.quantity}</div>
                <button onClick={()=>{
                  useset(set+1) 
                  
                  data.quantity=data.quantity+1}}>+</button>
              </div>
              <div>total price {data.quantity*data.price}</div>
            </CartDiv>
        )
      })}
      <div><b>Grandtotal</b> = { cartData.Cart.reduce((acc,data)=>{return acc + data.quantity*data.price},0)}</div>
      </div>
    )
  }
  return(
    <div>
      please wait ..
    </div>
  )
}
export default CartCompo