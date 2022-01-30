
import Head from "next/head";   
import { ApolloProvider } from "@apollo/react-hooks";  
import withData from "../utils/apollo";

const App = ({ Component, pageProps, apollo }) => { 

  return (
    <ApolloProvider client={apollo}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;700&family=Roboto:wght@400;500;700&display=swap"/>
        
        <link rel="stylesheet" type="text/css" href="/assets/vendor/font-awesome/css/all.min.css"/>
        <link rel="stylesheet" type="text/css" href="/assets/vendor/bootstrap-icons/bootstrap-icons.css"/>
        <link rel="stylesheet" type="text/css" href="/assets/vendor/glightbox/css/glightbox.css"/>

        <link id="style-switch" rel="stylesheet" type="text/css" href="/assets/css/style.css"/>
    		<script src="/assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js"></script>

    		<script src="/assets/vendor/isotope/isotope.pkgd.min.js"></script>
    		<script src="/assets/vendor/imagesLoaded/imagesloaded.js"></script>

    		<script src="/assets/js/functions.js"></script>

      </Head>
      <Component {...pageProps} />
    </ApolloProvider>
  )
};

export default withData(App);