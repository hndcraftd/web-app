import React from 'react';
import Layout from '../components/Layout';

import "../scss/pages/home.scss"

export default function Home() {
  
  return (
    <Layout shouldShowSidebar={false}>
      <div className="header d-flex justify-content-center">
        <div className="container d-flex justify-content-center flex-column align-items-center">
          <h1 className="display-3">Build transparent customer products.</h1>
            <p className="lead">
              Connect with clients, develop a more distinguishable brand and optimize your business's performance
            </p>
        </div>
      </div>
    </Layout>
  );
}
