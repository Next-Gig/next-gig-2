import React from 'react'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import { Link } from "gatsby"
import "./main.css"
import { Helmet } from "react-helmet";
import CheckIcon from '@mui/icons-material/Check';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import nextGigPreview from "../images/nextGig_preview_2.png"

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
                    <p class="landingHeader">Find your next gig. <span class="highlightText">Faster.</span></p>
                    <p class="landingSubheader">Real people. Real leads. Ready to hire.</p>
                    {/* <p class="landingSubtext">The traditional job search process is broken. Connections land jobs, not endless applications.</p> */}
                </div>

            </div>

            <section class="sectionWrapper">
                <span className={classes.scrollToSectionOne} id="sectionOne"></span>
                <h1 class="jobHeader">The traditional job search process is broken.</h1>
                <h2 style={{marginBottom: "100px"}}><span style={{color: "#9700ff", fontWeight: "bold"}}>Connections land jobs</span>, not online applications.</h2>
            </section>
            <span className={classes.scrollToSectionOne} id="sectionTwo"></span>

            <div className={classes.container}>
                <div class="howItWorksWrapper">
                    <h1>How it works</h1>
                    <div class="howItWorksCardsWrapper">
                        <div class="howItWorksCard">
                            <h3 class="howItWorksTitle">Sign Up</h3>
                            <p>Sign up with your email and access real leads, right now</p>
                        </div>
                        <div class="howItWorksCard">
                            <h3 class="howItWorksTitle">Get the list</h3>
                            <p>Access last month's leads instantly, for free</p>
                        </div>
                        <div class="howItWorksCard">
                            <h3 class="howItWorksTitle">Connect</h3>
                            <p>Leverage leads to reach out and land your next gig </p>
                        </div>
                    </div>

                </div>
            </div>

            <img src={nextGigPreview} />

            <span className={classes.scrollToLocation} id="sectionThree"></span>

            <div class="pricingRoot">
                <h1>Pricing</h1>

                <div class="pricingWrapper">
                    <div class="pricingPlan">
                        <h2 class="pricingTitle">Free</h2>
                        <p class="pricingSubtitle">Get last month's leads, instantly</p>
                        <p class="pricingNumber">$0<span style={{ fontSize: "1rem", color: "black" }}>/month</span></p>
                        <div>
                            <div class="pricingTextIcon">
                                <CheckCircleIcon sx={{ color: "#9700ff", marginRight: "12px" }} />
                                <p>Company, location, contact name, and source for each lead</p>
                            </div>
                            <div class="pricingTextIcon">
                                <CheckCircleIcon sx={{ color: "#9700ff", marginRight: "12px" }} />
                                <p>New leads added monthly</p>
                            </div>
                        </div>
                        <Link class="freeSignUpButton" to="/free">Sign up</Link>
                    </div>
                    <div class="pricingPlan">
                        <h2 class="pricingTitle">Plus</h2>
                        <p class="pricingSubtitle">Get latest leads, updated monthly</p>
                        <p class="pricingNumber">$10<span style={{ fontSize: "1rem", color: "black" }}>/month</span></p>
                        <div>
                            <div class="pricingTextIcon">
                                <CheckCircleIcon sx={{ color: "#9700ff", marginRight: "12px" }} />
                                <p>Access the entire database of leads</p>
                            </div>
                            <div class="pricingTextIcon">
                                <CheckCircleIcon sx={{ color: "#9700ff", marginRight: "12px" }} />
                                <p>Verified email, compensation range, and lead source information</p>
                            </div>
                            <div class="pricingTextIcon">
                                <CheckCircleIcon sx={{ color: "#9700ff", marginRight: "12px" }} />
                                <p>New leads added weekly.</p>
                            </div>
                        </div>
                        <a class="freeSignUpButton" href="https://buy.stripe.com/7sI6qA7D80kK5i0bIJ" target="_blank">Subscribe</a>
                    </div>
                </div>
            </div>

            <span className={classes.scrollToContact} id="contactForm"></span>
            {/* <div className="signupWrapper">
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

            </div> */}

        </div>
    )
}

export default Main
