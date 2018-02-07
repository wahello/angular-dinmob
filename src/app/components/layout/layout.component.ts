import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { AuthService } from "app/services/auth.service";
import { Router } from "@angular/router";
import { Usuario } from "app/model/usuario";
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material';
import { UsuarioService } from 'app/services/usuario.service';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  @ViewChild("navLeft") sidenav: MatSidenav;
  usuario: any;
  username: string;
  obra_default: any;
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher,
    private auth: AuthService,
    private usuarioSrv: UsuarioService,
    private router: Router
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {

    this.usuarioSrv.getUsuarioLogged()
      .subscribe(usuario => {
        this.usuario = usuario;
        this.username = this.usuario.nombre.split(" ")[0];

        if (this.usuario.id_obra_default) {
          this.obra_default = { obra: this.usuario.id_obra_default };
        } else {
          this.obra_default = {};
        }

      }, (error) => {
        this.router.navigate(['/login']);
      });

  }

  gotoRoute(event) {
    console.log("gotoRoute");

    //event.preventDefault();
    //event.stopPropagation();
    this.sidenav.toggle();
    //return false;
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener)

  }


}
