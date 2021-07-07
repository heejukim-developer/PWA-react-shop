// import { info } from 'console';
import React,{ useEffect, useState } from 'react';
import { Route, useHistory , useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';
// import {재고context} from './App.js';
import { Nav } from 'react-bootstrap';
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
            <h4 className="pt-5">
              {찾은상품.title}</h4>
            <p>{찾은상품.content}</p>
            <p>{찾은상품.price}</p>


            <Info 재고작명 ={props.재고작명 }></Info>

            <button className="btn-danger" onClick ={()=>{
                props.재고변경작명([9,11,12]);
                props.dispatch({type:'항목추가',장바구니데이터:{id:찾은상품.id, name:찾은상품.title,
                quan:1}});
            history.push('/cart');
            }}>주문하기</button> 

            <button className="btn-danger2" onClick={()=>{
             history.goBack();
            }}>뒤로가기</button> 

          </div>
        </div>

  <Nav className = "mt-5" variant="tabs" defaultActiveKey="link-0">
    <Nav.Item>
        <Nav.Link eventKey="link-0" 
        onClick = {()=>{스위치변경(false); 누른탭변경(0)}}>세부사항</Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link eventKey="link-1" onClick = {()=>{스위치변경(false); 누른탭변경(1)}}>배송관련</Nav.Link>
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
        return <div><button className="sebu">세부사항을 확인하세요</button></div>
    }else if(props.누른탭작명 === 1){
        return<div>1번째 내용입니다</div>
    }else if(props.누른탭작명 === 2){
        return<div>2번째 내용입니다</div>
    }

  }
  
  function Info(props){
      return(
          <p> 재고: {props.재고작명[0]}</p>
      )
  }

 
function state를props화 (state){
    return{
       state: state.reducer,
       alert열렸니:state.reducer2
    }
}
export default connect(state를props화)(Detail)