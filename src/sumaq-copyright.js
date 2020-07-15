import { LitElement, html, css } from 'lit-element';

class SumaqCopyright extends LitElement {
  static get styles() {
    return css`
      :host {
        font-size: small;
      }
      p {
        display: inline-block;
        margin:0;
        opacity: 0.75;
      }
    `
  }

  static get properties() {
    return {
      sinceYear: {
        type: Number,
        attribute: 'since-year'
      }
    };
  }

  constructor() {
    super()
    this._currentYear = new Date().getFullYear()
  }

  // Implement `render` to define a template for your element.
  render() {
    return html`
      ${this.sinceYear ?
        html`<p>©${this.sinceYear}-${this._currentYear} <slot></slot></p>` :
        html`<p>©${this._currentYear} <slot></slot></p>`
      }
    `
  }
}
customElements.define('sumaq-copyright', SumaqCopyright);
