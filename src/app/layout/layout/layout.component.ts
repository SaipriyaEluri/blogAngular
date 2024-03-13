import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

  showMenu:boolean = false;

  menuItems = [
    {name:"Create Post", icon:"note_add", title:'Create Post', path:'/create-post'},
    {name:"Posts",icon:"file_copy", title:'Posts', path:'/posts'},
    {name:"Comments",icon:"comment", title:'Comments', path:'comments'},
    {name:"Blogger",icon:"collections_bookmark", title:'Blogger'}
  ]
  menuClose(){
    this.showMenu = !this.showMenu;
  }
}
