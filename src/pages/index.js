import * as React from "react"
import SEO from "../components/SEO/SEO"
import CTAArea from "../components/CTAArea/CTAArea"
import About from "../components/About/About"
import Layout from "../components/Layout/Layout"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <CTAArea />
    <About />
  </Layout>
)
export default IndexPage
