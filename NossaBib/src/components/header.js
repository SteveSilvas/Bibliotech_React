var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
let Menu = class Menu extends LitElement {
    render() {
        return html `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
                    <div class="header">
                        <div class="logo">
                              <i class="fa fa-book" style="color:white; font-size: 10vh"></i>
                        </div>
                        <h1 class="titulo">Nossa Bib</h1>
                    </div>

                    <h1>fa fa-link</h1>
                    


${this.getStyle()}
                `;
    }
    getStyle() {
        return html `
            <style>
                    .header{
                        background-color: #0d5db8;
                        padding: 1vh;
                        display:flex;
                        flex-wrap: wrap;
                    }
                    .logo{
                        align-self: center;
                        margin-left: 2%;
                    }
                    .titulo{
                        display:flex;
                        justify-content:center;
                        color: white;
                        flex-grow:1;
                        
                    }
            </style>
        `;
    }
};
Menu = __decorate([
    customElement('header-simples')
], Menu);
