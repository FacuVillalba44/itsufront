import { Component } from '@angular/core';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { FooterComponent } from '../../../shared/footer/footer.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-layout-admin',
  imports: [NavbarComponent,
    SidebarComponent,
    RouterOutlet],
  templateUrl: './layout-admin.component.html',
  styleUrl: './layout-admin.component.css'
})
export default class LayoutAdminComponent {

}
