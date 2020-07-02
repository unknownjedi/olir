import React from "react"
import Layout from "../components/layout"
import "../assets/scss/app.scss"
import Footer from "../components/footer"
import ServicesIntro from "../components/ServicesIntro"
import ServicesContent from "../components/ServicesContent"
import ContactIntro from "../components/ContactIntro"
import ContactContent from "../components/ContactContent"

export default () => {
  return (
    <Layout>
      <ContactIntro />
      <ContactContent />
      <Footer />
    </Layout>
  )
}
