import React from 'react';
import styled from 'styled-components';
import {Row , Col , Button , Icon} from 'antd';

export default function RightToLeftSection(props){
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

    return (<Container>
                {props.Data.haveQutes.quote &&  props.Data.haveQutes.value}
                <Section span={12}>
                    <img src={props.Data.icon} alt="community" width={500} height={500} />
                </Section>
                {/* <Quote style={{marginTop:"90px"}}>
                    <Text className="Title">Don't forget who we are</Text>
                    <Text className="Text">PATIENT LED US HERE</Text>
                </Quote> */}
                <Section span={12}>
                    <div style={{display: "flex" , flex:1, flexDirection:"column"}}>
                    {/* <Logo>
                        <img src={csccLogo} alt="cscc logo" style={{width: "40px",height: "40px"}}/>
                    </Logo> */}
                    <h1 className="Subtitle" style={{marginBottom: "20px"}}  >{props.Data.title}</h1>    
                <h2 className="Text" >{props.Data.content}</h2>
                    <Button style={{marginTop: "20px" , width: "140px" }} size="large" >{props.Data.calloutButtonAction}<Icon icon="bulb" type="right"/></Button>
                    </div>
                </Section>
            </Container>);
}