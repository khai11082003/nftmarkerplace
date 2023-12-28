import React from 'react'
import "./Header.scss"
import { Link } from 'react-router-dom'
export default function TopHeader () {
  return (
  <div class="preview__header" data-view="ctaHeader" data-item-id="36258540">
  <div class="preview__envato-logo">
    <Link class="header-envato_market" to = "/themefores">Envato <span>market</span></Link>
  </div>

  <div id="js-preview__actions" class="preview__actions">
  <div class="preview__action--buy">
    <Link class="header-buy-now e-btn--3d -color-primary" to = "/checkout">Buy now</Link>
  </div>
</div>
</div>
  )
}
