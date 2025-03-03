import { Component } from '@angular/core';
import { NavbarAdminComponent } from '../components/navbarAdmin/navbarAdmin.component';
import { SidebarAdminComponent } from '../components/sidebarAdmin/sidebarAdmin.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-layout-admin',
  imports: [NavbarAdminComponent,
    SidebarAdminComponent,
    RouterOutlet],
  templateUrl: './layout-admin.component.html',
  styleUrl: './layout-admin.component.css'
})
export default class LayoutAdminComponent {

}
