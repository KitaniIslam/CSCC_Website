import React from 'react';
import {Layout, Menu} from 'antd';
import styled from 'styled-components';
import Colors from '../../Tools/Colors'

export default function Navbar(){
    const {Header} = Layout ;
    const StyledHeader = styled(Header)`
        /* background-color: ${Colors.trueDark} !important; */
    `;

    const StyledMenu = styled(Menu)`
    /* background-color: ${Colors.trueDark} !important; */
    `;


    return ( <StyledHeader className="header">
      <div className="logo" />
      {/* <StyledMenu
        theme="dark"       
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <StyledMenu.Item key="1">nav 1</StyledMenu.Item>
        <StyledMenu.Item key="2">nav 2</StyledMenu.Item>
        <StyledMenu.Item key="3">nav 3</StyledMenu.Item>
      </StyledMenu> */}
    </StyledHeader>
        );

}