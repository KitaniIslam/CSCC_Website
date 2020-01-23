import React from 'react';
import {Layout , Icon , Input , message} from 'antd';
import styled from 'styled-components';
// const Colors = require('../../Tools/Colors');
const cscc_logo = require('../../Images/Logo/cscc_logo.png')


export default function Footer() {
    const {Footer} = Layout;
    
    const FooterSection = styled(Footer)`
        width: 100%;
        height: 60vh ;
        background-color: white;
        display:flex;
        flex-direction:column;
        padding:0;
    `;

    const Built =styled.div`
        height:65px;
        display:flex;
        align-items:center;
        justify-content:center;
        border-top:1px solid rgba(0,0,0,0.2) ;
    `;

    const Div= styled.div`
        display:flex;
        height: 100%;
        flex-direction: column ;
        align-items: center;
        justify-content: center;
    `;

    const success = () => {
        message.success('+213 541 95 54 01 copy to clip board');
        navigator.clipboard.writeText('+213 541 95 54 01');
    };

    return (
        <FooterSection>
            <Div>
                <img src={cscc_logo} style={{width:"60px",opacity: 0.6, filter: "brightness(0%)",margin:"10px"}} alt=""/>
                <h1 className="Text" style={{textAlign:"center"}}>Université Blida 1 "ex Saad Dahleb" Faculté des Sciences , Pavillon 1 <br/> Blida-Algérie</h1>

                <div style={{width:"160px" , display:"flex", flexDirection:"row", alignItems: "center" , justifyContent:"space-around" , margin:"10px"}}>
                    <Icon type="google" style={{fontSize:"20px"}}/>
                    <Icon type="facebook" style={{fontSize:"19px"}}/>
                    <Icon type="instagram" style={{fontSize:"20px"}}/>
                    <Icon type="youtube" style={{fontSize:"24px"}}/>
                    <Icon type="twitter" style={{fontSize:"22px"}}/>
                </div>
                
                <Input defaultValue="+213 541 95 54 01"  disabled style={{ width: 200 , margin:"10px"}} addonAfter={ <Icon onClick={success} type="phone" />} />
    

                
            </Div>
            <Built>
                <h1 className="Text" style={{padding:0,fontSize:"0.8rem"}}>© Built with pride and caffeine. All rights reserved CSCC 2020.</h1>    
            </Built>        
        </FooterSection>
    )
}


/**
 * 
 * <a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@liacastelli?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Marília Castelli"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Marília Castelli</span></a>
 */