import React from "react"
import Layout from "../components/layout"
import "../assets/scss/app.scss"
import Footer from "../components/footer"

import { css } from "@emotion/core"
import ProjectsIntro from "../components/ProjectsIntro"
import ServicesContent from "../components/ServicesContent"

export default () => {
  return (
    <Layout>
      <ProjectsIntro />
      <ServicesContent />
      <Footer />
    </Layout>
  )
}
