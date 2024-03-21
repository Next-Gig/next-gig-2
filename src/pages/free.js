import React, {useRef, useEffect} from "react"
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

    const myRef = useRef();
    useEffect(() => {
      const script = document.createElement('script');
  
      script.src =
        'https://eocampaign1.com/form/cb6cda3e-e745-11ee-b56e-d77097cf10de.js';
      script.async = true;
      script.setAttribute('data-form', 'cb6cda3e-e745-11ee-b56e-d77097cf10de');
  
      const myRefNode = myRef.current
      myRefNode.appendChild(script);
  
      return () => {
        const nodes = document.querySelectorAll(`[data-form="cb6cda3e-e745-11ee-b56e-d77097cf10de"]`);
        nodes.forEach(function (node) {
          node.parentNode.removeChild(node);
        });
      };
    }, []);
    return (
        <Layout showContact={false}>
            <div className={classes.thankYouRoot}>
                <div className={classes.thankYouMessageWrapper}>
                    <div className="signupWrapper">

                        <p class="signUpText">Subscribe and instantly get access to free leads</p>
                        <div ref={myRef}></div>
                        {/* <form method="post" action="https://sendfox.com/form/1vowyd/1gw556" class="sendfox-form" id="1gw556" data-async="true" data-recaptcha="true">
                            <p><label for="sendfox_form_email"></label>
                            <input className="emailInput" type="email" id="sendfox_form_email" placeholder="Email" name="email" required />
                            </p>
                            <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true"><input type="text" name="a_password" tabindex="-1" value="" autocomplete="off" /></div>
                            <p><button className="submitEmailButton" type="submit">Sign Up</button></p>
                        </form>  */}


                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default FreeSignUpPage