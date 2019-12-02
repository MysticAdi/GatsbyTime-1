import React from "react";
import {Link} from "gatsby";
import {Banner,TextWrapper} from "../styles/IndexStyles.js";


export default () => (
    <div style ={{position:'relative'}}>
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
        
    </div>
)
