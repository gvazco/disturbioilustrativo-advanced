import React from "react"
import { Link } from "gatsby"
import PageIcon from "../../images/tango-page-icon.svg"
import { Wrapper, Menu } from "./PortafolioSidebar.styles"

const PortafolioSidebar = ({ catId, categoriasPortafolios }) => {
  const sortedCategories = [...categoriasPortafolios].sort((x, y) => {
    if (x.node.slug === "all-proyects") return -1
    if (y.node.slug === "all-proyects") return 1
    return 0
  })
  return (
    <Wrapper>
      <Menu>
        <li className="sidebar-menu-header">
          <img src={PageIcon} alt="Multycasetas - Proyects Header" />
          <span>Proyectos</span>
        </li>
        {sortedCategories.map(cat => {
          if (cat.node.count !== 0) {
            return cat.node.slug !== "uncategorized" ? (
              <li key={cat.node.id}>
                <span className="count">{cat.node.count}</span>
                <Link to={cat.node.uri} activeClassName="sidebar-highlighted">
                  <span dangerouslySetInnerHTML={{ __html: cat.node.name }} />
                </Link>
              </li>
            ) : null
          }
        })}
      </Menu>
    </Wrapper>
  )
}

export default PortafolioSidebar
