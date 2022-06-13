import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import themeImage from '../../assets/theme.jpg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <h1>REACT FRESHER WEBSITE</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={themeImage} />
      </div>
    </Fragment>
  );
};

export default Header;
