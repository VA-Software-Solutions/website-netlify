import * as React from "react";
import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };

  render() {
    return (
      <Layout>
        <div class="hero-slider  hero-slider-1" id="slider">
          <div class="single-slide small-header" style={{
            'background-image': "url(/img/slider/slider-03.png)"
          }}>
            <div class="hero-content-one container">
              <div class="row">
                <div class="col-lg-12">
                  <div class="slider-text-info text-white text-center">
                    <h4>Are you ready to move forward?</h4>
                    <h1>Contact us</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="section-pt section-pb-70">
            <h1 class="mb-5" style={{textAlign: "center"}}>Let's start a conversation</h1>
            <div class="row">
              <div class="col-lg-6 col-12 p-3">
                <h4 class="mb-5">Ask how we can help you:</h4>
                <h5>Application development</h5>
                <p class="mb-3">You have an idea? We can help you build your next software with dedicated teams on demand.</p>
                <h5>Development teams</h5>
                <p class="mb-3">Your workflow has increased? We can help you with experts on demand.</p>
                <h5>Quality Assurance</h5>
                <p class="mb-5">We can help you with QA experts for an existing projects. We can create documentation and test strategy</p>
              </div>
              <div class="col-lg-6 col-12 p-3">
                <form
                  name="contact"
                  method="post"
                  action="/contact/thanks/"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={this.handleSubmit}
                >
                  {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                  <input type="hidden" name="form-name" value="contact" />
                  <div hidden>
                    <label>
                      Don’t fill this out:{" "}
                      <input name="bot-field" onChange={this.handleChange} />
                    </label>
                  </div>
                  <div className="form-group">
                    <label className="label" htmlFor={"name"}>
                      Your name
                    </label>
                      <input
                        className="form-control"
                        type={"text"}
                        name={"name"}
                        onChange={this.handleChange}
                        id={"name"}
                        required={true}
                      />
                  </div>
                  <div className="form-group">
                    <label className="label" htmlFor={"email"}>
                      Email
                    </label>
                      <input
                        className="form-control"
                        type={"email"}
                        name={"email"}
                        onChange={this.handleChange}
                        id={"email"}
                        required={true}
                      />
                  </div>
                  <div className="form-group">
                    <label className="label" htmlFor={"message"}>
                      Message
                    </label>
                      <textarea
                        className="form-control"
                        name={"message"}
                        onChange={this.handleChange}
                        id={"message"}
                        required={true}
                      />
                  </div>
                  <div className="field">
                    <button className="btn btn-success is-link" type="submit">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
