import React from 'react';
import UserForm from './modules/user/Userform';
import ProductTable from './modules/product/ProductTable';
import OrderTable from './modules/order/OrderTable';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';

export interface AppRoute {
  path: string;
  element: JSX.Element;
  label?: string;
  icon?: JSX.Element;
  roleIds?: string[];
  hidden?: boolean;
}

const routes: AppRoute[] = [
  {
    path: '/',
    element: <UserForm />,
    label: 'Inicio',
    icon: <HomeOutlined />,
  },
  {
    path: '/users',
    element: <UserForm />,
    label: 'Usuarios',
    icon: <UserOutlined />,
  },
  {
    path: '/products',
    element: <ProductTable />,
    label: 'Productos',
    icon: <UserOutlined />,
  },
  {
    path: '/orders',
    element: <OrderTable />,
    label: 'Órdenes',
    icon: <UserOutlined />,
  },
];

export default routes;
