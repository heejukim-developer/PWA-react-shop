// import { info } from 'console';
import React,{ useEffect, useState } from 'react';
import { Route, useHistory , useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';
import './Cart.js';
// import {재고context} from './App.js';
import { Nav,Button, Dropdown, Modal,Container,Row,Col,Form} from 'react-bootstrap';
import {CSSTransition} from 'react-transition-group';
import{connect} from 'react-redux';
import {CgArrowLeft,CgArrowRight} from 'react-icons/cg';

let 박스 = styled.div`
    padding: 20px;
`;
let 제목 = styled.h4`
    font-size: 20px;
    color: ${props => (props.색상)};
`;

function Detail(props){
    // let 재고 = useContext(재고context);
useEffect(()=>{
   let 타이머 = setTimeout(() => {alert변경(false) }, 2000);
   console.log('안녕');
   return ()=>{clearTimeout(타이머)}
},[]);

let [alert, alert변경]= useState(true);

let  {id}  = useParams();
let 찾은상품 = props.shoes작명.find(x=>x.id==id);

let history = useHistory();
let [누른탭,누른탭변경]= useState(0);
let [스위치,스위치변경]= useState(false);

let [show, setShow] = useState(false);

let Close = () => setShow(false);
let Show = () => setShow(true);


useEffect(()=>{
    var arr= localStorage.getItem('watched');
     if (arr===null) {arr=[]} else{ arr=JSON.parse(arr)};
 
     arr.push(id);
     arr = new Set(arr);
     arr = [...arr];
     localStorage.setItem('watched',JSON.stringify(arr));
 },[])
 

    return(
        
      <div className="container">
        <박스>
        <제목 className='color'>상세페이지</제목>
       

        <div className="b-f">
        <CgArrowLeft className="back"  color="gray" size="50px"
           onClick={()=>{history.goBack()}}/>
        <CgArrowRight className="front"  color="gray" size="50px"
           onClick={()=>{history.goForward()}}/>
           
        </div>
        </박스>
        

        {
            alert === true
            ?(<div className="my-alert2">
            <p>재고가 얼마 남지 않았습니다 </p>
            </div>
        )
        : null
        }
        
        <div className="row">
          <div className="col-md-6">
            {
          
         <img src={'https://github.com/heejukim-developer/PWA-react-shop/blob/main/pwa-shop/src/'+
           id+'.jpg?raw=true'} width="100%" />

            /* <img src={'https://github.com/heejukim-developer/shop/blob/master/src/'+
            id +'.jpg?raw=true'} width="100%" /> */

            }
          </div>
          <div className="col-md-6 mt-4">
            <h3 className="pt-5">
                {찾은상품.title}</h3>

            <span className="per">
            <p className="per_number">{찾은상품.number}</p>
            <p className="percentage">%</p>
            <p className="price">{찾은상품.price}</p>
           </span>

           <span className="sale_price">
           <h4 className="find">{찾은상품.real_price}</h4>
           <button className="sale">특가</button>
           </span>
      
        
           <h5 className ="info"> <Info 재고작명 ={props.재고작명}></Info></h5>
            
           <span className="information">
            <p className="normal">무료배송</p>
            <p className="free">40,000원 이상 무료배송
           </p>
           </span>
           <span className="information2">
            <p className="normal2">구매혜택</p>
            <p className="free2">5% 적립 또는 5% 즉시할인
           </p>
           </span>
      
  
   
    <Dropdown >
    <span className="choice_color">
    <p class ='_color'>색상</p>
    <Dropdown.Toggle className="basic" >
         [필수] 색상을 선택해주세요 
    </Dropdown.Toggle>
    <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">black</Dropdown.Item>
    <Dropdown.Item href="#/action-2">white</Dropdown.Item>
    <Dropdown.Item href="#/action-3">red</Dropdown.Item>
   </Dropdown.Menu>
   </span>
</Dropdown>

<Dropdown>
 <span className="choice_size">
   <p className="_size">사이즈 </p> 
<Dropdown.Toggle className="basic2">
    [필수] 사이즈를 선택해주세요 
 </Dropdown.Toggle>
 
<Dropdown.Menu>
    <Dropdown.Item href="#/action-1">S</Dropdown.Item>
    <Dropdown.Item href="#/action-2">M</Dropdown.Item>
    <Dropdown.Item href="#/action-3">L</Dropdown.Item>
    <Dropdown.Item href="#/action-3">XL</Dropdown.Item>
  </Dropdown.Menu>
  </span>
</Dropdown>



  <span className="order">
     <span className="order_price">주문금액</span> 
      <p className="order__price">{찾은상품.real_price}</p>
      </span>
    <div className="d-grid gap-2">
     <Button className="primary" size="lg" 
     onClick ={()=>{
        props.재고변경작명([9,11,12]);
        props.dispatch({type:'항목추가',
        장바구니데이터:{id:찾은상품.id, name:찾은상품.title,quan:1}});
    history.push('/cart');
    }}>
           Add to Cart
     </Button>

     <Button className="secondary" size="lg" onClick={Show}>
        바로구매하기
    </Button>


{/* 회원가입창 ~~~~~~~~~~~~~~~~~~~*/}

<Modal show={show} onHide={Close}>
        <Modal.Header closeButton>
          <Modal.Title>
             <h1 className="modal-title">Pet Shop</h1>
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

  <p className="join">비밀번호 재설정/ 회원가입</p>
  <p className="sns"> sns계정으로 간편 로그인/회원가입</p>
  <Container>
      
  <div className="sns_img">
  <Row  >
    <Col>
      <img className="facebook" src="https://github.com/heejukim-developer/PWA-react-shop/blob/main/pwa-shop/src/f.png?raw=true" width="50%" roundedCircle />
    </Col> 
    <Col >
    <img className="insta" src="https://github.com/heejukim-developer/PWA-react-shop/blob/main/pwa-shop/src/i.png?raw=true" width="50%" roundedCircle />
    </Col>
    <Col>
    <img className="naver" src="https://github.com/heejukim-developer/PWA-react-shop/blob/main/pwa-shop/src/n.png?raw=true" width="50%" roundedCircle />
    </Col>
  </Row>
  </div>
</Container>

  <Button className="primary" size="lg" >
        비회원구매하기
  </Button>
  </div>
</Form>
 </Modal.Body>
 </Modal>

     </div>
    </div>
    </div>

{/* 하단 탭 만들기 */}
  <Nav className = "mt-5" variant="tabs" defaultActiveKey="link-0">
    <Nav.Item>
        <Nav.Link eventKey="link-0" 
        onClick = {()=>{스위치변경(false); 누른탭변경(0)}}>배송관련</Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link eventKey="link-1" onClick = {()=>{스위치변경(false); 누른탭변경(1)}}>세부사항</Nav.Link>
    </Nav.Item>
    </Nav>

<CSSTransition in ={스위치} classNames="wow" timeout={500}>
<TabContent 누른탭작명 = {누른탭} 스위치변경작명 ={스위치변경}></TabContent>
</CSSTransition>
  </div> 
    )
  }

function TabContent(props){
 useEffect(()=>{
     props.스위치변경작명(true);
 })

    if(props.누른탭작명 === 0){
        return<div className="ex-img">
        <img src={"https://github.com/heejukim-developer/PWA-react-shop/blob/main/pwa-shop/src/express.jpg?raw=true"} width="100%"/>
        </div>
    }else if(props.누른탭작명 === 1){
        return <div>
        상품상세 예정
      </div> 
    }else if(props.누른탭작명 === 2){
        return<div>2번째 내용입니다</div>
    }

  }
  

  
  function Info(props){
      return(
          <p> 재고가 {props.재고작명[0]}개 남았습니다</p>
      )
  }

 
function state를props화 (state){
    return{
       state: state.reducer,
       alert열렸니:state.reducer2
    }
}



export default connect(state를props화)(Detail)