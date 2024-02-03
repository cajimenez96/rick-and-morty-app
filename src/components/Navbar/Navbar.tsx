import {useState} from 'react';
import Button from '../Button/Button';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import styles from './navbar.module.css';

const Navbar = () => {

    // State to manage the navbar's visibility
    const [nav, setNav] = useState(false);

    // Toggle function to handle the navbar's display
    const handleNav = () => {
      setNav(!nav);
    };
  

  const navItems = [
    { id: 1, text: 'Characters' },
    { id: 2, text: 'Episode' },
    { id: 3, text: 'Location' },
  ];


  return (
    <div className={`flex justify-between items-center px-6 py-4 border border-b-yellow ${styles.borderBottom}`}>
      {/* Logo */}
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>R&M - WiKi</h1>

      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <Button key={item.id} label={item.text} type='none' />
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
      {nav ? <AiOutlineClose size={20} color='#fff' /> : <AiOutlineMenu size={20} color='#fff' />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={`flex flex-col w-[60%] h-full duration-500 fixed ease-in-out top-0 bg-blue border border-r-yellow ${nav ? `md:hidden left-0` : `bottom-0 left-[-100%]`}`}
      >
        {/* Mobile Logo */}
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4 text-center'>R&M - WiKi</h1>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <Button
            key={item.id}
            style={'text-white'}
            label={item.text}
            type='none'
          />
        ))}
      </ul>
    </div>

  );
};

export default Navbar;
