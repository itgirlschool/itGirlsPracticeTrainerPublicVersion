import { useAuth } from '../../hooks/use-auth.js';
import Select from './Selectors/Select.jsx';
import logo from '../../assets/images/logo.png';
import './Header.scss';
import progress from '../../assets/images/prgress.png';
import balls from '../../assets/images/balls.png';
import ExitButtonAuth from '../ExitButtonsAuth/ExitButtonAuth.jsx';

const openLessons = [
  {
    key: '1',
    label: (
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://itgirlschool.com/webreg'
      >
        Как девушке стать программисткой
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://itgirlschool.com/webinar_freelance'
      >
        Как девушке начать зарабатывать на фрилансе
      </a>
    ),
  },
];

const profession = [
  {
    key: '1',
    label: (
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://itgirlschool.com/new_frontend'
      >
        Frontend-разработка
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://itgirlschool.com/freelance_nocode'
      >
        Фриланс и No-Code
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://itgirlschool.com/java-developer'
      >
        Backend-разработка
      </a>
    ),
  },
];
const course = [
  {
    key: '1',
    label: (
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://itgirlschool.com/html'
      >
        Верстка
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://itgirlschool.com/java-script'
      >
        Основы JavaScript
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://itgirlschool.com/react'
      >
        React
      </a>
    ),
  },
  {
    key: '4',
    label: (
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://itgirlschool.com/figma'
      >
        Figma
      </a>
    ),
  },
  {
    key: '5',
    label: (
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://itgirlschool.com/tilda'
      >
        Tilda
      </a>
    ),
  },
  {
    key: '6',
    label: (
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://itgirlschool.com/bubble'
      >
        Bubble
      </a>
    ),
  },
  {
    key: '7',
    label: (
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://itgirlschool.com/email'
      >
        E-mail рассылки и чат-боты
      </a>
    ),
  },
  {
    key: '8',
    label: (
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://itgirlschool.com/personal-brand'
      >
        Личный бренд для фрилансеров
      </a>
    ),
  },
];
const about = [
  {
    key: '1',
    label: (
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://itgirlschool.com/career-center'
      >
        Центр Карьеры
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://itgirlschool.com/mission'
      >
        Миссия
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://itgirlschool.com/social'
      >
        Социальные инициативы
      </a>
    ),
  },
  {
    key: '4',
    label: (
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://itgirlschool.com/affiliate'
      >
        Партнерская программа
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://itgirlschool.com/tpost/a0nvrmdnb1-smi-o-nas'
      >
        СМИ о нас
      </a>
    ),
  },
  {
    key: '5',
    label: (
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://itgirlschool.com/paymentampbonuses'
      >
        Способы оплаты и бонусы
      </a>
    ),
  },
];

const Header = ( {isAuthenticated} ) => {
  const { firstName } = useAuth();

  return (
    <header className='header-container'>
      <img className='header-logo' src={logo} alt='logo' />
      {firstName && (
        <div className='progress_user-info'>
          <div className='progress_header'>
            <img src={progress} alt='progress' />
            Progress:87%
          </div>
          <div className='ball'>
            <img src={balls} alt='balls' />
            Balls:4
          </div>
        </div>
      )}
      <div className='header-info-container'>
        <Select items={openLessons} content='Открытые уроки' />
        <Select items={profession} content='Профессии' />
        <Select items={course} content='Интересные курсы' />
        <Select items={about} content='О школе' />
      </div>
      <div className='container_account'>
      {isAuthenticated && <ExitButtonAuth />}


        <div className='header-info-container-btn'>
          <p className='header-text'>Нас уже 600+ учениц</p>
        </div>
      </div>
    </header>
  );
};
export default Header;
