
import {LitElement, html} from 'lit';

import {customElement, property} from 'lit/decorators.js';

@customElement('header-simples')

class Menu extends LitElement {

    render() {

        return html`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
                    <div class="header">
                        <div class="logo">
                              <i class="fa fa-book" style="color:white; font-size: 10vh"></i>
                        </div>
                        <h1 class="titulo">Nossa Bib</h1>
                    </div>

                    ${this.getStyle()}
        `;        
    }

    public getStyle(){
        return html `
            <style>
                .header{
                    background-color: var(--cor-principal);
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
        `
    }

}