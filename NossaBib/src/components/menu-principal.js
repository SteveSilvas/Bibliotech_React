var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
let MenuPrincipal = class MenuPrincipal extends LitElement {
    render() {
        return html `
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
    getStyle() {
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
};
MenuPrincipal = __decorate([
    customElement('menu-principal')
], MenuPrincipal);
