import React from "react";
import Helmet from "react-helmet";

import Layout from '../components/layout';

import {SkillBadge} from '../components/styled'

import springIcon from '../assets/images/springio-ar21.svg'
import javaIcon from '../assets/images/java.svg'
import javaScripticon from '../assets/images/javaScript.svg'
import cIcon from '../assets/images/C.svg'
import mySqlIcon from '../assets/images/mysql.svg'
import swiftIocn from '../assets/images/swift.svg'
import reactIcon from '../assets/images/react.svg'
import androidIcon from '../assets/images/android.svg'
import gitHubIcon from '../assets/images/github-original.svg'

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
                            <p><b>Back-End Engineer</b>r</p>
                            <p>I studied about Programing in Fukuoka Institute University and graduated it.</p>
                            <p>After that. I started working in a junior position for 3 years.</p>
                            <p>Now, I'm in Vancouver for studying to develop mobile apps.</p>
                            <p>Especially I'm interested in iOS developing.</p>
                        </div>
                    </div>
                </section>
                {/*section for What IS MY SKILLS*/}
                {/*TODO:Back Ground Color must be white or bright color*/}
                <section id="two" className="main style2">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <ul className="major-icons">
                                <li><SkillBadge><img src={javaIcon} width={64} height={64}/></SkillBadge></li>
                                <li><img src={swiftIocn} width={64} height={64}/></li>
                                <li><img src={javaScripticon} width={64} height={64}/></li>
                                <li><img src={springIcon} width={64} height={64}/></li>
                                <li><img src={gitHubIcon} width={64} height={64}/></li>
                                <li><img src={androidIcon} width={64} height={64}/></li>
                                <li><img src={cIcon} width={64} height={64}/></li>
                                <li><img src={mySqlIcon} width={64} height={64}/></li>
                                <li><img src={reactIcon} width={64} height={64}/></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <header className="major">
                                <h2>My Skills</h2>
                                <p> - I'm good at Java + Spring FW.</p>
                                <p> - iOS is better than Android. </p>
                                <p> - In mobile development, I'm good at GPS things and Firebase</p>
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
                                <h2>My Products</h2>
                            </header>
                            <div className="col-4">
                                <span className="image"><img src={"https://flycricket-screenshots.s3.amazonaws.com/4996c0a108de41fbad2c80dd2f6e8418/medium/fdfa8545-1305-447a-8bec-de376bebc035"} alt="Top Page" height={200} width={150} /></span>
                                <h3> Locatter </h3>
                                <p>This is the new style SNS.</p>
                                <p>Applying now, coming soon!.</p>
                                <ul className="actions">
                                    <li><a href=" https://locatter-0.flycricket.io/?t=1567020499" className="button">More</a></li>
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