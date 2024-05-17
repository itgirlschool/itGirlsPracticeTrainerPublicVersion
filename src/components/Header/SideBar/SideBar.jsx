import React from 'react';
import logo from '../../../assets/images/logo.png';
import { slide as Menu } from 'react-burger-menu';
import './SideBar.scss';
import ExitButton from '../../ExitButtonsAuth/ExitButtonAuth';

const SideBar = ({ isAuthenticated, ...props }) => {
  return (
    <div className='containerBurger'>
      <div className='logo'>
        <img src={logo} alt='logo' />
      </div>

      <div className='test'>
        <div className='logout-container'>
        {isAuthenticated && <ExitButton />}
        </div>
        <div className='wrapper_menu'>
          <Menu {...props} right>
            <a className='menu-item' href='#'>
              Открытые уроки
            </a>

            <a className='menu-item' href='#'>
              Карьерная консультация
            </a>

            <a className='menu-item' href='#'>
              Frontend-разработка
            </a>

            <a className='menu-item' href='#'>
              Фриланc и No-Code
            </a>
            <a className='menu-item' href='#'>
              Backend-разработка
            </a>
            <a className='menu-item' href='#'>
              Интенсивные курсы
            </a>
            <a className='menu-item' href='#'>
              О школе
            </a>
            <a className='menu-item' href='#'>
              Центр Карьеры
            </a>
            <a className='menu-item' href='#'>
              Способы оплаты и бонусы
            </a>
            <a className='menu-item' href='#'>
              Блог
            </a>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
