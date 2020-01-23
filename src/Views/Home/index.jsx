import React from "react";
import { Layout, Affix, BackTop } from 'antd';
import '../../Tools/Typography.css';
import Navbar from '../../Components/Navbar';
import LeftToRightSection from '../../Components/LeftToRightSection';
import RightToLeftSection from '../../Components/RightToLeftSection';
import MainSection from '../../Components/MainSection';
import data from '../../Data';
import ProjectCarousel from '../../Components/ProjectCarousel';
import Footer from '../../Components/Footer';
import styled from 'styled-components';
import Map from '../../Components/Map';

const Colors = require('../../Tools/Colors')

export default function Home(){
    const {Content } = Layout;

    const BackTopButton = styled.div`
        height: 40px;
        width: 40px;
        line-height: 40px;
        border-radius: 4px;
        background-color: ${Colors.default.blue};
        color: #fff;
        text-align: center;
    `;
    return (
        <Layout>
            {/* <Navbar /> */}
            <BackTop>
                <BackTopButton className="ant-back-top-inner"> <h1 style={{fontSize: "20px"}} className="Subtitle">UP</h1> </BackTopButton>
            </BackTop>

            <Affix style={{ top: 0 }}>
                <Navbar />
            </Affix>
            <Content>
                <MainSection />
                <LeftToRightSection  Data={data.description} />
                <RightToLeftSection  Data={data.events} />
                <ProjectCarousel />
                <RightToLeftSection  Data={data.labs} />
                <Map />
            </Content>
            <Footer />
        </Layout>
    );
}