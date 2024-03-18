import React from "react"
import Layout from "../components/layout"
import { makeStyles } from '@material-ui/core/styles'
import { Helmet } from "react-helmet";


const withStyles = makeStyles((theme) => ({
    thankYouRoot: {
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
        justifyContent: "flex-start"
    },
    thankYouMessage: {
        display: "flex",
        fontSize: "2.0rem",
        marginLeft: "auto",
        marginRight: "auto"
    },
    thankYouMessageWrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginTop: "110px"
    }

}));

const FreeSignUpPage = () => {
    const classes = withStyles();
    return (
        <Layout showContact={false}>
            <div className={classes.thankYouRoot}>
                <div className={classes.thankYouMessageWrapper}>
                    <div className="signupWrapper">
                        <p class="signUpText">Get access to free leads, instantly, by signing up below.</p>
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
            </div>
        </Layout>
    )
}

export default FreeSignUpPage