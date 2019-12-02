//import React from 'react';
import styled from "styled-components";

export const Banner = styled.div`
&:after{
content : '';
display: block;
height:100vh;
width:100%;
background-image:url("banner.jpeg");
background-size:cover;
background-repeat: no-repeat;
background-position: center;
filter: grayscale(60%);
}`;

export const TextWrapper = styled.div`
    position: absolute;
    z-index:1;
    left:50%;
    top:50%;
    transform: translate(-50% ,-50%);
    color:black;
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }


h2{
    font-size: 5rem;
    opacity: 1;
    padding: 0.35em 1em;
    border-top: 2px solid white;
    border-bottom: 2px solid white;
    text-transform: uppercase;
    color: white;
}

p{
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 0.225em;
    font-size: 2.5rem;
    color: white;
}

a{
    background-color: #ed4933;
    box-shadow: none;
    color: #ffffff;
    border-radius: 3px;
    border:0;
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 0.255em;
    padding: 1.8rem 0.8rem;
    text-align:center;
    text-decoration:none;
    text-transform: uppercase;
}
`;
