import React from "react"
import "./index.scss"
import { Container, Image } from "semantic-ui-react"
import { Link } from "gatsby"
import BlogLayout from "../layouts/BlogLayout"
import Hero from "../components/Hero"

export default function index() {
  return (
    <BlogLayout>
      <Hero />
    </BlogLayout>
  )
}
