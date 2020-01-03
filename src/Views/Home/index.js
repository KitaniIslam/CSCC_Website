import React from "react";
import { Layout } from 'antd';
import '../../Tools/Typography.css'
import Navbar from '../../Components/Navbar';
import LeftToRightSection from '../../Components/LeftToRightSection'


export default function Home(){
    const {Content } = Layout;
    return (
        <div>
            <Navbar />
            <Content>
                <LeftToRightSection />
            </Content>
        </div>
    );
}