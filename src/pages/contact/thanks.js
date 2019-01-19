import React from "react";
import { navigate } from "gatsby"
import Layout from '../../components/Layout'

export default () => (
  <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
                <h1>Thank you for contacting The Meshel Law Group!</h1>
                <p>We will respond to your inquiry shortly.</p>
                {setTimeout(()=>{
                    navigate('/')
                    // Add your logic for the transition
                  }, 5000);
              }
            </div>
          </div>
          </section>
  </Layout>
);
