import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import cart from './Cart'
import Data from './data';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore,combineReducers} from 'redux'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
// import reportWebVitals from './reportWebVitals';

let alert초기값 = true;
function reducer2(state= alert초기값, 액션){
 if(액션.type === 'alert닫기'){
  return false
}else{
    return state 
  }
}
let 초기값 =[];
function reducer(state=초기값,액션){
  if(액션.type === '항목추가'){
    let copy =[...state];
    let found= copy.findIndex((a)=>{return a.id ===액션.장바구니데이터.id});
    
    if (found >= 0){
      copy[found].quan++;
      return copy }
    else{
      let copy=[...state];
      copy.push(액션.장바구니데이터);
      return copy
    }
  }
  else if (액션.type === '수량증가'){
    let copy=[...state];
    let 같은값= copy.findIndex((a) => { return a.id === 액션.장바구니데이터}); 
    copy[같은값].quan++;
    return copy 
} else if(액션.type ==='수량감소'){
    let copy=[...state];
    let 같은값= copy.findIndex((a) => { return a.id === 액션.장바구니데이터}); 
    copy[같은값].quan--;
    return copy
} 
  else if(액션.type === '삭제하기'){
    let copy =[...state];
    let copy2 = copy.filter((a)=> { return a.id !== 액션.장바구니데이터})
    return copy2
} 
else{
    return state
}






};

let store = createStore(combineReducers({reducer,reducer2}));



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>

    <Provider store= {store}>
    <App />
    </Provider>
    
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
