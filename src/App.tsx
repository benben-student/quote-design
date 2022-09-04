import React, { lazy, useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from "@fortawesome/free-solid-svg-icons"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import MenuItem from './components/Menu/menuItem.tsx';
import Menu from './components/Menu/menu.tsx';
import SubMenu from './components/Menu/subMenu.tsx';
import Icon from './components/Icon/icon.tsx';
import Transition from './components/Transition/transition.tsx'
import Button from './components/Button/button.tsx'
library.add(fas)


const App: React.FC = () => {
  const [show, setShow] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        {/* <Icon icon="arrow-down" className="coffee" theme="primary" size="10x" /> */}
        {/* <FontAwesomeIcon icon={faCoffee}/> */}
        <Menu defaultIndex="0" onSelect={(index) => { alert(index) }} defaultOpenSubMenus={["2"]}>
          <MenuItem>cool link</MenuItem>
          <MenuItem disabled>cool link 2</MenuItem>
          <SubMenu title='dropdown'>
            <MenuItem>dropdown 1</MenuItem>
            <MenuItem>dropdown 2</MenuItem>
          </SubMenu>
          <MenuItem>cool link 3</MenuItem>
        </Menu>
        <Button size="lg" onClick={() => { setShow(!show) }} >Toggle</Button>
        <Transition
          in={show}
          timeout={300}
          animation="zoom-in-left"
        >
          <div>
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
          </div>
        </Transition >
        <Transition
          in={show}
          timeout={300}
          animation="zoom-in-left"
          wrapper
        >
          <Button btnType="primary" size="lg">A Large Button</Button>
        </Transition>
      </header>
    </div>
  );
}

export default App;
