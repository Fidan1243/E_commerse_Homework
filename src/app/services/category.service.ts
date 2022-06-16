import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable,tap } from "rxjs";
import { Category } from "../models/category";

@Injectable({ providedIn: 'root' })
export class CategoryService{
    url = "http://localhost:3000/Categories";
    
    constructor(private http:HttpClient) {
        
    }
    getCategories():Observable<Category[]>{
        return this.http.get<Category[]>(this.url)
        .pipe(
            tap(data => console.log(data)));
    }
}