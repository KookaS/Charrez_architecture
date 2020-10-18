import React, {Component} from "react";
import Head from "next/head";
import NavBar from "@components/global/navBar";
import {MainPadding} from "@components/global/mainPadding";
import {scrollbar} from "@components/global/scrollbar";

const App = ({Component, pageProps}) => {
    return (
        <>
            <Head>
                <title>{Component.title}</title>
                <meta property="og:title" content={Component.title} key="title"/>
            </Head>

            <NavBar currentPage={Component.title}/>
            <MainPadding>
                <Component {...pageProps} />
            </MainPadding>

            <style jsx global>{`
                        ${scrollbar}
                        body {
                            margin: 0;
                            font-family: Roboto;
                            background: white;
                            color: rgb(20, 20, 20);
                            
                            font-size: 16px; 
                            font-style: normal; 
                            font-variant: normal; 
                            font-weight: 400; 
                            line-height: 35px;         
                            overflow-x: hidden;               
                        }
                    `}
            </style>
        </>
    );
};

export default App;