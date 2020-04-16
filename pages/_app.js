import React,{Component} from "react";
import { Provider } from "react-redux";
import Head from "next/head";
import withRedux from "next-redux-wrapper";
import App from "next/app";
import Footer from "../component/Footer";
import Headermain from "../component/Headermain";

import store from "../redux/store";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};
    return {
        pageProps: pageProps,
        
    };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    

    return (
      <Provider store={store}>
        <Head>
          <title>Home</title>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"/>>
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
          
          </Head>
        <div>
        
        <Headermain />
        
        
        <div className="base-page">
          <Component {...pageProps} />
        </div>
        <Footer/>
        
        </div>
        <style jsx>
          {`
            .base-page {
              padding-top: 70px;
            }
          `}
        </style>
        </Provider>
    );
  }
}


const makeStore = () => store;
export default withRedux(makeStore)(MyApp);