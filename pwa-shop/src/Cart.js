import React, { useState } from 'react';
import { Table,CloseButton,Button,Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import './Cart.css';
import {useHistory} from 'react-router-dom';
import {FiShoppingCart } from 'react-icons/fi';
import { show } from './Detail.js';

function Cart(props){
    let [show, setShow] = useState(false);

    let Close = () => setShow(false);
    let Show = () => setShow(true);
    
let history =useHistory();
return(
<div>
<span className="cart_front">
<h2 className="cart_title">장바구니</h2>
<FiShoppingCart className="fish"/></span>
<Table striped bordered hover>
    <tr>
      <th>#</th>
      <th>상품명</th>
      <th>수량</th>
      <th>색상</th>
      <th>수량</th>

    </tr>
    

    {props.state.map((a,i)=>{
        return(
        <tr key ={i}>
            <td>{a.id}</td>
            <td>{a.name}</td>
            <td>{a.quan}</td>
            <td>{a.color}</td>
            <td><button onClick ={()=>{props.dispatch({type :'수량증가',장바구니데이터 : a.id})}}>+</button>
                <button onClick ={()=>{props.dispatch({type :'수량감소',장바구니데이터 : a.id})}}>-</button>
            </td>

            </tr>)
        })}
      </Table>

      {
          props.alert열렸니 === true
        ?(<div className = 'my-alert2'>
        <p className ="cart_alert">지금 구매하시면 신규고객 20%할인</p>
        <button className ="cart_close" onClick={()=>{props.dispatch({type:'alert닫기'})}}>
        닫기</button>
        </div>)
        :null
      }
    <Button className="andshopping" size="lg"
    onClick={()=>{history.push('/')}}>
        계속쇼핑하기
    </Button>
    <Button className="purchase" size="lg" 
    onClick={show}>
      바로구매하기 
      <Modal></Modal>
    </Button>
</div>

    )
}

function state를props화 (state){
    return{
       state: state.reducer,
       alert열렸니:state.reducer2
    }
}
export default connect(state를props화)(Cart)
// export default Cart;