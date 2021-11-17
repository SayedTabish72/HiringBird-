import React from "react";
import { Data } from "./styles/ListCard.styled";

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
              {(() => {
                if (activeInternship.compensation == true) {
                  return (
                    <>
                      <h3>
                        {activeInternship.minStipen} -{" "}
                        {activeInternship.maxStipen} INR
                      </h3>
                    </>
                  );
                } else if (activeInternship.compensation == false);
                {
                  return (
                    <>
                      <h3>Unpaid</h3>
                    </>
                  );
                }
              })()}
            </div>
            <div className="wrap">
              {(() => {
                if (activeInternship.internshipType == "workfromhome") {
                  return (
                    <>
                      <h5>Internship Type</h5> <h3>Work From Home</h3>
                    </>
                  );
                } else if (activeInternship.internshipType == "onsite");
                {
                  return (
                    <>
                      <h5>Internship Type</h5>{" "}
                      <h3>Onsite - {activeInternship.location}</h3>
                    </>
                  );
                }
              })()}
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
                <h3>
                  {new Date(activeInternship.startDate).toLocaleDateString(
                    "en-GB"
                  )}
                </h3>
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
              {activeInternship.skills.map((data) => {
                return <p key={data}>{data}</p>;
              })}
            </div>
          </div>

          <div className="common-container">
            <h1>About {activeInternship.companyName}</h1>
            <p>{activeInternship.aboutCompany}</p>
          </div>

          <div className="common-container">
            <h1>Job Description</h1>
            <p>{activeInternship.jobDescription}</p>
          </div>

          <div className="common-container">
            <h1>Selected interns day-to-day responsibilities include:</h1>
            <p>
              <ul>
                {activeInternship.responsibilities.map((data) => {
                  return <li key={data}>{data}</li>;
                })}
              </ul>
            </p>
          </div>

          <div className="common-container">
            <h1>Perks: </h1>
            <p>
              <ul>
                {activeInternship.perks.map((data) => {
                  return <li key={data}>{data}</li>;
                })}
              </ul>
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
