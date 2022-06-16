import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable,tap } from "rxjs";
import { Color } from "../models/color";

@Injectable({ providedIn: 'root' })
export class ColorService{
    url="http://localhost:3000/Colors";
    constructor(private http:HttpClient){

    }
    getColors():Observable<Color[]>{
        return this.http.get<Color[]>(this.url)
        .pipe(
            tap(data => console.log(data)));
    
    }
}