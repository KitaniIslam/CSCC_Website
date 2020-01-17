import React from 'react';
import styled from 'styled-components';
import {Row , Col , Button , Icon} from 'antd';
import community from '../../Images/community.svg';
const Colors = require('../../Tools/Colors.js');

export default function LeftToRightSection(){
    const Container = styled(Row)`
        height: 90vh;
        padding: 0 80px 0 80px;
    `;
    const Section = styled(Col)`
        display: flex;
        flex:1;
        align-items: center;
        justify-content: center;
        height: 90%;
        flex-direction: row;
    `;
    const Title = styled.h1`
        color: #1E1E2C ;
    `;

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
        <Container>
                <Quote style={{marginTop:"90px"}}>
                    <Text className="Title">Don't forget who we are</Text>
                    <Text className="Text">PATIENT LED US HERE</Text>
                </Quote>
                
                <Section span={12}>
                    <div style={{display: "flex" , flex:1, flexDirection:"column"}}>
                    {/* <Logo>
                        <img src={csccLogo} alt="cscc logo" style={{width: "40px",height: "40px"}}/>
                    </Logo> */}
                    <h1 className="Subtitle" style={{marginBottom: "20px"}}  >Computer Science Community Club.</h1>    
                    <h2 className="Text" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nam temporibus possimus harum amet, eos, accusamus nemo laboriosam assumenda quia fuga! Totam, perspiciatis eum libero nostrum tempore dignissimos expedita quisquam?</h2>
                    <Button style={{marginTop: "20px" , width: "140px" }} size="large" >Get more <Icon icon="bulb" type="right"/></Button>
                    </div>
                </Section>
                <Section span={12}>
                    <img src={community} alt="community" width={450} height={450} />
                </Section>
            </Container>
    );
}
