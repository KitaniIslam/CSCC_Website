import React from 'react';
import styled from 'styled-components';
import {Row , Col} from 'antd';
import community from '../../Images/community.svg';

export default function LeftToRightSection(){
    const Container = styled(Row)`
        height: 100vh;
    `;
    const Section = styled(Col)`
        display: flex;
        flex:1;
        align-items: center;
        justify-content: center;
        height: 100%;
`;
    return (
        <Container>
            <Section span={12}><h1 className="Title">Computer Sience Community Club and more things here</h1> </Section>
            <Section span={12}>
                <img src={community} alt="community" width={450} height={450} />
            </Section>
        </Container>
    );
}