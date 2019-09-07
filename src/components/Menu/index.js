import React from 'react';
import { Link } from 'react-router-dom';
import { scaleDown as BurgerMenu } from 'react-burger-menu';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

export default function Menu() {
  return (
    <BurgerMenu
      customBurgerIcon={<Icon icon="bars" />}
      isOpen={false}
      outerContainerId="container"
      pageWrapId="main"
      width={300}
    >
      <Link to="/home">
        <Icon icon="home" />
        <span>Home</span>
      </Link>
      <Link to="/calendar">
        <Icon icon="calendar-alt" />
        <span>Calendário</span>
      </Link>
    </BurgerMenu>
  );
}
