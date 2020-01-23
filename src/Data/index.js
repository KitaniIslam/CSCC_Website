import React from 'react';
import styled from 'styled-components';

function Quote(props){
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
    return(
        <Quote style={{marginTop:"90px"}}>
            <Text className="Subtitle" style={{fontSize:"2.8rem"}}>{props.title}</Text>
            <Text className="Text">{props.subtitle}</Text>
        </Quote>
    );
}


export default {
    description:{
        title : "Computer Science Community Club." ,
        content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nam temporibus possimus harum amet, eos, accusamus nemo laboriosam assumenda quia fuga! Totam, perspiciatis eum libero nostrum tempore dignissimos expedita quisquam?",
        calloutButtonAction : "Get more",
        icon: require('../Images/SVG/team.svg') ,
        haveQutes : {
            quote : true ,
            value : Quote({title:"Don't forget who we are",subtitle:"PATIENT LED US HERE"})
        }
    },
    events:{
        title : "Let our achievement do the talking." ,
        content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nam temporibus possimus harum amet, eos, accusamus nemo laboriosam assumenda quia fuga! Totam, perspiciatis eum libero nostrum tempore dignissimos expedita quisquam?",
        calloutButtonAction : "Take a look",
        icon: require('../Images/SVG/winners.svg') ,
        haveQutes : {
            quote : false ,
            value : ''
        }
    },
    labs:{
        title : "Continuous knowledge sharing responsibility" ,
        content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nam temporibus possimus harum amet, eos, accusamus nemo laboriosam assumenda quia fuga! Totam, perspiciatis eum libero nostrum tempore dignissimos expedita quisquam?",
        calloutButtonAction : "Take a look",
        icon: require('../Images/SVG/undraw_data.svg') ,
        haveQutes : {
            quote : true ,
            value : Quote({title:"We give it our best",subtitle:"SHARING IS CARING"})
        }
    }

};