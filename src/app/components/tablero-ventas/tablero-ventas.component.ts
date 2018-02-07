import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'app/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tablero-ventas',
  templateUrl: './tablero-ventas.component.html',
  styleUrls: ['./tablero-ventas.component.scss']
})
export class TableroVentasComponent implements OnInit {
  
  usuario: any;
  obra_default: any;

  constructor(
    private router: Router,
    private usuarioSrv: UsuarioService
  ) { }

  ngOnInit() {
    
    this.usuarioSrv.getUsuarioLogged()
      .subscribe(usuario => {
        this.usuario = usuario;

        if (this.usuario.id_obra_default) {
          this.obra_default = { obra: this.usuario.id_obra_default };
        } else {
          this.obra_default = {};
        }

      }, (error) => {
        this.router.navigate(['/login']);
      });
  }

  gotoMapas() {
    this.router.navigate(["/mapas-ventas", this.obra_default]);
  }
  gotoClientes() {
    this.router.navigate(["/clientes", this.obra_default]);
  }
  gotoDesarrollos() {
    this.router.navigate(["/desarrollos", this.obra_default]);
  }
  gotoAlertaClientes() {
    this.router.navigate(["alerta-clientes", this.obra_default]);
  }
  gotoClienteSinLote() {
    this.router.navigate(["/clientes-sin-lote"]);
  }
  gotoEstadisticas() {
    this.router.navigate(["/estadisticas-ventas", this.obra_default]);
  }




}