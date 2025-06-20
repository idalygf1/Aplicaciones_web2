import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu } from 'antd';
import * as Icons from '@ant-design/icons';

const Icons = {
    DashOutlined,
    UserOutlined,
    BarChartOutlined,
};

function MenuDynamic() {
  const [menuItems, setMenuItems] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const fakeMenuData = [
    {
      title: 'Dashboard',
      path: '/dashboard',
      icon: 'DashboardOutlined',
      roles: ['665a1f2b04fd3a1b23e7761f'],
    },
    {
      title: 'Usuarios',
      path: '/users',
      icon: 'UserOutlined',
      roles: ['665a1f2b04fd3a1b23e7761f'],
    },
    {
      title: 'Productos',
      path: '/products',
      icon: 'BarChartOutlined',
      roles: ['665a1f2b04fd3a1b23e7761f', '665a1f2b04fd3a1b23e7761f2'],
    },
    {
      title: 'Ordenes',
      path: '/orders',
      icon: 'BarChartOutlined',
      roles: ['665a1f2b04fd3a1b23e7761f', '665a1f2b04fd3a1b23e7761f2'],
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setMenuItems(fakeMenuData);
    }, 500);
  }, []);

  const renderMenu = () => {
    return menuItems.map((item: any) => {
      const IconComponent = Icons[item.icon as keyof typeof Icons];
      return {
        key: item.path,
        icon: IconComponent ? <IconComponent /> : null,
        label: item.title,
      };
    });
  };

  return (
    <Menu
      theme="dark"
      mode="inline"
      selectedKeys={[location.pathname]}
      onClick={({ key }) => navigate(key)}
      items={renderMenu()}
      style={{ height: '100%', borderRight: 0 }}
    />
  );
}

export default MenuDynamic;
