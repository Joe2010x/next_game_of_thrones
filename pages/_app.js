import '../styles/globals.css'
import Layout from '../components/Layout';
import { AppWrapper } from '../context/state';
import AppContext from '../context/AppContext';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [userContext, setUserContext] =useState({
    name: "Guest",
    loggedIn: false
})
  return (
    <AppContext.Provider 
      value={{userContext,setUserContext}}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  )

}

export default MyApp
