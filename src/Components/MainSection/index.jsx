import React from 'react';
import styled from 'styled-components';
import {Row , Col} from 'antd';
import {Button} from 'antd';
const bg = require('../../Images/safar.jpg');
const kitani = require('../../Images/Logo/kitani.png');
const venusLogo  = require('../../Images/Logo/venusLogo.png');
const netupLogo = require('../../Images/Logo/netupLogo.png');
const univLogo = require('../../Images/Logo/univLogo.png');
const blidacompLogo = require('../../Images/Logo/blidacompLogo.png');
const msLogo = require('../../Images/Logo/msLogo.png');

export default function LeftToRightSection(){
    const Container = styled(Row)`
        height: 90vh;
    `;
    const Section = styled(Col)`
        display: flex;
        flex:1;
        align-items: center;
        justify-content: center;
        height: 100%;
        background-position: center center;
        background-size:cover;
        background-repeat: no-repeat;
        text-align: center;
        background-image: linear-gradient(101deg, rgba(33,185,200,0.3), rgba(5,108,187,0.3)),url(${bg}) ;
        flex-direction: column;
    `;
    const Title = styled.h1`
        color: #1E1E2C ;
    `;

    const SponsorZone = styled.div`
        width: 70vw;
        height: 100px;
        background-color: white;
        position: absolute; 
        bottom: -50px ;
        display: flex;
        flex-direction: row;
        justify-content:space-around;
        align-items:center;
        -webkit-box-shadow: 9px 7px 7px -4px rgba(0,0,0,0.29);
        -moz-box-shadow: 9px 7px 7px -4px rgba(0,0,0,0.29);
        box-shadow: 9px 7px 7px -4px rgba(0,0,0,0.29);
        border-radius: 4px;
        filter: grayscale(100%);
    `;

    return (
        <Container>
            <Section>
                <Title className="Title" style={{color: "white"}}>You can make the difference</Title>    
                <Title className="Text" style={{color: "white"}}>Computer Science Community Club, when sharing mean everything.</Title>
                <div style={{flexDirection: "Row" , display: "flex" }}>

                <Button style={{marginTop: "20px"}} size="large"  icon="phone" type="primary" block>Contact us</Button>
                <Button style={{marginTop: "20px" , marginLeft: "20px"}} size="large"  icon="bulb" ghost>Take the tour</Button>
                </div>
                
                <SponsorZone style={{zIndex: 1}}>
                    
                    {/* <img src={cscc_logo} style={{width:"60px", height:"60px",opacity: 0.6}} alt=""/> */}
                    <img src={kitani} style={{width:"60px", height:"60px",opacity: 0.6}} alt=""/>
                    <img src={msLogo} style={{width:"140px"}} alt=""/>
                    <img src={blidacompLogo} style={{width:"140px",opacity: 0.8}} alt=""/>
                    <img src={netupLogo} style={{width:"140px",opacity: 0.8}} alt=""/>
                    <img src={univLogo} style={{width:"60px", height:"60px"}} alt=""/>
                    <img src={venusLogo} style={{width:"80px", height:"80px",opacity: 0.6}} alt=""/>

                </SponsorZone>
            </Section>
        </Container>
    );
}

/**
 *             <Section span={12}><h1 className="Title">Computer Sience Community Club and more things here</h1> </Section>
            <Section span={12}>
                <img src={community} alt="community" width={450} height={450} />
            </Section>
 */