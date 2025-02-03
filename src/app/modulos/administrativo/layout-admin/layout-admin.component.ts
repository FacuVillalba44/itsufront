import { Component } from '@angular/core';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { FooterComponent } from '../components/footer/footer.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-layout-admin',
  imports: [NavbarComponent,
    SidebarComponent,
    FooterComponent,
    RouterOutlet],
  templateUrl: './layout-admin.component.html',
  styleUrl: './layout-admin.component.css'
})
export default class LayoutAdminComponent {

}
