import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export interface Player {
  color: string,
  name: string,
  backgroundColor: string,
  selected: boolean,
  alwaysPresent: boolean,
}
export interface Elementi {
  name: string,
  backgroundColor: string,
}
export type Phase = 'PlayerSelection' | 'Game';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  coloreSospettati: string = 'salmon';
  coloreOggetti: string = 'lightblue';
  coloreLuogo: string = 'purple';

  phase: Phase = 'PlayerSelection';
  players: Player[] = [{
    color: 'black',
    name: '?',
    backgroundColor: 'white',
    selected: true,
    alwaysPresent: true,
  }, {
    color: 'white',
    name: 'Luna',
    backgroundColor: 'gray',
    selected: false,
    alwaysPresent: false,
  }, {
    color: 'red',
    name: 'Hermione',
    backgroundColor: 'gray',
    selected: false,
    alwaysPresent: false,
  }, {
    color: 'blue',
    name: 'Ginny',
    backgroundColor: 'gray',
    selected: false,
    alwaysPresent: false,
  }, {
    color: 'purple',
    name: 'Harry',
    backgroundColor: 'gray',
    selected: false,
    alwaysPresent: false,
  }, {
    color: 'yellow',
    name: 'Ron',
    backgroundColor: 'gray',
    selected: false,
    alwaysPresent: false,
  }, {
    color: 'green',
    name: 'Neville',
    backgroundColor: 'gray',
    selected: false,
    alwaysPresent: false,
  }];
  selectedPlayers: Player[] = [];
  
  rows: Elementi[] = [{
    name: 'Fenrir',
    backgroundColor: this.coloreSospettati,
  }, {
    name: 'Lucius',
    backgroundColor: this.coloreSospettati,
  }, {
    name: 'Peter',
    backgroundColor: this.coloreSospettati,
  }, {
    name: 'Draco',
    backgroundColor: this.coloreSospettati,
  }, {
    name: 'Ghermidore',
    backgroundColor: this.coloreSospettati,
  }, {
    name: 'Bellatrix',
    backgroundColor: this.coloreSospettati,
  },

  {
    name: 'Scopa',
    backgroundColor: this.coloreOggetti,
  }, {
    name: 'Collana',
    backgroundColor: this.coloreOggetti,
  }, {
    name: 'Pozione',
    backgroundColor: this.coloreOggetti,
  }, {
    name: 'Idromele',
    backgroundColor: this.coloreOggetti,
  }, {
    name: 'Incendio',
    backgroundColor: this.coloreOggetti,
  }, {
    name: 'Stupeficium',
    backgroundColor: this.coloreOggetti,
  },

  {
    name: 'Villa',
    backgroundColor: this.coloreLuogo,
  }, {
    name: 'Pub',
    backgroundColor: this.coloreLuogo,
  }, {
    name: 'Stramberga',
    backgroundColor: this.coloreLuogo,
  }, {
    name: 'Castello',
    backgroundColor: this.coloreLuogo,
  }, {
    name: 'Foresta',
    backgroundColor: this.coloreLuogo,
  }, {
    name: 'Gringott',
    backgroundColor: this.coloreLuogo,
  }, {
    name: 'Tiri Vispi',
    backgroundColor: this.coloreLuogo,
  }, {
    name: 'Ministero',
    backgroundColor: this.coloreLuogo,
  }, {
    name: 'Grimmold',
    backgroundColor: this.coloreLuogo,
  },
  ];
  grid: string[][] = [];

  constructor() {
  }

  goToGame() {
    this.initializeGrid();
    this.phase = 'Game';
  }

  initializeGrid() {
    this.selectedPlayers = this.players.filter(player => player.selected);
    const playersNumber: number = this.selectedPlayers.length;
    this.grid = this.rows.map(() => Array<string>(playersNumber).fill(''));
  }

  togglePlayer(playerIndex: number) {
    this.players[playerIndex].selected = !this.players[playerIndex].selected;
  }
  toggleCell(rowIndex: number, colIndex: number) {
    const current: string = this.grid[rowIndex][colIndex];
    let next: string = '';
    switch (current) {
      case '': next = '✅'; break;
      case '✅': next = '❌'; break;
      case '❌': next = '❓'; break;
      case '❓': next = ''; break;
    }
    this.grid[rowIndex][colIndex] = next;
  }
}
