import React from "react";
import Helmet from "react-helmet";

import Layout from '../components/layout';

import {SkillBadge} from '../components/styled'

import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import springIcon from '../assets/images/springio-ar21.svg'

// skill badge
import devicon from 'devicon/devicon.css'
import deviconColors from 'devicon/devicon-colors.css'

class Homepage extends React.Component {
    render() {
        const siteTitle = "Kazuya Takahashi - my portfolio";

        return (
            <Layout>
                <Helmet title={siteTitle} />

                {/*section for WHO AM I*/}
                <section id="one" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                                <h2>About Me</h2>
                            </header>
                            {/*TODO: To replace here*/}
                            <p>I'm Back-end Engineer worked in Japan and studying and living in Vancouver right now</p>
                            <p></p>
                        </div>
                    </div>
                </section>
                {/*section for What IS MY SKILLS*/}
                {/*TODO:Back Ground Color must be white or bright color*/}
                <section id="two" className="main style2">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <ul className="major-icons">
                                <li><SkillBadge><i className="devicon-java-plain-wordmark colored"></i>i></SkillBadge></li>
                                <li><SkillBadge className="devicon-swift-plain-wordmark colored"></SkillBadge></li>
                                <li><SkillBadge className="devicon-javascript-plain colored"></SkillBadge></li>
                                <li><img src={springIcon} width={64} height={48}/></li>
                                <li><SkillBadge className="devicon-c-plain-wordmark colored"></SkillBadge></li>
                                <li><SkillBadge className="devicon-mysql-plain-wordmark colored"></SkillBadge></li>
                                <li><SkillBadge className="devicon-android-plain-wordmark colored"></SkillBadge></li>
                                <li><SkillBadge className="devicon-react-original-wordmark colored"></SkillBadge></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <header className="major">
                                <h2>My Skills</h2>
                                <p>I have been a professional back-end developer for almost 3 years.</p>
                                <p>And now, I study Mobile development in collage and front-end development by my self.</p>
                            </header>
                            {/*TODO:Write description about my own skills */}
                            {/*<p>Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.</p>*/}
                            {/*<p>Blandit faucibus proin. Ac aliquam integer adipiscing enim non praesent vis commodo nunc phasellus cubilia ac risus accumsan. Accumsan blandit. Lobortis phasellus non lobortis dit varius mi varius accumsan lobortis. Blandit ante aliquam lacinia lorem lobortis semper morbi col faucibus vitae integer placerat accumsan orci eu mi odio tempus adipiscing adipiscing adipiscing curae consequat feugiat etiam dolore.</p>*/}
                            {/*<p>Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.</p>*/}
                        </div>
                    </div>
                </section>

                {/*section for MY PRODUCTS*/}
                <section id="three" className="main style1 special">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>My Product</h2>
                            </header>
                            <div className="col-4">
                                <span className="image fit"><img src={pic02} alt="" /></span>
                                <h3> Locatter </h3>
                                <p>This is the new style app!.</p>
                                <ul className="actions">
                                    <li><a href="#" className="button">More</a></li>
                                </ul>
                            </div>
                        </div>

                        {/*<div className="col-4">*/}
                        {/*    <span className="image fit"><img src={pic02} alt="" /></span>*/}
                        {/*    <h3>Magna feugiat lorem</h3>*/}
                        {/*    <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>*/}
                        {/*    <ul className="actions">*/}
                        {/*        <li><a href="#" className="button">More</a></li>*/}
                        {/*    </ul>*/}
                        {/*</div>*/}
                        {/*<div className="col-4">*/}
                        {/*    <span className="image fit"><img src={pic03} alt="" /></span>*/}
                        {/*    <h3>Magna feugiat lorem</h3>*/}
                        {/*    <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>*/}
                        {/*    <ul className="actions">*/}
                        {/*        <li><a href="#" className="button">More</a></li>*/}
                        {/*    </ul>*/}
                        {/*</div>*/}
                        {/*<div className="col-4">*/}
                        {/*    <span className="image fit"><img src={pic04} alt="" /></span>*/}
                        {/*    <h3>Magna feugiat lorem</h3>*/}
                        {/*    <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>*/}
                        {/*    <ul className="actions">*/}
                        {/*        <li><a href="#" className="button">More</a></li>*/}
                        {/*    </ul>*/}
                        {/*</div>*/}
                    </div>
                </section>
            </Layout>
        );
    }
}

export default Homepage;