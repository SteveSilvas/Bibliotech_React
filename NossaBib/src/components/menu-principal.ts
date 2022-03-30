import {LitElement, css, html} from 'lit';

import {customElement, property} from 'lit/decorators.js';
@customElement('menu-principal')

class MenuPrincipal extends LitElement {
    render(){
        return html`
                <div class="menu-principal">
                    <div class="rows">
                        <i class="fa fa-home" aria-hidden="true"></i>
                        <label for="">Home</label>
                    </div>
                    <div class="rows">
                        <i class="fa fa-sign-in" aria-hidden="true"></i>
                        <label for="">Entrar</label>
                    </div>
                    <div class="rows">
                        <i class="fa fa-address-card" aria-hidden="true"></i>
                        <label for="">Cadastrar</label>
                    </div>
                    <div class="rows">
                        <i class="fa fa-sign-in" aria-hidden="true"></i>
                        <label for="">Entrar</label>
                    </div>
                    <div class="rows">
                        <i class="fa fa-sign-in" aria-hidden="true"></i>
                        <label for="">Entrar</label>
                    </div>
                    <div class="rows">
                        <i class="fa fa-sign-in" aria-hidden="true"></i>
                        <label for="">Entrar</label>
                    </div>
                    <div class="rows">
                        <i class="fa fa-sign-in" aria-hidden="true"></i>
                        <label for="">Entrar</label>
                    </div>
                    <div>
                        <i class="fa fa-sign-in" aria-hidden="true"></i>
                        <label for="">Entrar</label>
                    </div>
                </div>
                ${this.getStyle()}
        `;
    }

    private getStyle(){
        return html `
            <style>
                .menu-principal{
                    background-color: red;
                }
                .rows{
                    cursor:pointer;
                }
            </style>
        `;
    }
}