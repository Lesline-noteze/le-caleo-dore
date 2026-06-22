import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
interface Dish{
  id:number;
  name:string;
  description:string;
  price:number;
  category:'entree'| 'plat'|'dessert';
}

@Component({
  selector: 'app-menu',
  imports: [NgClass],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  dishes: Dish[] = [
  { id:1, name:'Beignet haricot', description:'Beignets de niébé maison',
    price: 1500, category:'entree'
  },
  { id:2, name: 'Folong', description:'Salade traditionnelle au folong',
    price:2000, category:'entree'
  },
  { id:3, name: 'Ndolè aux crevettes', description:'Spécialité douala emblématique',
    price:5500, category:'plat'
  },
  { id:4, name: 'Poulet DG', description:'Plantain mur, légumes croquants',
    price:6000, category:'plat'
  },
  { id:5, name: 'Eru aux écailles', description:'Légume forestier, viande fumée',
    price:5000, category:'plat'
  },
  { id:6, name: 'Folong', description:'Salade traditionnelle au folong',
    price:2000, category:'entree'
  },
  { id:7, name: 'Folong', description:'Salade traditionnelle au folong',
    price:2000, category:'entree'
  },
  { id:8, name: 'Folong', description:'Salade traditionnelle au folong',
    price:2000, category:'entree'
  },
  { id:9, name: 'Folong', description:'Salade traditionnelle au folong',
    price:2000, category:'entree'
  },
  ];
}
