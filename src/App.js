import * as React from 'react';
import CatProduct from './Components/CatProduct'
import Header from './Components/Header';
import Navigation from './Components/Navigation'
export default function BasicButtons() {
  return (
    <div>
    <Header/>
    <Navigation/>
    <CatProduct/>
    </div>
  );
}