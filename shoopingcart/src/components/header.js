import React from 'react';
import styled from 'styled-components'
import {Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom';
const Title = styled.h2`
 width:100%;
 height:30px;
 font-family: 'Roboto Mono', monospace;
 padding-left:10px;
 color: #10ac84;
 border-bottom:1px solid black;
 display: flex;
 justify-content: space-between;

`
const Header =(props) =>{
     return(
          <Title>
              Shoping app  
              <Link to='/cart'><Icon style={{marginRight:'50px'}}name = 'shop'color="green"/></Link>
          </Title>     
     )
}
export default Header;
