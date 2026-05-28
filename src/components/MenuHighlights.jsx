const highlights = [
  {
    name: 'Kabobs',
    image: '/images/highlight-kabobs.jpg',
    position: 'center 42%',
  },
  {
    name: 'Chili Momos',
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
        <div className="menu-highlights-copy">
          <h2 id="menu-highlights-heading" className="menu-highlights-title">
            Favorites
          </h2>
        </div>

        <div className="menu-highlights-tiles">
          {highlights.map((item) => (
            <article
              className="menu-highlight-tile"
              key={item.name}
              style={{
                '--tile-image': `url(${item.image})`,
                '--tile-position': item.position,
              }}
            >
              <img
                className="menu-highlight-image"
                src={item.image}
                alt={item.name}
                loading="lazy"
                style={{ objectPosition: item.position }}
              />
              <h3 className="menu-highlight-name">{item.name}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MenuHighlights
