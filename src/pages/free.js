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
                        <form method="post" action="https://sendfox.com/form/1vowyd/1gw556" class="sendfox-form" id="1gw556" data-async="true" data-recaptcha="true">
                            <p><label for="sendfox_form_email">Email: </label><input type="email" id="sendfox_form_email" placeholder="Email" name="email" required /></p>
                            <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true"><input type="text" name="a_password" tabindex="-1" value="" autocomplete="off" /></div>
                            <p><button type="submit">Sign Up</button></p>
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