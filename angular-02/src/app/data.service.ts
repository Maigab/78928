import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  items:any[] = [];

  constructor(private http: HttpClient) { }

  Salvar(saludador:String[]){
    this.http.post('https://gabriela-4c76d-default-rtdb.firebaseio.com/saludador.json', saludador)
    .subscribe(
      response => { console.log('respuesta del servidor ' + response)},
      error => console.error('error del servidor ' + error)
      );
  }

  /*//mostrar saludador
  mostrarSaludador(){
    this.http.get('https://gabriela-4c76d-default-rtdb.firebaseio.com/saludador.json').pipe(
      map((responseData: any) =>{
        const items = [];
        for(const key in responseData){
          if(responseData.hasOwnProperty(key)){
            items.push({id:key, ...responseData[key]});
          }
        }
        return items;
      }) ).subscribe(items => {console.log(items);});
  }*/

  mostrarSaludador():Observable<any[]>{
    return this.http.get('https://gabriela-4c76d-default-rtdb.firebaseio.com/saludador.json').pipe(
      map((responseData: any) =>{
        const items = [];
        for(const key in responseData){
          if(responseData.hasOwnProperty(key)){
            items.push({id:key, ...responseData[key]});
          }
        }
        return items;
      }) )//.subscribe(items => {console.log(items);});
  }

}