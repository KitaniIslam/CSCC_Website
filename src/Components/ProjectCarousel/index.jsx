import React from 'react';
import styled from 'styled-components';
import {Carousel, Icon, Button} from 'antd';
const bg = require('../../Images/bg.jpg');
const develop = require('../../Images/develop.jpg');
const embedded = require('../../Images/embedded.jpg');
const design = require('../../Images/design.jpg');

export default function ProjectCarousel(props){

    const Container = styled.div`
        display: flex;
        flex:1;
        align-items: center;
        justify-content: center;
        height: 90vh;
        width: 100%
        flex-direction: row;
        background-position: center center;
        background-size:cover;
        background-repeat: no-repeat;
        background-image: linear-gradient(101deg, rgba(0,0,0,0.7), rgba(0,0,0,0.7)),url(${bg});
    `;

    const Box = styled.div`
        width: 700px;
        height: 400px ;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        padding: 50px 25px 50px 10px;

    `;

    const DevelopImage= styled.div`
        text-align: center;
        line-height: 300px;
        height: 300px;
        overflow: hidden;
        position:relative;
        background-position: center center;
        background-size:cover;
        background-repeat: no-repeat;
        text-align: center;
        background-image: url(${develop});
    `;

    const EmbeddedImage= styled.div`
        text-align: center;
        line-height: 300px;
        height: 300px;
        overflow: hidden;
        position:relative;
        background-position: center center;
        background-size:cover;
        background-repeat: no-repeat;
        text-align: center;
        background-image: url(${embedded});
    `;


    const DesignImage= styled.div`
        text-align: center;
        line-height: 300px;
        height: 300px;
        overflow: hidden;
        position:relative;
        background-position: center center;
        background-size:cover;
        background-repeat: no-repeat;
        text-align: center;
        background-image: url(${design});
    `;

    const ProjectsTypeSection = styled.div`
        display: flex;
        flex-direction: row ;
        align-items: center;
        justify-content:space-between;
        width: 100%;
    `;



    const ProjectsType = [{icon:"code",title:"Development",main:"Cobbler's pose, bound angle webify ."},{icon:"sketch",title:"Design",main:"Cobbler's pose, bound angle webify ."},{icon:"robot",title:"Embedded",main:"Cobbler's pose, bound angle webify ."}]

    return (
        <Container>
            <Box >
                <div>

                <h1 className="Subtitle" style={{color:"white"}}>Most popular projects.</h1>
                <h1 className="Text" style={{color:"white"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis natus, eligendi minima repellendus numquam sequi omnis rem quibusdam saepe sapiente ad</h1>
                </div>


                <div>
                    <ProjectsTypeSection >
                        {ProjectsType.map(element => {
                            return (
                                <div style={{width:"25%"}}>
                                    <Icon type={element.icon} style={{color:"white", fontSize: '48px'}}  />
                                    <h1 className="Subtitle" style={{color:"white",marginTop:"8px",marginBottom:"8px" , fontSize:"1.3rem"}}>{element.title}</h1>
                                    <h1 className="Text" style={{color:"white"}}>{element.main}</h1>
                                </div>
                            )
                        })}
                    </ProjectsTypeSection>
                </div>
                <Button ghost style={{width:"180px"}} >
                    watch all projects
                    <Icon type="right" />
                </Button>
            </Box>
            {/* TODO: expose the Carousel as a separate component */}
                 <div style={{width:"500px", marginTop:"5px"}}>
                     <Carousel autoplay dotPosition="right">
                        <EmbeddedImage />
                        <DevelopImage />
                        <DesignImage />
                    </Carousel>
                     </div>
            
        </Container>

    );
}

// style={{position:"relative" , right: "160px", top:"38%"}}