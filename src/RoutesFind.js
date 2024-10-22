import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './pages/login';
import { Main } from './pages/main';
import { Catalog } from './pages/catalog';
import { Profile } from './pages/profile';
import { Tasks } from './pages/tasks';
import { Invite } from './pages/invite';
import { Cart } from './pages/cart';
import { Product } from './pages/product';
import { Buy } from './pages/buy';

export const RoutesFind = () => {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
      </Routes>
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
      <Routes>
        <Route path='/catalog' element={<Catalog />} />
      </Routes>
      <Routes>
        <Route path='/catalog/item' element={<Product />} />
      </Routes>
      <Routes>
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Routes>
        <Route path='/profile' element={<Profile />} />
      </Routes>
      <Routes>
        <Route path='/profile/tasks' element={<Tasks />} />
      </Routes>
      <Routes>
        <Route path='/profile/invite' element={<Invite />} />
      </Routes>
      <Routes>
        <Route path='/buy' element={<Buy />} />
      </Routes>
    </Router>
  );
};
