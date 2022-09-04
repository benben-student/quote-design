import React, { lazy } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from "@fortawesome/free-solid-svg-icons"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import Button, { ButtonSize, ButtonType } from './components/Button/button.tsx';
import MenuItem from './components/Menu/menuItem.tsx';
import Menu from './components/Menu/menu.tsx';
import SubMenu from './components/Menu/subMenu.tsx';
import Icon from './components/Icon/icon.tsx';

library.add(fas)


const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Icon icon="arrow-down" className="coffee" theme="danger" size="10x" />
        {/* <FontAwesomeIcon icon={faCoffee}/> */}
        <Menu defaultIndex="0" onSelect={(index) => { alert(index) }} mode="vertical" defaultOpenSubMenus={["2"]}>
          <MenuItem>cool link</MenuItem>
          <MenuItem disabled>cool link 2</MenuItem>
          <SubMenu title='dropdown'>
            <MenuItem>dropdown 1</MenuItem>
            <MenuItem>dropdown 2</MenuItem>
          </SubMenu>
          <MenuItem>cool link 3</MenuItem>
        </Menu>
        {/* <Button className="custom">Hello</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Hello</Button>
        <Button disabled={ButtonType.Primary} size={ButtonSize.Large}>Hello</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>Hello</Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com" target="_blank">Baidu Link</Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com">Baidu Link</Button>
        <h1>Hello world</h1>
        <h2>Hello world</h2>
        <h3>Hello world</h3>
        <hr />
        <code>
          const a="b"
        </code> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
