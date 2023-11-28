import React from 'react'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import { Link } from "gatsby"
import "./main.css"
import { Helmet } from "react-helmet";

const withStyles = makeStyles(() => ({
    mainRoot: {
        display: "flex",
        flexDirection: "column",
    },
    landingWrapper: {
        display: "flex",
        // minHeight: "100vh",
        minHeight: "65vh",
        flexDirection: "column",
        margin: "auto"

    },
    projectImage: {
        width: "25%",
        margin: "25px",
        maxHeight: "350px"
    },
    imageWrapper: {
        display: "flex",
        justifyContent: "center",
        background: "white"
    },
    scrollToSectionOne: {
        height: "80px",
        background: "#ffffff"
    },
    scrollToServices: {
        paddingBottom: "80px",
        backgroundColor: "#ffffff"
    },
    scrollToContact: {
        paddingBottom: "80px",
        backgroundColor: "#ffffff"
    },
    phoneIcon: {
        marginRight: "10px"
    },
    emailIcon: {
        marginRight: "10px"
    },
    scrollToLocation: {
        height: "100px",
        flexDirection: "column"
    },
    reviewHeader: {
        fontSize: "1.2rem",
        textTransform: "none",
        color: "white",
        margin: 0,
    },
    socialFooterMargin: {
        height: "40px",
        width: "40px",
        margin: "10px auto"
    },
    socialFooter: {
        height: "40px",
        width: "40px",
        margin: "0 10px"
    },
    socialFacebookSpacing: {
        height: "40px",
        width: "40px",
        margin: "0 10px",
        marginBottom: "2px"
    },
    socialLink: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    container: {
        display: "flex",
        flexDirection: "column",
        margin: "20px 0"
    },
    landing: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
        width: "100%",
        marginTop: "112px",
        marginBottom: "0px",
        backgroundColor: "#000000"
    },
    mainBanner: {
        display: "flex",
        flexDirection: "column",
        color: "white",
        backgroundColor: "black",
    },

}))

const Main = () => {
    const classes = withStyles();

    return (
        <div className={classes.mainRoot}>

            <div className={classes.landing}>
                <div className={classes.mainBanner}>
                    <p class="landingHeader">Find your next gig <span class="highlightText">faster</span></p>
                    <p class="landingSubheader">Real job openings, no online applications</p>
                    <p class="landingSubtext">We find you the latest job openings, posted by real companies, hiring managers, and recruiters</p>
                </div>

            </div>

            <section class="sectionWrapper">
                <span className={classes.scrollToSectionOne} id="sectionOne"></span>
                <h1 class="jobHeader">Latest Jobs</h1>
                <div class="jobPostWrapper">
                <div className="jobPost">
                        <div>
                            <p className="jobPostTitle">Sales Director - <span><a className="jobPostLink" href="https://bn.co/" target="_blank">Brand Networks </a></span></p>
                            <p className="textLeft">Location - Rochester, NY</p>
                            <p className="textLeft">Compensation - $120,000 - $160,000</p>
                        </div>
                        <div>
                            <p className="textRight"><b>Post Date: 11/27</b></p>
                            <p className="textRight">Post Contact Information - <span><a target="_blank" className="jobPostLink" href="https://www.linkedin.com/in/jeremiahfrick/">Jeremiah Frick
                            </a></span></p>
                            <p className="textRight">Post Source - <span><a className="jobPostLink" href="https://www.linkedin.com/posts/andres-mazabel_hiring-activity-7125144150844276736-DGuL?utm_source=share&utm_medium=member_desktop" target="_blank">LinkedIn</a></span></p>
                            <a className="jobDescLink textRight" href="https://recruiting.paylocity.com/recruiting/jobs/Details/2070309/BN-Acquisition-LLC/Sales-Director" target="_blank">Job Description/Post: None</a>
                        </div>
                    </div>
                    <div className="jobPost">
                        <div>
                            <p className="jobPostTitle">Technical Recruiter (3 openings) - <span><a className="jobPostLink" href="https://mavric.io/" target="_blank">Mavric.io </a></span></p>
                            <p>Location - Remote</p>
                            <p>Compensation - Unknown</p>
                        </div>
                        <div>
                            <p className="textRight"><b>Post Date: 11/27</b></p>
                            <p className="textRight">Post Contact Information - <span><a className="jobPostLink" target="_blank" href="https://www.linkedin.com/in/mike-tannenbaum/">Michael Tannenbaum
                            </a></span></p>
                            <p className="textRight">Post Source - <span><a className="jobPostLink" href="https://www.linkedin.com/posts/andres-mazabel_hiring-activity-7125144150844276736-DGuL?utm_source=share&utm_medium=member_desktop" target="_blank">LinkedIn</a></span></p>
                            <p className="jobPostLink textRight" href="https://boards.greenhouse.io/cloudflare/jobs/5468887?gh_jid=5468887" target="_blank">Job Description/Post: None</p>
                        </div>
                    </div>
                    <div className="jobPost">
                        <div>
                            <p className="jobPostTitle">Product Manager - <span><a className="jobPostLink" href="https://www.cloudflare.com/" target="_blank">Cloudflare </a></span></p>
                            <p>Location - Remote</p>
                            <p>Compensation - $140,000 - $202,000</p>
                        </div>
                        <div>
                            <p className="textRight"><b>Post Date: 11/14</b></p>
                            <p className="textRight">Post Contact Information - <span><a className="jobPostLink" target="_blank" href="https://www.linkedin.com/in/renahlee/">Ollie Hsieh</a></span></p>
                            <p className="textRight">Post Source - <span><a className="jobPostLink" href="https://www.linkedin.com/feed/update/urn:li:activity:7130248925847896066/" target="_blank">LinkedIn</a></span></p>
                            <a className="jobDescLink textRight" href="https://boards.greenhouse.io/cloudflare/jobs/5468887?gh_jid=5468887" target="_blank">Job Description/Post</a>
                        </div>

                    </div>
                    <div className="jobPost">
                        <div>
                            <p className="jobPostTitle">Senior Product Manager - <span><a className="jobPostLink" href="https://www.cockroachlabs.com/" target="_blank">Cockroach Labs </a></span></p>
                            <p>Location - Remote</p>
                            <p>Compensation - $135,000 - $290,000</p>
                        </div>
                        <div>
                            <p className="textRight"><b>Post Date: 10/28</b></p>
                            <p className="textRight">Post Contact Information - <span><a className="jobPostLink" target="_blank" href="https://www.linkedin.com/in/andrewscottwoods/">Andy Woods</a></span></p>
                            <p className="textRight">Post Source - <span><a className="jobPostLink" href="https://www.linkedin.com/feed/update/urn:li:activity:7121219991756005377/" target="_blank">LinkedIn</a></span></p>
                            <a className="jobDescLink textRight" href="https://www.cockroachlabs.com/careers/jobs/?gh_jid=5451842&gh_src=4e8f51df1us" target="_blank">Job Description/Post</a>
                        </div>
                    </div>
                    <div className="jobPost">
                        <div>
                            <p className="jobPostTitle">Regional Account Manager - <span><a className="jobPostLink" href="https://www.dataclean.com/careers.html" target="_blank">Data Clean</a></span></p>
                            <p>Location - Remote</p>
                            <p>Compensation - Unknown</p>
                        </div>
                        <div>
                            <p className="textRight"><b>Post Date: 11/7</b></p>
                            <p className="textRight">Post Contact Information - <span><a className="jobPostLink" target="_blank" href="https://www.linkedin.com/in/austin-havens/">Austin Havens</a> <br /></span></p>
                            <p className="textRight">Post Source - <span><a className="jobPostLink" href="https://www.linkedin.com/posts/austin-havens_sales-family-where-are-my-hunters-thatre-activity-7125504806558867456-GtzP?utm_source=share&utm_medium=member_desktop" target="_blank">LinkedIn</a></span></p>
                            <p className="jobPostLink textRight" href="" target="_blank">Job Description/Post: None</p>
                        </div>
                    </div>
                    <div className="jobPost">
                        <div>
                            <p className="jobPostTitle">Account Executive - <span><a className="jobPostLink" href="https://www.agiloft.com/company/jobs/" target="_blank">Agiloft</a></span></p>
                            <p>Location - Remote</p>
                            <p>Compensation - Unknown</p>
                        </div>
                        <div>
                            <p className="textRight"><b>Post Date: 11/7</b></p>
                            <p className="textRight">Post Contact Information - <span><a className="jobPostLink" target="_blank" href="https://www.linkedin.com/in/alissa-sirianni-5287164/">Alissa Sirianni</a> <br /></span></p>
                            <p className="textRight">Post Source - <span><a className="jobPostLink" href="https://www.linkedin.com/posts/alissa-sirianni-5287164_hiring-ugcPost-7124739664594276352-zWQG?utm_source=share&utm_medium=member_desktop" target="_blank">LinkedIn</a></span></p>
                            <p className="jobPostLink textRight" href="" target="_blank">Job Description/Post: None</p>
                        </div>
                    </div>
                    <div className="jobPost">
                        <div>
                            <p className="jobPostTitle">Product Manager - <span><a className="jobPostLink" href="https://www.astuto.ai/" target="_blank">Astuto </a></span></p>
                            <p>Location - Remote</p>
                            <p>Compensation - Unknown</p>
                        </div>
                        <div>
                            <p className="textRight"><b>Post Date: 11/7</b></p>
                            <p className="textRight">Post Contact Information - <span><a className="jobPostLink" target="_blank" href="https://www.linkedin.com/in/sudhakar/">Sudhakar Gorti</a> <br /> <a href="mailto: ai-roles@astuto.ai">ai-roles@astuto.ai</a></span></p>
                            <p className="textRight">Post Source - <span><a className="jobPostLink" href="https://www.linkedin.com/feed/update/urn:li:activity:7126434344365125632/" target="_blank">LinkedIn</a></span></p>
                            <a className="jobDescLink textRight" href="https://boards.greenhouse.io/cloudflare/jobs/5468887?gh_jid=5468887" target="_blank">Job Description/Post</a>
                        </div>
                    </div>
                    <div className="jobPost">
                        <div>
                            <p className="jobPostTitle">Senior Product Manager - <span><a className="jobPostLink" href="https://www.datadoghq.com/" target="_blank">Datadog </a></span></p>
                            <p>Location - Remote</p>
                            <p>Compensation - $187,000 - $240,000</p>
                        </div>
                        <div>
                            <p className="textRight"><b>Post Date: 11/13</b></p>
                            <p className="textRight">Post Contact Information - <span><a className="jobPostLink" target="_blank" href="https://www.linkedin.com/in/kendyll-mudry-b18737b1/">Kendyll Mudry</a></span></p>
                            <p className="textRight">Post Source - <span><a className="jobPostLink" href="https://www.linkedin.com/feed/update/urn:li:activity:7128407948950687745/" target="_blank">LinkedIn</a></span></p>
                            <a className="jobDescLink textRight" href="https://careers.datadoghq.com/detail/5475997/?gh_jid=5475997" target="_blank">Job Description/Post</a>
                        </div>
                    </div>
                    <div className="jobPost">
                        <div>
                            <p className="jobPostTitle">Product Manager - <span><a className="jobPostLink" href="https://babylonchain.io/" target="_blank">Babylonchain </a></span></p>
                            <p>Location - Remote</p>
                            <p>Compensation - Unknown</p>
                        </div>
                        <div>
                            <p className="textRight"><b>Post Date: 11/12</b></p>
                            <p className="textRight">Post Contact Information - <span><a className="jobPostLink" target="_blank" href="https://www.linkedin.com/in/spencer89/">Spencer Yang</a></span></p>
                            <p className="textRight">Post Source - <span><a className="jobPostLink" href="https://www.linkedin.com/feed/update/urn:li:activity:7128549783778054144/" target="_blank">LinkedIn</a></span></p>
                            <a className="jobDescLink textRight" href="https://babylonchain.io/job/product-manager" target="_blank">Job Description/Post</a>
                        </div>

                    </div>
                    <div className="jobPost">
                        <div>
                            <p className="jobPostTitle">Product Manager - <span><a className="jobPostLink" href="https://trustandwill.com/" target="_blank">Trust & Will </a></span></p>
                            <p>Location - Remote</p>
                            <p>Compensation - $115,000 - $165,000</p>
                        </div>
                        <div>
                            <p className="textRight"><b>Post Date: 10/28</b></p>
                            <p className="textRight">Post Contact Information - <span><a className="jobPostLink" target="_blank" href="https://www.linkedin.com/in/andres-mazabel/">Andres Mazabel</a></span></p>
                            <p className="textRight">Post Source - <span><a className="jobPostLink" href="https://www.linkedin.com/posts/andres-mazabel_hiring-activity-7125144150844276736-DGuL?utm_source=share&utm_medium=member_desktop" target="_blank">LinkedIn</a></span></p>
                            <a className="jobDescLink textRight" href="https://boards.greenhouse.io/cloudflare/jobs/5468887?gh_jid=5468887" target="_blank">Job Description/Post</a>
                        </div>
                    </div>

                </div>
            </section>
            <div className={classes.container}>
                <span className={classes.scrollToSectionOne} id="sectionTwo"></span>
            </div>

            <span className={classes.scrollToLocation} id="sectionThree"></span>



            <span className={classes.scrollToContact} id="contactForm"></span>
            <div className="signupWrapper">
                <p class="signUpText">Get the latest jobs in your inbox, every week.</p>
                <form method="post" action="https://sendfox.com/form/1vowyd/1gr590" class="sendfox-form emailWrapper" id="1gr590" data-async="true" data-recaptcha="true">
                    <p><label className="signUpTextForm" htmlFor="sendfox_form_email"></label>
                        <input className="emailInput" type="email" id="sendfox_form_email" placeholder="Email" name="email" required />
                    </p>
                    <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true"><input type="text" name="a_password" tabIndex="-1" value="" autoComplete="off" /></div>
                    <p>
                        <button className="submitEmailButton" type="submit">Submit</button>
                    </p>
                </form>
                <Helmet>
                    <script src="https://sendfox.com/js/form.js"></script>
                </Helmet>

            </div>

        </div>
    )
}

export default Main
