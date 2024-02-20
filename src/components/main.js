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
                    <p class="landingHeader">Find your next gig. <span class="highlightText">Faster.</span></p>
                    <p class="landingSubheader">Real people. Real leads. Ready to hire.</p>
                    {/* <p class="landingSubtext">The traditional job search process is broken. Connections land jobs, not endless applications.</p> */}
                </div>

            </div>

            <section class="sectionWrapper">
                <span className={classes.scrollToSectionOne} id="sectionOne"></span>
                <h1 class="jobHeader">The traditional job search process is broken.</h1>
                <h2>Connections land jobs, not endless applications.</h2>
            </section>
            <div className={classes.container}>
                <span className={classes.scrollToSectionOne} id="sectionTwo"></span>
                <div class="howItWorksWrapper">
                    <h1>How it works</h1>
                    <div class="howItWorksCardsWrapper">
                        <div class="howItWorksCard">
                            <h3>Sign Up</h3>

                        </div>
                        <div class="howItWorksCard">
                            <h3>Get the list</h3>
                        </div>
                        <div class="howItWorksCard">
                            <h3>Connect</h3>

                        </div>
                    </div>

                </div>
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
