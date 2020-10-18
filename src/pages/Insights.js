import React from "react";
import Layout from "../components/Layout";
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

export default function Insights() {
  return (
     <Layout shouldShowHeader={false}>
        <div className="container d-flex">
          <div class="row" style={{width: "100%"}}>
            <div class="col-xl-4">
              <div class="card">
                <div class="card-body">
                  <h2 class="card-title">{<LocalShippingIcon />} Orders</h2>
                  <hr/>
                  <h5 class="card-text">25</h5>
                </div>
              </div>
            </div>
            <div class="col-xl-4">
              <div class="card">
                <div class="card-body">
                  <h2 class="card-title">{<AttachMoneyIcon />} Revenue</h2>
                  <hr/>
                  <h5 class="card-text">$3,425</h5>
                </div>
              </div>
            </div>
            <div class="col-xl-4">
              <div class="card"> 
                <div class="card-body">
                  <h2 class="card-title">{<LocalShippingIcon />} Orders</h2>
                  <hr/>
                  <h5 class="card-text">25</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
    </Layout>
  );
}
