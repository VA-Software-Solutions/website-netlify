import * as React from "react";
import Layout from "../../components/Layout";
import CareerRoll from "../../components/CareerRoll";

export default class CareersIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div class="hero-slider hero-slider-1 " id="slider">
        <div class="single-slide small-header">
                  <div class="hero-content-one container">
                <div class="row">
                    <div class="col-lg-12"> 
                        <div class="slider-text-info text-center">
                            <h1>We are hiring<br/>
                            <span>View all open positions</span>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <CareerRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
