import React from "react";
import '../../Tools/Typography.css'
import Navbar from '../../Components/Navbar';

export default function Home(){
    return (
        <div>
            <Navbar />
            <h1 className='Title'>This is title.</h1>
            <h1 className='Subtitle'>This is Subtitle.</h1>
            <h1 className='Text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa voluptatem explicabo repellat a consectetur architecto vero suscipit corporis veritatis totam quas possimus cum repellendus doloribus, laborum nemo neque quam nisi.Cupiditate ut magnam neque atque sint distinctio ducimus officiis iste autem optio doloribus corrupti quaerat, quisquam minus cumque, cum odit. Illo vel maxime perspiciatis assumenda omnis voluptatibus eius consequatur explicabo!</h1>
        </div>
    );
}