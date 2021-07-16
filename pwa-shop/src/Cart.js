import React, { useState } from 'react';
import { Table,CloseButton,Button,Modal,Form,Container,Row,Col} from 'react-bootstrap';
import { connect } from 'react-redux';
import './Cart.css';
import {useHistory} from 'react-router-dom';
import {FiShoppingCart } from 'react-icons/fi';
import './Detail.js';

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
<Table striped bordered hover >
    <tr>
      <th>번호</th>
      <th>상품명</th>
      <th>수량</th>
      <th>수량</th>
      <th>삭제하기</th>

    </tr>
    

    {props.state.map((a,i)=>{
        return(
        <tr key ={i}>
            <td>{a.id}</td>
            <td className="ordername">{a.name}</td>
            <td>{a.quan}</td>
            <td ><button className="plus" onClick ={()=>{props.dispatch({type :'수량증가',장바구니데이터 : a.id})}}>+</button>
                <button className="minus" onClick ={()=>{props.dispatch({type :'수량감소',장바구니데이터 : a.id})}}>-</button>
            </td>
            <td>
            <button className="orderclose"onClick={()=>{props.dispatch({type:'삭제하기',장바구니데이터 : a.id})}}>x</button>
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
    <Button className="andshopping" size="lg" onClick={()=>{history.push('/')}}>
        계속쇼핑하기
    </Button>
    <Button className="secondary" size="lg" onClick={Show}>
        바로구매하기
    </Button>
{/*        
{/* 회원가입창 ~~~~~~~~~~~~~~~~~~~*/}

    <Modal show={show} onHide={Close}>
        <Modal.Header closeButton>
          <Modal.Title>
             <h1>Pet Shop</h1>
          </Modal.Title>
        </Modal.Header>
    <Modal.Body>
    <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>이메일</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>비밀번호</Form.Label>
    <Form.Control type="password" placeholder="password" />
  </Form.Group>

  <div className="d-grid gap-2">
  <Button className="secondary" size="lg">
    로그인
  </Button>

  <Container>
      <p className="join">비밀번호 재설정/ 회원가입</p>
      <p className="sns"> sns계정으로 간편 로그인/회원가입</p>
  <Row >
    <Col>
      <img className="facebook" src="https://github.com/heejukim-developer/PWA-react-shop/blob/main/pwa-shop/src/f.png?raw=true" width="40%" roundedCircle />
     
    </Col> 
    <Col >
    <img className="insta" src="https://github.com/heejukim-developer/PWA-react-shop/blob/main/pwa-shop/src/i.png?raw=true" width="41%" roundedCircle />
    </Col>
    <Col>
    <img className="naver" src="https://github.com/heejukim-developer/PWA-react-shop/blob/main/pwa-shop/src/n.png?raw=true" width="40%" roundedCircle />
    </Col>
  </Row>
    </Container>
  <Button className="primary" size="lg">
        비회원구매하기
  </Button>
  </div>
    </Form>
 </Modal.Body>
 </Modal> 
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