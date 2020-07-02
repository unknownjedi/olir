import React from "react"
import Layout from "../components/layout"
import "../assets/scss/app.scss"
import Footer from "../components/footer"

import { css } from "@emotion/core"
import ServicesIntro from "../components/ServicesIntro"
import ServicesContent from "../components/ServicesContent"

export default () => {
  return (
    <Layout>
      <ServicesIntro />
      <ServicesContent contentIndex={2} />
      <Footer />
    </Layout>
  )
}
