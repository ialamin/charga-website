import OrderDropdown from './OrderDropdown.jsx'

function StickyOrderBar() {
  return (
    <div className="sticky-order-bar">
      <OrderDropdown label="Order Online" className="sticky-order-button" />
    </div>
  )
}

export default StickyOrderBar
