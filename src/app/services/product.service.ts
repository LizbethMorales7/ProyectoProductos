import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  urlAPI:string="https://productos.free.beeceptor.com/";
  //cambiar esta direccion: "https://mac-center.com.pe/cdn/shop/files/iPhone_15_Pro_Max_Natural_Titanium_PDP_Image_Position1__COES_823x.jpg?v=1695213371
  //por esta de abajo
  //dirreccion de la nueva imagen del iphone
  //https://m.media-amazon.com/images/I/81fO2C9cYjL.__AC_SY445_SX342_QL70_ML2_.jpg

  constructor(private http: HttpClient) { }

  retornar(){
    return this.http.get(this.urlAPI).pipe(take(1));
  }
}
