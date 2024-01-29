import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import logo from './assets/Rick_and_Morty_logo.png';
import Input from './components/Input/Input';
import Button from './components/Button/Button';

const App = () => {

  return (
    <div className='w-full'>
      <Navbar />
      <div className='flex flex-col justify-center items-center mt-5'>
        <img src={logo} width={450} />
        <div className='mt-10 w-full max-w-2xl'>
          <div className='flex mx-10'>
            <Input placeholder='Buscar un personaje' styleProp='mr-10' />
            <Button type='green' label='Buscar' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
