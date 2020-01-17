import React from "react";
import { Layout } from 'antd';
import '../../Tools/Typography.css'
import Navbar from '../../Components/Navbar';
import LeftToRightSection from '../../Components/LeftToRightSection';
import MainSection from '../../Components/MainSection'
import styled from 'styled-components'

export default function Home(){
    const {Content } = Layout;

    const Quote = styled.div`
        display: flex;
        flex:1;
        flex-direction: column ;
        align-items: center;
        justify-content: center;
    `;

    const Text = styled.text`
        margin:0;
        text-align:center;
    `;
    return (
        <div>
            <Navbar />
            <Content>
                <MainSection />
                
                <LeftToRightSection />
            </Content>
        </div>
    );
}