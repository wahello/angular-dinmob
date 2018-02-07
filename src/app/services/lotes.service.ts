import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { ConfigService } from 'app/services/config.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
//esta es la forma correcta
import "rxjs/add/observable/throw";

@Injectable()
export class LotesService {
  url: string;

  constructor(
    private http: HttpClient,
    private config: ConfigService
  ) {
    this.url = this.config.api_url + "lotes/";
  }


  //ok
  updateLote(id_lote, lote) {
    return this.http.post(this.url + 'update_lote/' + id_lote, { lote: lote })
      .pipe(catchError(this.handleError("updateLote")));
  }

  //ok
  bulkUpdate(ids, props) {
    return this.http.post(this.url + 'bulk_update', { ids: ids, props: props })
      .pipe(catchError(this.handleError("bulkUpdate")));
  }

  //ok
  bulkAddLotePrototipo(ids_lotes, id_prototipo) {
    return this.http.post(this.url + 'bulk_add_lote_prototipo', { ids: ids_lotes, id_prototipo: id_prototipo })
      .pipe(catchError(this.handleError("bulkAddLotePrototipo")));
  }

  //ok
  getDetallesLoteVentas(id_lote) {
    return this.http.get(this.url + 'ventas_detalle/' + id_lote)
      .pipe(catchError(this.handleError("getDetallesLoteVentas")));
  }

  //ok
  getAvances(id_lote) {
    return this.http.get(this.url + "get_avances/" + id_lote)
      .pipe(catchError(this.handleError("getAvances")));
  }


  //ok
  addLoteByNombre(nombre, id_manzana) {
    return this.http.post(this.url + 'add_by_nombre', { nombre: nombre, id_manzana: id_manzana })
      .pipe(catchError(this.handleError("addLoteByNombre")));
  }

  //ok
  addLoteByNumero(prefijo, ini, fin, id_manzana) {
    return this.http.post(this.url + 'add_by_numero', { prefijo: prefijo, ini: ini, fin: fin, id_manzana: id_manzana })
      .pipe(catchError(this.handleError("addLoteByNumero")));
  }

  //ok
  delLote(id_lote) {
    return this.http.post(this.url + "del_lote/" + id_lote, {})
      .pipe(catchError(this.handleError("delLote")));
  }

  private handleError<T>(operation = 'operation') {
    return (error: HttpErrorResponse) => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message} (${error.status}- ${error.statusText})`);

      return Observable.throw(error);
    };
  }


}
