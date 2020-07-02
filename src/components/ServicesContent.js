import React from "react"
import SectionIndicator from "../reusables/sectionindicator"
import WhyUsTitle from "../reusables/whyustitle"
import styled from "@emotion/styled"
import { cssVariables } from "../helpers/colors"
import ServicesList from "../content/services"

const ContentContainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 15px;
  .container {
    display: flex;
    @media (max-width: 992px) {
      flex-direction: column;
    }
    .img-placeholder {
      margin-bottom: 30px;
      @media (max-width: 992px) {
        text-align: center;
      }
      img {
        max-height: 230px;
        width: auto;
      }
    }
    .content {
      font-family: ${cssVariables.$montserrat_bold};
      line-height: 2;
      margin-left: 50px;
      @media (max-width: 992px) {
        margin-left: 0;
      }
    }
  }
  .works-container {
    margin-top: 50px;
    h2 {
      font-family: ${cssVariables.$josefin};
      font-weight: 400;
      font-size: 30px;
    }
    .works-images {
      display: flex;
      justify-content: space-evenly;
      margin: 30px 0 60px;
      .work-dummy {
        width: 300px;
        height: 300px;
        background-color: ${cssVariables.$color_primary_black_1};
      }
    }
  }
`

function ServicesContent({ contentIndex }) {
  return (
    <div>
      <ContentContainer>
        <SectionIndicator
          text={contentIndex ? ServicesList[contentIndex].title : "Project 1"}
        />
        {contentIndex ? <WhyUsTitle /> : null}

        {contentIndex ? (
          <>
            <div className="container">
              <div
                className="wow bounceInLeft animated img-placeholder"
                data-wow-duration="1.5s"
                // data-wow-delays="0.25s"
              >
                <img src={ServicesList[contentIndex].image} />
              </div>
              <p
                className="wow bounceInRight animated content"
                data-wow-duration="1.5s"
                // data-wow-delays="0.25s"
              >
                {ServicesList[contentIndex].description.map(
                  (description, index) => (
                    <React.Fragment key={index}>
                      {description}
                      <br />
                    </React.Fragment>
                  )
                )}
              </p>
            </div>
            <div className="works-container">
              <h2
                className="wow bounceInLeft animated"
                data-wow-duration="1.5s"
                // data-wow-delays="0.25s"
              >
                Works
              </h2>
              <div
                className="wow bounceInRight animated works-images"
                data-wow-duration="1.5s"
                // data-wow-delays="0.25s"
              >
                {[1, 2, 3].map((work, index) => (
                  <div key={index} className="work-dummy" />
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="container" style={{ flexDirection: "column" }}>
            <div className="projects-black-placeholder" />
            <p
              className="wow bounceInRight animated content"
              data-wow-duration="1.5s"
              style={{ marginLeft: 0, marginTop: "30px" }}
            >
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32. The
              standard chunk of Lorem Ipsum used since the 1500s is reproduced
              below for those interested. Sections 1.10.32 and 1.10.33 from "de
              Finibus Bonorum et Malorum" by Cicero are also reproduced in their
              exact original form, accompanied by English versions from the 1914
              translation by H. Rackham.
            </p>
          </div>
        )}
      </ContentContainer>
    </div>
  )
}

export default ServicesContent
