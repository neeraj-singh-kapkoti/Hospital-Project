import React from "react";
import "./Ask.css";

function Ask() {
  return (
    <div class="container">
      <div class="page-header">
        <h1>
          FAQ <small> Frequently Asked Questions relatd to COVID 19</small>
        </h1>
      </div>

      <div class="container">
        <br />
        <br />
        <br />

        <div class="alert alert-warning alert-dismissible" role="alert">
          <button type="button" class="close" data-dismiss="alert">
            <span aria-hidden="true">&times;</span>
            <span class="sr-only">Close</span>
          </button>
          This section contains a information, related to <strong>FAQ</strong> .
          If you cannot find an answer to your question, make sure to ask in
          feedback.
        </div>

        <br />

        <div class="panel-group" id="accordion">
          <div class="faqHeader">General questions</div>
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4 class="panel-title">
                <a
                  class="accordion-toggle"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseOne"
                >
                  1. Where can I register for COVID-19 vaccination?
                </a>
              </h4>
            </div>
            <div id="collapseOne" class="panel-collapse collapse in">
              <div class="panel-body">
                You can log into the Co-WIN portal using the link
                www.cowin.gov.in and click on the “Register/Sign In Yourself”
                tab to register for COVID-19 vaccination.
              </div>
            </div>
          </div>
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4 class="panel-title">
                <a
                  class="accordion-toggle collapsed"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseTen"
                >
                  2. Is there a mobile app that needs to be installed to
                  register for vaccination?
                </a>
              </h4>
            </div>
            <div id="collapseTen" class="panel-collapse collapse">
              <div class="panel-body">
                There is no authorised mobile app for registering for
                vaccination in India. You need to log into the Co-WIN portal.
                You can also register for vaccination through the ArogyaSetu
                App.
              </div>
            </div>
          </div>
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4 class="panel-title">
                <a
                  class="accordion-toggle collapsed"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseEleven"
                >
                  3. Is online registration mandatory for online registration?
                </a>
              </h4>
            </div>
            <div id="collapseEleven" class="panel-collapse collapse">
              <div class="panel-body">
                Yes, Vaccination is only with confirmed appointment on the CoWin
                website.<strong>USD</strong>
              </div>
            </div>
          </div>
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4 class="panel-title">
                <a
                  class="accordion-toggle collapsed"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseTwo"
                >
                  4.How many people can be registered in the Co-WIN portal
                  through one mobile number?
                </a>
              </h4>
            </div>
            <div id="collapseTwo" class="panel-collapse collapse">
              <div class="panel-body">
                Up to 4 people can be registered for vaccination using the same
                mobile number.{" "}
              </div>
            </div>
          </div>
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4 class="panel-title">
                <a
                  class="accordion-toggle collapsed"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseThree"
                >
                  5.Can I register for vaccination without Aadhar card?
                </a>
              </h4>
            </div>
            <div id="collapseThree" class="panel-collapse collapse">
              <div class="panel-body">
                Yes, you can register for Co-WIN portal using any of the
                following ID proofs:
                <ul>
                  <li>Aadhaar card</li>
                  <li>Driving License</li>
                  <li>PAN card</li>
                  <li>Passport</li>
                  <li>Pension Passbook</li>
                  <li>NPR Smart Card</li>
                  <li>Voter ID Card (EPIC)</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4 class="panel-title">
                <a
                  class="accordion-toggle collapsed"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseFive"
                >
                  6. Is there any registration charges to be paid?
                </a>
              </h4>
            </div>
            <div id="collapseFive" class="panel-collapse collapse">
              <div class="panel-body">
                No, there is no registration charge. <br />
              </div>
            </div>
          </div>
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4 class="panel-title">
                <a
                  class="accordion-toggle collapsed"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseSix"
                >
                  7. Is it necessary for a COVID recovered person to take the
                  Vaccine??
                </a>
              </h4>
            </div>
            <div id="collapseSix" class="panel-collapse collapse">
              <div class="panel-body">
                It is advisable to receive the complete schedule of the COVID
                vaccine irrespective of past history of infection. This will
                help develop better immune response against the disease.
              </div>
            </div>
          </div>
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4 class="panel-title">
                <a
                  class="accordion-toggle collapsed"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseEight"
                >
                  8. Which COVID vaccines will be available to the eligible
                  people? Can I choose which vaccine to take?
                </a>
              </h4>
            </div>
            <div id="collapseEight" class="panel-collapse collapse">
              <div class="panel-body">
                Presently, Covishield and Covaxin are the two types of vaccine
                available in India. You will get one of these two vaccines but
                cannot choose the vaccine that you would like to take. Which
                vaccine will be given to you, will be decided by the vaccine
                provider according to allocation. During online registration
                also, vaccine option will not be given.
              </div>
            </div>
          </div>
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4 class="panel-title">
                <a
                  class="accordion-toggle collapsed"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseNine"
                >
                  9. How many doses of vaccine do I have to take?
                </a>
              </h4>
            </div>
            <div id="collapseNine" class="panel-collapse collapse">
              <div class="panel-body">
                It is recommended that the 2nd dose of COVAXIN should be
                administered in the interval of 4 to 6 weeks from the date of
                1st dose administration. For COVISHIELD the recommended interval
                is 4 to 8 weeks. You may choose the date of 2nd dose vaccination
                as per your convenience.{" "}
              </div>
            </div>
          </div>
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4 class="panel-title">
                <a
                  class="accordion-toggle collapsed"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseFour"
                >
                  10. Where can I get the Vaccine from?
                </a>
              </h4>
            </div>
            <div id="collapseFour" class="panel-collapse collapse">
              <div class="panel-body">
                Vaccine will be available from Government Private Health
                Facilities as notified These will be known as COVID Vaccination
                Centres (CVC).
              </div>
            </div>
          </div>
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4 class="panel-title">
                <a
                  class="accordion-toggle collapsed"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseSeven"
                >
                  11. Do I have to register myself to get the vaccine?
                </a>
              </h4>
            </div>
            <div id="collapseSeven" class="panel-collapse collapse">
              <div class="panel-body">
                Yes, registration is required for COVID Vaccination.
                <ul>
                  <li>
                    You can either pre-register yourself online and get an
                    appointment for vaccination
                  </li>
                  <li>
                    Register yourself on-the-spot, get the appointment and get
                    vaccinated on the same day.
                  </li>
                  <li>
                    For those who have already received the 1 st dose and due
                    for the second dose, slots will be automatically reserved in
                    the CoWIN App and there is no need for registering again.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ask;
