import { LitElement, css, html } from 'lit-element';
import {customElement, property} from 'lit/decorators.js';

@customElement('testando-testes')

class Testes extends LitElement {
   getStyles() {
    return css`
      div { color: red; }
    `;
  }
  render() {
    return html`
    ${this.getStyles()}
      <div>I'm styled!</div>
    `;
  }
}