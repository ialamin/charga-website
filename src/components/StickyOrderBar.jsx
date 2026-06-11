import siteConfig from '../siteConfig'

function StickyOrderBar() {
  return (
    <div className="sticky-order-bar">
      <a className="sticky-order-button" href={siteConfig.orderUrl} target="_blank" rel="noreferrer">
        Order Online
      </a>
    </div>
  )
}

export default StickyOrderBar
