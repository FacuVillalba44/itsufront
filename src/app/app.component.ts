import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import LayoutAdminComponent from './modulos/administrativo/layout-admin/layout-admin.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front itsu';
}
