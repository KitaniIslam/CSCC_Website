import React from 'react';
import styled from "styled-components";


export default function Map() {

    const Section = styled.div`
        width: 100%;
        height: 90vh;
        display: flex;
        flex-direction: column;
        align-items:center;
        justify-content: center; 
    `;

    const MapSection = styled.div`
        width: 60%;
        height: 400px;
        background-color: white ;        
    `;

    return (
        <Section>
            <h1 className="Title">We are here !</h1>
            <MapSection />
        </Section>
    )
}
