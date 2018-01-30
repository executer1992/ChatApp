import React from 'react';
import 'antd/dist/antd.css';
import { Menu, Icon,Button,Badge } from 'antd';
import './Navigation.css';
import Logo from './Logo';
const SubMenu = Menu.SubMenu;


class NavigationMenu extends React.Component {
    state = {
      current: 'mail',
      theme: 'dark',
    }
    handleClick = (e) => {
      console.log('click ', e);
      this.setState({
        current: e.key,
      });
    }
    render() {
      return (
        <div className='navigation'  theme={this.state.theme}>
            <Logo />
            <Menu
          theme={this.state.theme}
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Oferty</span></span>}>
            <Menu.Item key="1">Oferty</Menu.Item>
            <Menu.Item key="2">Zadania</Menu.Item>
            <Menu.Item key="3">Zlecenia</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="dashboard" /><span>Zadania</span></span>}>
            <Menu.Item key="4">Faktury</Menu.Item>
            <Menu.Item key="5">Kontakty</Menu.Item>
            <Menu.Item key="6">Mapy</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" title={<span><Icon type="calendar" /><span>Zlecenia</span></span>}>
            <Menu.Item key="4">Faktury</Menu.Item>
            <Menu.Item key="5">Kontakty</Menu.Item>
            <Menu.Item key="6">Mapy</Menu.Item>
          </SubMenu>
          <SubMenu key="sub4" title={<span><Icon type="switcher" /><span>Faktury</span></span>}>
            <Menu.Item key="4">Faktury</Menu.Item>
            <Menu.Item key="5">Kontakty</Menu.Item>
            <Menu.Item key="6">Mapy</Menu.Item>
          </SubMenu>
          <SubMenu key="sub5" title={<span><Icon type="contacts" /><span>Kontakty</span></span>}>
            <Menu.Item key="4">Faktury</Menu.Item>
            <Menu.Item key="5">Kontakty</Menu.Item>
            <Menu.Item key="6">Mapy</Menu.Item>
          </SubMenu>
          <SubMenu key="sub6" title={<span><Icon type="global" /><span>Mapy</span></span>}>
            <Menu.Item key="4">Faktury</Menu.Item>
            <Menu.Item key="5">Kontakty</Menu.Item>
            <Menu.Item key="6">Mapy</Menu.Item>
          </SubMenu>
        </Menu>
            <div className='search-container'>
              
                <Button type="primary" shape="circle" icon="search" />
            </div>
            <div className='notification'>
            <Badge count={5}>
      <Icon type="notification" />
    </Badge>
    </div>
        </div>
       
      );
    }
  }
export default NavigationMenu;  