import React from 'react';
import './App.css';
import Item from './Config/Items.json';
import  styled from 'styled-components'
import { Button } from 'semantic-ui-react';
import {useDispatch} from 'react-redux';
import { cart } from './redux/Action/Cart';
const Itemdiv = styled.div`
  width: 100%;
  height: 250px;
  border-bottom: 1px solid gray;
  padding: 20px;
`
function App() {
  const dispatch = useDispatch();


  const datafetch = () => {

    return (Item.map((data, i) => (
      <Itemdiv key={i}>
        <h3>{data.name}</h3>
        <div>price:<b>{data.price}rs</b></div>
        <div>{data.description}</div>
        <Button color="green"style={{marginTop:'10px'}}
        onClick={()=>{
         dispatch(cart({...data,quantity:0}))
        }}
        >ADD to Cart</Button>
      </Itemdiv>
    )))
  }

  return (
    <div>
      {datafetch()}
    </div>
    );
}

export default App;
