import React from 'react';
import styled from 'styled-components';
import {Carousel, Icon} from 'antd';
const bg = require('../../Images/bg.jpg');

export default function ProjectCarousel(props){

    const Container = styled.div`
        display: flex;
        flex:1;
        align-items: center;
        justify-content: center;
        height: 80vh;
        width: 100%
        flex-direction: row;
        background-position: center center;
        background-size:cover;
        background-repeat: no-repeat;
        background-image: linear-gradient(101deg, rgba(0,0,0,0.7), rgba(0,0,0,0.7)),url(${bg});
    `;

    const Box = styled.div`
        width: 700px;
        height: 380px ;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        padding: 50px 25px 50px 10px;

    `;

    const Div= styled.div`
         text-align: center;
        height: 300px;
        line-height: 400px;
        background: #364d79;
        overflow: hidden;
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
                <h1 className="Text" style={{color:"white"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis natus, eligendi minima repellendus numquam sequi omnis rem quibusdam saepe sapiente ad aut! Officiis, voluptatem! Labore ipsum ducimus odit fugit at?</h1>
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
            </Box>
            {/* TODO: expose the Carousel as a separate component */}
                 <div style={{width:"500px", marginTop:"5px"}}>
                     <Carousel autoplay>
                         <Div>
                         <h3>1</h3>
                         </Div>
                         <Div>
                         <h3>2</h3>
                         </Div>
                         <Div>
                         <h3>3</h3>
                         </Div>
                         <Div>
                         <h3>4</h3>
                         </Div>
                         <Div>
                         <h3>1</h3>
                         </Div>
                         <Div>
                         <h3>2</h3>
                         </Div>
                         <Div>
                         <h3>3</h3>
                         </Div>
                         <Div>
                         <h3>4</h3>
                         </Div>
                     </Carousel>
                     </div>
            
        </Container>

    );
}