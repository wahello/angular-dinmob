import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TIPO_MAPA } from '../../../constantes/tipo_mapa';


declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-mapas-ventas-config-dialogo',
  templateUrl: './mapas-ventas-config-dialogo.component.html',
  styleUrls: ['./mapas-ventas-config-dialogo.component.scss']
})
export class MapasVentasConfigDialogoComponent implements OnInit {
  //verLeyenda: boolean;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<MapasVentasConfigDialogoComponent>
  ) {

  }

  ngOnInit() {
  }

  toggleVerLeyenda(event) {
    //console.log("ver leyenda", event.checked);
    this.data.verLeyenda.toggle = event.checked;
    $(".jvectormap-legend-cnt.jvectormap-legend-cnt-v").toggleClass("d-none");
    //let items= $(".jvectormap-legend-cnt.jvectormap-legend-cnt-v");
    //console.log(items);


  }

  escalaEstadosVenta() {
    //console.log("asignacion de la escala de estados");
    // region 0 lotes
    // region 1 prototipos
    // region 2 texto
    this.data.map.series.regions[0].setValues(this.data.estadosVenta);
    this.data.tipoMapa.tipo = TIPO_MAPA.EstadoVenta;
  }

  escalaPrototipos() {
    //console.log("asignacion de la escala de prototipos");
    // region 0 lotes
    // region 1 prototipos
    // region 2 texto
    this.data.map.series.regions[1].setValues(this.data.prototipos);
    this.data.tipoMapa.tipo = TIPO_MAPA.Prototipos;

  }


  escalaLoteTipo() {
    console.log("asignacion de la escala de estados", this.data.loteTipo);
    // region 0 lotes
    // region 1 prototipos
    // region 2 texto
    this.data.map.series.regions[2].setValues(this.data.loteTipo);
    this.data.tipoMapa.tipo = TIPO_MAPA.TipoLote;
  }

  escalaFormaPago() {
    console.log("asignacion de la escala de estados", this.data.formaPago);
    // region 0 lotes
    // region 1 prototipos
    // region 2 texto
    this.data.map.series.regions[3].setValues(this.data.formaPago);
    this.data.tipoMapa.tipo = TIPO_MAPA.FormaPago;
  }

}
