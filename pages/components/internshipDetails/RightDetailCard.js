import React from "react";

function RightDetailCard({ activeInternship }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <div className="content">
        <div className="content_head">
          <div className="left">
            <h2>{activeInternship.jobName}</h2>
            <div className="flex">
              <h4>{activeInternship.companyName}</h4>
              <a href="#">
                <img src="/link-icon.svg" alt="link" />
                www.skilzen.com
              </a>
            </div>
            <div className="flex">
              <p>2 Days ago</p>
              <p>{activeInternship.numberOfApplicants} Applicants applied</p>
            </div>
          </div>
          <div className="right">
            <img src="/skilzen-logo.png" alt="skilzen" />
            <span>#HB4321</span>
          </div>
        </div>

        {/* desc */}
        <div className="content_desc">
          <div className="top">
            <div className="wrap">
              <h5>
                Stipend <img src="/stipend.svg" />{" "}
              </h5>
              <h3>
                {activeInternship.minStipen} - {activeInternship.maxStipen}
              </h3>
            </div>
            <div className="wrap">
              <h5>
                Internship type <img src="/wfhome.svg" />
              </h5>
              <h3>Work From Home</h3>
            </div>
            <div className="wrap">
              <h5>Number of openings</h5>
              <h3>2</h3>
            </div>
            <div className="wrapContainer">
              <div className="wrap">
                <h5>
                  Duration <img src="/calendar.svg" alt="calendar" />
                </h5>
                <h3>{activeInternship.internshipPeriod} Months</h3>
              </div>
              <div className="wrap">
                <h5>
                  Start date <img src="/start-date.svg" alt="start-date" />
                </h5>
                <h3>2 June 2021</h3>
              </div>
              <div className="wrap">
                <h5>
                  Apply By <img src="/calendar.svg" alt="calendar" />
                </h5>
                <h3>
                  {new Date(activeInternship.applyBy).toLocaleDateString(
                    "en-GB"
                  )}
                </h3>
              </div>
            </div>
          </div>
          <div className="bottom">
            <button>Apply Now</button>
            <div className="share">
              <img src="/whatsapp-gray.svg" alt="whatsapp" />
              <p>Share</p>
            </div>
          </div>
        </div>

        {/* detailed desc */}
        <div className="content_detailedDesc">
          <div className="common-container">
            <h1>Skills(s) Required</h1>
            <div className="childrens">
              <p>User Research</p>
              <p>Wireframing</p>
              <p>Sketch</p>
              <p>Figma</p>
            </div>
          </div>

          <div className="common-container">
            <h1>About Skilzen</h1>
            <p>
              Designers are responsible for the design of digitally-enabled
              products and services. They use their broad skillset across the
              service, interaction, and visual design domains to work on
              holistic design solutions, from early-stage idea generation until
              detailed design of service features and user stories in a digital
              product.
            </p>
          </div>

          <div className="common-container">
            <h1>Job Description</h1>
            <p>
              Designers are responsible for the design of digitally-enabled
              products and services. They use their broad skillset across the
              service, interaction, and visual design domains to work on
              holistic design solutions, from early-stage idea generation until
              detailed design of service features and user stories in a digital
              product.
            </p>
          </div>

          <div className="common-container">
            <h1>Selected interns day-to-day responsibilities include:</h1>
            <p>
              1. Preparing and presenting designs, wireframes, and prototypes to
              internal teams and key stakeholders <br /> 2. Developing
              interaction flows, UI mockups, and low-fidelity prototypes <br />{" "}
              3. Since we are undergoing a website overhaul, you will contribute
              to designing our website pages <br /> 4. Developing an
              understanding of the end-users through secondary and primary
              researc <br /> 5. Conduct testing of applications, websites, and
              software to assess user experience <br /> 6. Identifying and
              troubleshooting UX problems <br /> 7. Creating infographics and
              other such collateral to present our clients.
            </p>
          </div>

          <div className="common-container">
            <h1>Who can Apply:</h1>
            <p>
              1. Have already graduated or are currently in any year of study{" "}
              <br />
              2. Have relevant skills and interests <br /> 3. Are available for
              a duration of at least 3 months <br /> 4. Are available for the
              work from home internship
            </p>
          </div>

          <div className="bottom">
            <button>Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightDetailCard;
