import { useEffect, useId, useRef, useState } from 'react'
import { orderOptions } from '../locations'

function OrderDropdown({
  label = 'Order Online',
  shortLabel = 'Order',
  className = 'order-link',
  onSelect,
}) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)
  const menuId = useId()

  const setOpen = (nextOpen) => {
    setIsOpen(nextOpen)
  }

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    const handlePointerDown = (event) => {
      if (!dropdownRef.current?.contains(event.target)) {
        setOpen(false)
      }
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  const handleOptionClick = () => {
    setOpen(false)
    onSelect?.()
  }

  return (
    <div
      className={`order-dropdown${isOpen ? ' order-dropdown--open' : ''}`}
      ref={dropdownRef}
    >
      <button
        type="button"
        className={`order-dropdown-trigger ${className}`}
        aria-label={label}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-controls={menuId}
        onClick={() => setOpen(!isOpen)}
      >
        <span className="order-dropdown-label order-dropdown-label--full">{label}</span>
        <span className="order-dropdown-label order-dropdown-label--short" aria-hidden="true">
          {shortLabel}
        </span>
        <span className="order-dropdown-chevron" aria-hidden="true">
          ▾
        </span>
      </button>
      {isOpen ? (
        <ul className="order-dropdown-menu" id={menuId} role="listbox" aria-label="Choose a location">
          {orderOptions.map((option) => (
            <li key={option.id} role="none">
              <a
                className="order-dropdown-option"
                href={option.orderUrl}
                target="_blank"
                rel="noreferrer"
                role="option"
                onClick={handleOptionClick}
              >
                {option.label}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}

export default OrderDropdown
