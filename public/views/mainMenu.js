'use strict';

import View from "../modules/view"
import Menu from "../components/menu/menu"
import Button from "../components/button/button.js";
import Link from "../components/link/link.js";

export default class MainMenuView extends View {
  constructor(options = {}) {
    super(options);
    this._init();
    // this.hide();
  }

  _init() {
    let container = document.querySelector('.content_container');
    this._menu = new Menu({
      data: {
        fields: [
          {
            class: 'play'
          },
          {
            class: 'leaderbord'
          },
          {
            class: 'exit'
          }
        ],
        template: 'menu/menu.tmpl',
        title: 'RAINBOW SQUARE',
      }
    });
    this._el = this._menu._el;
    container.appendChild(this._menu._el);

    let play = document.querySelector('.play');
    this._play = new Link({class: "ghost-button-rounded-corners", attrs: {text: "play"}});
    // let multiPlayer = new Block_query('Multiplayer');
    // let scoreboard = new Block_query('Scoreboard');
    play.appendChild(this._play._el);

    this._play.on('click', event => {
      this.router.go('/playchoose');
    });

    let leaderbord = document.querySelector('.leaderbord');
    this._leaderbord = new Link({
      class: "ghost-button-rounded-corners",
      attrs: {text: "leaderbord"}
    });
    // let multiPlayer = new Block_query('Multiplayer');
    // let scoreboard = new Block_query('Scoreboard');
    play.appendChild(this._leaderbord._el);

    this._leaderbord.on('click', event => {
      this.router.go('/scores');
    });

    let exit = document.querySelector('.exit');
    this._exit = new Link({class: "ghost-button-rounded-corners", attrs: {text: "exit"}});
    this._exit .on('click', event => {
      this.router.go('/');
    });
    // let multiPlayer = new Block_query('Multiplayer');
    // let scoreboard = new Block_query('Scoreboard');
    exit.appendChild(this._exit._el);


    // multiPlayer.on('click', event => { this.router.go('/multiPlayer'); });
    // scoreboard.on('click', event => { this.router.go('/scores'); });
    // singlePlayer.classAdd('mainMenu_buttom');
    // multiPlayer.classAdd('mainMenu_buttom');
    // scoreboard.classAdd('mainMenu_buttom');
    // menu.append(singlePlayer);
    // menu.append(multiPlayer);
    // menu.append(scoreboard);

    // this._el = menu._el;
  }

  resume(options = {}) {
    this.show();
  }
}
