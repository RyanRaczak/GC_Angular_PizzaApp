import { Component } from '@angular/core';
import { MenuItem } from './MenuItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pizzaApp';
  headers:string[] = ["Name", "Price", "Available"];
  menuItems:MenuItem[] = [
    (new MenuItem("Cheese Stick Pizza", 25, true)),
    (new MenuItem("Chicken Sammich Pizza", 65, true)),
    (new MenuItem("Beer Pizza", 2.5, false)),
    (new MenuItem("Salmon Pizza", 20, true))
  ];
}