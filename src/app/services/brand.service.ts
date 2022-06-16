import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable,tap } from "rxjs";
import { Brand } from "../models/brand";

@Injectable({ providedIn: 'root' })
export class BrandService{
    url = "http://localhost:3000/Brands";
    
    constructor(private http:HttpClient) {
        
    }
    getBrands():Observable<Brand[]>{
        return this.http.get<Brand[]>(this.url)
        .pipe(
            tap(data => console.log(data)));
    }
}