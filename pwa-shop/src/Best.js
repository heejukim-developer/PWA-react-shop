// import logo from './logo.svg';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css'
// // import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
// import React, { useEffect, useState ,useContext,lazy,Suspense} from 'react';
// import Data from './data';
// import axios from 'axios';
// import Cart from './Cart';
// import './Detail.scss';
// import {Link, Route, Switch, useHistory} from 'react-router-dom';
// import { Card } from 'react-bootstrap';

// let Detail = lazy(()=> import('./Detail'));

 
// export let 재고context = React.createContext();

// function Best(props) {
// let [inputData , inputData변경] = useState('');
// let [데이터,데이터변경]= useState(Data)
// let [Loding, Lodingchange]= useState(true);
// let [재고,재고변경]= useState([10,11,12]);

// useEffect(()=>{
//   Lodingchange(true)});

//   return (
// <div className="best">
// <Route exact path ="/best">

  {/* <div className="container">
    <재고context.Provider value={재고}>
  <div className="row">
  {
    데이터.map((a,i)=>{
      return (<Card shoes = {데이터[i]} i={i}/>)
    })
    }
  </div>
   </재고context.Provider>

  <button className = "btn btn-primary" onClick = {()=>{
  Lodingchange(true)
    axios.post('서버url',{id:'heeju',pw:'12345'})
    axios.get('https://codingapple1.github.io/shop/data2.json')
    .then((result)=>{
      Lodingchange(false)
      console.log(result.data);
      데이터변경([...데이터, ...result.data ]);
    })
  
    .catch(()=>{ 
      Lodingchange(false)


      console.log('서버를 불러오는데 실패했어요')})
  }}>더보기</button>
  </div>
</Route>

<Switch>
<Route path ="/best/:id">
 <재고context.Provider value={재고}>
   <Suspense fallback = {<div>로딩중입니다 ! 잠시만 기다려주세요 </div>}>
  <Detail shoes작명 = {데이터} 재고작명 ={재고} 재고변경작명 ={재고변경}/>
  </Suspense>
  </재고context.Provider>
</Route>

<Route path ="/cart">
  <Cart></Cart>
</Route>


<Route path ="/best">
<Best></Best>
</Route>

<Route path ="/:id">
  <div> 페이지가 없습니다 </div>
</Route>


</Switch>

  </div>


  );
}

function Card(props) {
  let 재고 = useContext(재고context)
  let history =useHistory();
  return(
   <div className= "col-md-4" onClick={()=>{history.push('/detail/'+props.shoes.id)}}>
   <img src= {'https://github.com/heejukim-developer/shop/blob/master/src/'+ (props.i +1) + '.jpg?raw=true'} width="100%" />
   {props.shoes.img}
    <h5> {props.shoes.title} </h5>
    <p> {props.shoes.price} </p>
    {/* {props.shoes.content} */}
  
    {/* <Test></Test>
    
    </div>
   
  
   )
  }
  function Test(){
    let 재고 = useContext(재고context);
    return(
      <p>재고:{재고}</p>
    )
  } */}
  {/* <Card></Card>
  </Route>
  </div> 
  )};
  export default Best; */}
