import React from 'react';
import ChatWidget from '@papercups-io/chat-widget'
import { StaticQuery, graphql } from 'gatsby'
import Header from "../components/header"
import Footer from "../components/footer"
import Provider from "../context/provider"
import "./layout.sass"


const Layout = ({ children }) => {
    
    return (
        <>
            <Provider>
                <StaticQuery
                    query={graphql`
                    query SiteTitleQuery {
                    site {
                        siteMetadata {
                        title
                        }
                    }
                    }
                `}
                    render={data => (
                        <>
                            <Header siteTitle={data.site.siteMetadata.title} />
                            {children}
                            <Footer />
                        </>
                    )}
                />
            </Provider>
            <ChatWidget
                title='Welcome to Dev9ine'
                subtitle= 'Ask us anything in the chat window below 😊'
                primaryColor='#1890ff'
                greeting=''
                newMessagePlaceholder='Start typing...'
                accountId=''
                baseUrl='https://app.papercups.io'
            />
        </>
    );
};

export default Layout;

