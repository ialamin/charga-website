import siteConfig from '../siteConfig'

const toSectionId = (title) =>
  title
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')

function Menu() {
  const menuSections = siteConfig.menuSections
  const navItems = menuSections.filter((section) => section.navLabel)

  return (
    <section className="menu-page" aria-labelledby="menu-page-heading">
      <header className="menu-page-header">
        <h1 id="menu-page-heading" className="page-title">
          Menu
        </h1>
      </header>

      <nav className="menu-jump-nav" aria-label="Jump to menu section">
        {navItems.map((section) => (
          <a className="menu-jump-link" href={`#${toSectionId(section.title)}`} key={section.title}>
            {section.navLabel}
          </a>
        ))}
      </nav>

      <div className="menu-page-sections">
        {menuSections.map((section) => (
          <section
            className="menu-page-section"
            id={toSectionId(section.title)}
            key={section.title}
          >
            <span className="section-accent" aria-hidden="true"></span>
            <h2 className="section-title">{section.title}</h2>
            {section.note ? <p className="menu-page-section-note">{section.note}</p> : null}
            <ul className={section.compact ? 'menu-page-items menu-page-items-compact' : 'menu-page-items'}>
              {section.items.map((item) => (
                <li className="menu-page-item" key={item.name}>
                  <div className="menu-page-item-top">
                    <h3 className="menu-page-item-name">{item.name}</h3>
                    {item.price ? <p className="menu-page-item-price">{item.price}</p> : null}
                  </div>
                  {item.description ? (
                    <p className="menu-page-item-description">{item.description}</p>
                  ) : null}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  )
}

export default Menu
