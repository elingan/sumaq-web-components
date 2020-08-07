import { LitElement, html, css } from 'lit-element';

export class SumaqCreator extends LitElement {
  static get styles() {
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
    this.name = 'Sumaq Websites'
    this.link = 'https://elingan.com'
  }

  // Implement `render` to define a template for your element.
  render() {
    return html`
      <p>Made with &#10084; by a <a href="${this.link}" target="_blank">${this.name}</a><p>
    `
  }
}

