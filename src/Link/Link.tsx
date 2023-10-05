// 引入路由库
import React, { Component } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
// 引入子组件
import Navbar from './Navbar.tsx';
import Home from './Home.tsx';
import About from './About.tsx';

// Route标签设置跳转路径
class Link extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
        </div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default Link;
