import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Container, Nav, NavDropdown, Button,ButtonGroup,Spinner } from 'react-bootstrap';
import React, { useEffect, useState ,useContext,lazy,Suspense} from 'react';
import Data from './data';
// import Detail from './Detail.js';
import axios from 'axios';
import Cart from './Cart';
import './Detail.scss';
import {Link, Route, Switch, useHistory, useParams} from 'react-router-dom';
import {FiShoppingCart } from 'react-icons/fi';
import {AiOutlineSearch} from 'react-icons/ai';
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
    <Navbar.Brand><Link to ="/">PET-SHOP</Link></Navbar.Brand>
    
    <Navbar.Toggle aria-controls="basic-navbar-nav" ></Navbar.Toggle>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link><Link to ="/">Home</Link></Nav.Link>
        {/* <Nav.Link><Link to ="/detail">Detail</Link></Nav.Link> */}
        <NavDropdown title="Shopping" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Best</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">옷</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">용품</NavDropdown.Item>
        </NavDropdown>
      </Nav>

        
        <AiOutlineSearch color="#0000008C" size="25px" />
      <input className="search" onChange= {(e)=>{inputData변경(e.target.value)}}>
      </input>

      <Nav.Link>
        <Link to ="/Cart">
        <FiShoppingCart/> Cart
        </Link></Nav.Link>
    </Navbar.Collapse>
   
  </Container>

</Navbar>



<Route exact path ="/">

 <div class ="welcome">
 <h2 className="saleoff"> 20% sale off</h2>
  <p>어서오세요 애완용품 판매 홈페이지 입니다 ~</p>
  <Button className="learnmore">Learn more</Button>{' '}
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

  <button className = "btn btn-primary" 
  
  // onClick = {()=>{
  // Lodingchange(true)
  //   axios.post('서버url',{id:'heeju',pw:'12345'})
  //   axios.get('https://codingapple1.github.io/shop/data2.json')
  //   .then((result)=>{
  //     Lodingchange(false)
  //     console.log(result.data);
  //     데이터변경([...데이터, ...result.data ]);
  //   })
  
  //   .catch(()=>{ 
  //     Lodingchange(false)


  //     console.log('서버를 불러오는데 실패했어요')})
  // }}
  
  >더보기</button>
  </div>
</Route>

<Switch>
<Route path ="/detail/:id">
 <재고context.Provider value={재고}>
   <Suspense fallback = {<Spinner animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner>}>
  <Detail shoes작명 = {데이터} 재고작명 ={재고} 재고변경작명 ={재고변경}/>
  </Suspense>
  </재고context.Provider>
</Route>

<Route path ="/cart">
  <Cart></Cart>
</Route>

<Route path ="/:id">
  <div> 상세페이지 준비중입니다 !  </div>
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
   
   {/* <img src= {'https://github.com/heejukim-developer/shop/blob/master/src/'+ (props.i +1) + '.jpg?raw=true'} width="100%" /> */}
   
   <img src= {'https://github.com/heejukim-developer/PWA-react-shop/blob/main/pwa-shop/src/'+ 
   props.i+ '.jpg?raw=true'} width="100%" />
   
    <h5> {props.shoes.title} </h5>
    <span >
    <p className="front_price">{props.shoes.price}</p>
    <p className="front_real_price">{props.shoes.real_price}</p> 
    </span>
  
    <ButtonGroup size="sm">
    <Button className ="btn-sale">Sale</Button>
    <Button className ="btn-best">Best</Button>
  </ButtonGroup>
  
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
