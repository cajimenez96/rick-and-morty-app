import {useState} from 'react';
import Button from '../Button/Button';
import { Link } from "react-router-dom";
import styles from './navbar.module.css';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState<boolean>(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: 'Characters', path: '/' },
  ];

  return (
    <div className={`flex justify-between items-center px-6 py-4 border border-b-yellow ${styles.borderBottom}`}>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>R&M - WiKi</h1>

      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <Link to={item.path} key={item.id} onClick={() => setNav(!nav)}>
            <Button label={item.text} type='none' />
          </Link>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
      {nav ? <AiOutlineClose size={20} color='#fff' /> : <AiOutlineMenu size={20} color='#fff' />}
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`flex flex-col w-[60%] h-full duration-500 fixed ease-in-out top-0 bg-blue border border-r-yellow ${nav ? `md:hidden left-0` : `bottom-0 left-[-100%]`}`}
      >
        {/* Mobile Logo */}
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4 text-center'>R&M - WiKi</h1>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <Link to={item.path} key={item.id} onClick={() => setNav(!nav)}>
            <Button
              style={'text-white'}
              label={item.text}
              type='none'
            />
          </Link>
        ))}
      </div>
    </div>

  );
};

export default Navbar;
