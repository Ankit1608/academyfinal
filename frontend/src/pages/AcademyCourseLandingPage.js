import React, { Component } from "react";
import MediaQuery from "react-responsive";
import { Link } from "react-router-dom";
import Pathcard from "./components/Pathcard";
import CourseComponent from "./components/CourseComponent";
import AcademyNavbar from "./components/AcademyNavbar";
import Smallfooter from "./components/Smallfooter";
import Particle from "./particle";

import { coursecarddetails, pathcarddetails } from "../graphql/gql";
import { useQuery } from "@apollo/react-hooks";

import circle1 from "./images/academyicon1.png";
import circle2 from "./images/academyicon2.png";
import circle3 from "./images/academyicon3.png";

import "./AcademyCourseLandingPage.css";

function AcademyCourseLandingPage() {
  const { data: courseCardData, loading: courseCardLoading } = useQuery(
    coursecarddetails
  );

  const { data: pathCardData, loading: pathCardLoading } = useQuery(
    pathcarddetails
  );

  let renderListing2 = [];
  if (courseCardData) {
    let temp2 = [];
    for (let i = 0; i < courseCardData.findall.length; i++) {
      if (i % 2 === 0 && i > 0) {
        renderListing2.push(temp2);
        temp2 = [];
      }
      temp2.push(courseCardData.findall[i]);
    }
    if (temp2.length !== 0) {
      renderListing2.push(temp2);
      temp2 = [];
    }
  }
  return (
    <>
      <AcademyNavbar />
      <div className="wrap">
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
      </div>
      <div className="academy-landing-maincontainer">
        <div className="academy-landing-container">
          <div className="academy-login-container">
            <h1 className="academy-login-header">Cyber Security Training</h1>
            <p className="academy-login-text">
              You are at the rightplace to learn. We make it easier for your
              Cyber Security journey.{" "}
            </p>
            <div style={{ textAlign: "center" }}>
              <Link to="/joinnow" style={{ textDecoration: "none" }}>
                <h7 className="academy-signup-container">Sign Up</h7>
              </Link>
            </div>
          </div>
        </div>
        <div className="academy-des">
          <div className="academy-des-container">
            <img className="academy-des-circle-img" src={circle1} />
            <div className="academy-des-textcontainer">
              <p className="academy-des-heading">Exclusive </p>
              <p className="academy-des-text">Learning Paths</p>
            </div>
          </div>
          <div className="academy-des-container">
            <img className="academy-des-circle-img" src={circle2} />
            <div className="academy-des-textcontainer">
              <p className="academy-des-heading">Real-Time</p>
              <p className="academy-des-text">Courses</p>
            </div>
          </div>
          <div className="academy-des-container">
            <img className="academy-des-circle-img" src={circle3} />
            <div className="academy-des-textcontainer">
              <p className="academy-des-heading">Wide Range</p>
              <p className="academy-des-text">of Challenges</p>
            </div>
          </div>
        </div>
        <div id="academy-particlestars">
          <Particle />
        </div>
        <div
          style={{
            position: "relative",
          }}
        >
          <div>
            <p className="academy-courses-heading">Cyber Security Courses</p>

            {courseCardLoading && <div>Loading...</div>}
            <MediaQuery minWidth={741}>
              {courseCardData &&
                renderListing2 &&
                renderListing2 !== [] &&
                renderListing2.map((item) => {
                  console.log(item);
                  return (
                    <>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent:
                            item.length === 1 ? "center" : "space-evenly",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <CourseComponent
                            title1={item[0].course_name1}
                            title2={item[0].course_name2}
                            courseheading={item[0].subtitle}
                            coursetext={item[0].description}
                            course_id={item[0].id}
                            flag={false}
                          />
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          {item.length === 2 && (
                            <CourseComponent
                              title1={item[1].course_name1}
                              title2={item[1].course_name2}
                              courseheading={item[1].subtitle}
                              coursetext={item[1].description}
                              course_id={item[1].id}
                              flag={false}
                            />
                          )}
                        </div>
                      </div>
                    </>
                  );
                })}
            </MediaQuery>
            <MediaQuery maxWidth={740}>
              {courseCardData &&
                courseCardData.findall.map((item) => (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <CourseComponent
                      title1={item.course_name1}
                      title2={item.course_name2}
                      courseheading={item.subtitle}
                      coursetext={item.description}
                      course_id={item.id}
                      flag={false}
                    />
                  </div>
                ))}
              <></>
            </MediaQuery>
            <div className="academy-explore-container">
              <div style={{ cursor: "pointer", zIndex: 10 }}>
                <p>
                  Explore more <span style={{ color: "#ff4d14" }}>courses</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="academy-paths-container">
          <p className="academy-path-heading">Cyber Security Paths</p>
          {pathCardData &&
            pathCardData.findallpaths.map((item) => {
              return (
                <div className="academy-pathcard-container">
                  <Pathcard
                    path_id={item.id}
                    title1={item.path_title1}
                    title2={item.path_title2}
                    courses={item.courses}
                    content={item.description}
                  />
                </div>
              );
            })}
        </div>
      </div>

      <Smallfooter />
    </>
  );
}

export default AcademyCourseLandingPage;

/*
{this.props.coursecarddetails.map((item) => {
                    return (
                      <CourseComponent
                        title1={item.course_name1}
                        title2={item.course_name2}
                        courseheading={item.subtitle}
                        coursetext={item.description}
                        flag={true}
                      />
                    );
                  })}






                  async fetchdata() {
    var data = await this.props.coursecarddetails;
    if (data.loading) {
      return <div>loading</div>;
    } else {
      return Object.Keys(data.findall).map((item, i) => {
        return (
          <CourseComponent
            title1={data.findall[item].course_name1}
            title2={data.findall[item].course_name2}
            courseheading={data.findall[item].subtitle}
            coursetext={data.findall[item].description}
            flag={true}
            key={i}
          />
        );
      });
    }
  }

                  */
