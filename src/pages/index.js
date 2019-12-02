import React,{Component} from "react";
import {Link} from "gatsby";
import {Banner,TextWrapper, MoreText} from "../styles/IndexStyles";
import { relative } from "path";


export default () => (
    <div style ={{position:relative}}>
        <Banner></Banner>
        <TextWrapper>
            <div>
                <h2> Mr.0bvious </h2>
                <p> Just a simple <br/>
                Competitive Coder & <br/>
                Web Developer</p>
                <Link to="/works">My Works</Link>
            </div>
        </TextWrapper>
        <MoreText>Learn More</MoreText>
    </div>
)
