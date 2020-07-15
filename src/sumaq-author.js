import { LitElement, html, css } from 'lit-element';

class SumaqAuthor extends LitElement {
  static get styles() {
    // position: absolute;
    // left: 0.5rem;
    // bottom: 0.5rem;
    // margin: 0;
    // // font-size: $font-size-sm;
    // color: darken($white, 75%);
    // z-index: 10;
    return css`
      :host {
        font-size: x-small;
      }
      p {
        display: inline-block;
        margin:0;
        opacity: 0.25;
      }
      p:hover {
        opacity: 0.75;
      }
    `
  }

  static get properties() {
    return {
      name: String,
      link: String
    };
  }

  constructor() {
    super()
    this.name = 'Eduardo Lingán'
    this.link = 'https://elingan.com'
  }

  // Implement `render` to define a template for your element.
  render() {
    return html`
      <p>Made with &#10084; by a <a href="${this.link}" target="_blank">${this.name}</a><p>
    `
  }
}
customElements.define('sumaq-author', SumaqAuthor);

// export default SumaqAuthor
