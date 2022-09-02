import React from 'react';
import Button, { ButtonSize, ButtonType } from './components/Button/button.tsx';
import MenuItem from './components/Menu/menuItem.tsx';
import Menu from './components/Menu/menu.tsx';
const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Menu defaultIndex={0} onSelect={(index) => { alert(index) }}>
          <MenuItem index={0}>cool link</MenuItem>
          <MenuItem index={1} disabled>cool link 2</MenuItem>
          <MenuItem index={2}>cool link 3</MenuItem>
        </Menu>
        <Button className="custom">Hello</Button>
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
        </code>
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
