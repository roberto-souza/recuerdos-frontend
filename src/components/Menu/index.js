import React from 'react';
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
      <div>eu sou um menu</div>
    </BurgerMenu>
  );
}
