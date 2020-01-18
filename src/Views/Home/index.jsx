import React from "react";
import { Layout } from 'antd';
import '../../Tools/Typography.css';
import Navbar from '../../Components/Navbar';
import LeftToRightSection from '../../Components/LeftToRightSection';
import RightToLeftSection from '../../Components/RightToLeftSection';
import MainSection from '../../Components/MainSection';
import data from '../../Data';
import ProjectCarousel from '../../Components/ProjectCarousel';

export default function Home(){
    const {Content } = Layout;
    return (
        <div>
            <Navbar />
            <Content>
                <MainSection />
                <LeftToRightSection  Data={data.description} />
                <RightToLeftSection  Data={data.events} />
                <ProjectCarousel />
                <RightToLeftSection  Data={data.labs} />
            </Content>
        </div>
    );
}