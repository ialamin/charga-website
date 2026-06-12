const highlights = [
  {
    name: 'Kabobs',
    image: '/images/highlight-kabobs.jpg',
    position: 'center 42%',
  },
  {
    name: 'Charga',
    image: '/images/highlight-momos.jpg',
    position: 'center 55%',
  },
  {
    name: 'Chopped Cheese',
    image: '/images/highlight-chopped-cheese.jpg',
    position: 'center 48%',
  },
]

function MenuHighlights() {
  return (
    <section id="menu" className="menu-highlights-band" aria-labelledby="menu-highlights-heading">
      <div className="menu-highlights">
        <div className="section-header menu-highlights-copy">
          <span className="section-accent" aria-hidden="true"></span>
          <h2 id="menu-highlights-heading" className="section-title">
            Favorites
          </h2>
        </div>

        <div className="menu-highlights-tiles">
          {highlights.map((item) => (
            <article className="menu-highlight-tile" key={item.name}>
              <div className="menu-highlight-media">
                <img
                  className="menu-highlight-image"
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  style={{ objectPosition: item.position }}
                />
                <div className="menu-highlight-overlay" aria-hidden="true"></div>
                <h3 className="menu-highlight-name">{item.name}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MenuHighlights
