import React from "react";
import { Widget } from '@typeform/embed-react'

const ContactSection = () => {
  return (
    <div class="contact-area bg-grey section-ptb">
      <div class="container">
        <div class="row no-gutters align-items-center">
          <div class="col-lg-6">
            <div class="contact-information">
              <div class="contact-info">
                <div class="contact-title">
                  <h2>Contact <span>us</span></h2>
                  <p>Ready to start your next project with us? Give us a call or send us an email and we will get back to you!</p>
                </div>
                <div class="contact-address">
                  <ul>
                    <li>
                      <i class="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </i>

                      <span class="information">+44 118 228 0486</span>
                    </li>
                    <li>
                      <i class="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </i>
                      <span class="information">
                        <a href="#">hi@vasoftware.co.uk</a>
                      </span>
                    </li>
                    <li>
                      <i class="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </i>{" "}
                      <span class="information">Reading, United Kingdom</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 contact-form-container">
            <Widget id="roLYcysV" style={{ width:'100%', height: '550px' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
