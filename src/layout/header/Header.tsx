import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../components/logo/logo';
import { Menu } from '../../components/menu/Menu';


const items = ["Home", "About", "Skills", "Works", "Contact"]


export const Header = () => {
    return ( 
        <StyledHeader>
           <Logo/>
           <Menu menuItems={items}/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: #d4ffd3;
    display: flex;
    justify-content: space-between;
`