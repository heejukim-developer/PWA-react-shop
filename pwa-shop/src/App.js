import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import React, { useEffect, useState ,useContext,lazy,Suspense} from 'react';
import Data from './data';
// import Detail from './Detail.js';
import axios from 'axios';
import Cart from './Cart';
import './Detail.scss';
import {Link, Route, Switch, useHistory} from 'react-router-dom';
import Best from './Best';

let Detail = lazy(()=> import('./Detail'));

 
export let 재고context = React.createContext();


function App() {
let [inputData , inputData변경] = useState('');
let [데이터,데이터변경]= useState(Data)
let [Loding, Lodingchange]= useState(true);
let [재고,재고변경]= useState([10,11,12]);

useEffect(()=>{
  Lodingchange(true)});

  return (
    
<div className="App">

<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand>PET-SHOP</Navbar.Brand>
    
    <Navbar.Toggle aria-controls="basic-navbar-nav" ></Navbar.Toggle>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link><Link to ="/">Home</Link></Nav.Link>
        {/* <Nav.Link><Link to ="/detail">Detail</Link></Nav.Link> */}
        <NavDropdown title="Shopping" id="basic-nav-dropdown">
          <NavDropdown.Item href="/best">Best</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">옷</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">용품</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Nav.Link><Link to ="/Cart"> 장바구니
        </Link></Nav.Link>
      <input className="search" onChange= {(e)=>{inputData변경(e.target.value)}}>
      </input>
    </Navbar.Collapse>
   
  </Container>

</Navbar>



<Route exact path ="/">

 <div class ="welcome">
 <h2> 20% sale off</h2>
  <p>어서오세요 애완용품 판매 홈페이지 입니다 </p>
  <Button variant="outline-secondary">Learn more</Button>{' '}
  </div>

  <div className="container">
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
<Route path ="/detail/:id">
 <재고context.Provider value={재고}>
   <Suspense fallback = {<div>로딩중입니다 ! 잠시만 기다려주세요 </div>}>
  <Detail shoes작명 = {데이터} 재고작명 ={재고} 재고변경작명 ={재고변경}/>
  </Suspense>
  </재고context.Provider>
</Route>

{/* <Route path ="/detail/2">
<image src= "https://github.com/heejukim-developer/shop/blob/master/src/3.jpg?raw=true"></image>
</Route> */}

<Route path ="/cart">
  <Cart></Cart>
</Route>

{/* <Route path ="/best" Component={Card}>
</Route> */}

<Route path ="/:id">
  <div> 페이지가 없습니다 </div>
</Route>



</Switch>

    {/* <div className="col-md-4">
      <img src= {Shop1} alt ="로봇" width="100%" />
      <h5> <a href ="https://www.varram.co.kr/35/?idx=1&gclid=EAIaIQobChMI7IeJ-YmF8QIVBlRgCh1mjgSvEAQYASABEgJtefD_BwE"> {데이터[0].title} </a> </h5>
      <h6> 9900원 </h6>
      </div> */} 

    {/* <div className="col-md-4">
    <img src= {Shop2} alt ="하네스" width="100%" />
      <h5> <a href="http://emart.ssg.com/item/itemView.ssg?itemId=1000031094380&siteNo=6001&salestrNo=6005" >강아지 목줄 패딩 하네스</a></h5>
      <h6> 9900원</h6>
    </div>

    <div className="col-md-4">
    <img src= {Shop3} alt ="브러시" width="100%" />
      <h5> <a href="http://www.1300k.com/shop/goodsDetail.html?f_goodsno=215025225220">펫모이스 실리콘 브러쉬</a></h5>
      <h6> 18900원</h6>
    </div> */}
  </div>


  );
}

function Card(props) {
  let 재고 = useContext(재고context)
  let history =useHistory();
  return(
   <div className= "col-md-4" onClick={()=>{history.push('/detail/'+props.shoes.id)}}>
   <img src= {'https://github.com/heejukim-developer/shop/blob/master/src/'+ (props.i +1) + '.jpg?raw=true'} width="100%" />
   {/* {props.shoes.img} */}
    <h5> {props.shoes.title} </h5>
    <p> {props.shoes.price} </p>
    {/* {props.shoes.content} */}
  
    <Test></Test>
    
    </div>
   
  
   )
  }
  function Test(){
    let 재고 = useContext(재고context);
    return(
      <p>재고:{재고}</p>
    )
  }

  export default App;
