import { LitElement, html, css } from 'lit-element'

export class SumaqSizeScreen extends LitElement {

  static get styles () {
    return css`
    :host {
      display:inline-block
    }
    `
  }

  static get properties () {
    return {
      xs: Number,
      sm: Number,
      md: Number,
      lg: Number,
      xl: Number,
      _message: { type: String, attribute: false }
    }
  }

  constructor () {
    super()
    this.xs = 568
    this.sm = 768
    this.md = 1024
    this.lg = 1366
    this.xl = 1920
    this._currentSize = ''
    this._message = ''
    document.addEventListener('DOMContentLoaded', () => {
      this.resizeScreen()
    })
    window.onresize = () => {
      this.resizeScreen()
    }
  }

  // Implement `render` to define a template for your element.
  render () {
    return html`<span>${this._message}</span>`
  }

  resizeScreen () {
    const xs = window.matchMedia(`(min-width: ${this.xs}px) and (max-width: ${this.sm - 1}px)`)
    const sm = window.matchMedia(`(min-width: ${this.sm}px) and (max-width: ${this.md - 1}px)`)
    const md = window.matchMedia(`(min-width: ${this.md}px) and (max-width: ${this.lg - 1}px)`)
    const lg = window.matchMedia(`(min-width: ${this.lg}px) and (max-width: ${this.xl - 1}px)`)
    const xl = window.matchMedia(`(min-width: ${this.xl}px)`)
    const portrait = window.matchMedia(`(orientation: portrait)`)
    const landscape = window.matchMedia(`(orientation: landscape)`)

    if (xs.matches) this._currentSize = 'xs'
    else if (sm.matches) this._currentSize = 'sm'
    else if (md.matches) this._currentSize = 'md'
    else if (lg.matches) this._currentSize = 'lg'
    else if (xl.matches) this._currentSize = 'xl'
    else this._currentSize = 'mobileFirst'
    const size = this._currentSize !== 'mobileFirst' ? this[this._currentSize] : `<${this.xs}`
    this._message = `screen size: ${size}px ${portrait.matches ? 'portrait' : ''}${landscape.matches ? 'landscape' : ''} (${this._currentSize})`
  }
}
