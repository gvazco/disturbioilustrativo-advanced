import React from "react"
import { Link } from "gatsby"
import { Wrapper, Menu } from "./PostSidebar.styles"

const PostSidebar = ({ date, author, categories }) => (
  <Wrapper>
    <Menu>
      <li className="sidebar-section">
        <span>{date}</span>
      </li>
      <li className="sidebar-section">
        <span>{author}</span>
      </li>
      <li className="sidebar-section">
        <span>Categorías</span>
      </li>
      {categories.map(cat =>
        cat.slug !== "all-post" ? (
          <li key={cat.uri}>
            <Link to={cat.uri}>
              <span dangerouslySetInnerHTML={{ __html: cat.name }} />
            </Link>
          </li>
        ) : null
      )}
    </Menu>
  </Wrapper>
)

export default PostSidebar
