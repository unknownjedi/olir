import React from "react"
import SectionIndicator from "../reusables/sectionindicator"
import styled from "@emotion/styled"
import { cssVariables } from "../helpers/colors"
import { Formik, Field } from "formik"
import * as Yup from "yup"
import { ContactInput } from "../styled/StyledComponents"

const ContentContainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 15px;
  .container {
    display: flex;
    p {
      font-family: ${cssVariables.$montserrat_bold};
      font-size: 22px;
      line-height: 2.5;
      word-spacing: 7px;
    }
    form {
      max-width: 100%;
    }
    .action-container {
      display: flex;
      justify-content: flex-end;
      padding: 20px 0;
      .action-btn {
        background-color: ${cssVariables.$color_primary_black_1};
        width: 75px;
        height: 75px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${cssVariables.$color_primary_white};
        border-radius: 50%;
        font-family: ${cssVariables.$montserrat_bold};
        font-size: 16px;
        cursor: pointer;
        outline: none;
      }
    }
  }
`

const ContactSchema = Yup.object().shape({
  purpose: Yup.string().required(),
  phone: Yup.string().required(),
  email: Yup.string()
    .trim()
    .email("Enter a valid email")
    .required("Email is Required."),
  name: Yup.string().required(),
})

function ContactContent() {
  return (
    <div>
      <ContentContainer>
        <SectionIndicator text="Let us know" />
        <div className="container">
          <Formik
            onSubmit={values => {
              console.log(values)
            }}
            initialValues={{
              purpose: "",
              email: "",
              phone: "",
              name: "",
            }}
            validationSchema={ContactSchema}
            enableReinitialize
          >
            {({ handleSubmit, touched, errors }) => (
              <form onSubmit={handleSubmit}>
                <p>
                  Hello there, I'd like to talk to you guys about{" "}
                  <Field
                    name="purpose"
                    render={({ field }) => (
                      <ContactInput
                        small
                        error={touched.purpose && errors.purpose}
                        {...field}
                      />
                    )}
                  />
                  , reach me on my{" "}
                  <Field
                    name="phone"
                    render={({ field }) => (
                      <ContactInput
                        small
                        error={touched.phone && errors.phone}
                        {...field}
                      />
                    )}
                  />{" "}
                  or drop me an email at{" "}
                  <Field
                    name="email"
                    render={({ field }) => (
                      <ContactInput
                        error={touched.email && errors.email}
                        {...field}
                      />
                    )}
                  />
                  .
                  <br />
                  Cheers,{" "}
                  <Field
                    name="name"
                    render={({ field }) => (
                      <ContactInput
                        error={touched.name && errors.name}
                        {...field}
                      />
                    )}
                  />
                  .
                </p>
                <div className="action-container">
                  <button className="action-btn" type="submit">
                    Send
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </ContentContainer>
    </div>
  )
}

export default ContactContent
