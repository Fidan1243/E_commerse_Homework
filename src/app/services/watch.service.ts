import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable,tap, throwError } from "rxjs";
import { Watch } from "../models/watch";

@Injectable({ providedIn: 'root' })
export class WatchService{
    url="http://localhost:3000/watches";

    constructor(private http:HttpClient){

    }

    getWatches(categoryId:number,colorId:number,brandId:number):Observable<Watch[]>{
        let newUrl=this.url;
        if(categoryId){
            
            newUrl+='?categoryId='+categoryId;
        }
        else if(colorId){

            newUrl+='?colorId='+colorId;
        }
        else if(brandId){

            newUrl+='?brandId='+brandId;
        }
        return this.http.get<Watch[]>(newUrl)
            .pipe(
                tap(data => {console.log(data); console.log(categoryId)}),
                catchError(this.handleError)
            );
    }


    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            //client or network
            console.log("Error : " + error.error.message);
        }
        else {
            switch (error.status) {
                case 404:
                    console.log("Not Found");
                    break;
                case 403:
                    console.log("Access Denied");
                    break;
                case 500:
                    console.log("Internal server");
                    break;
                default:
                    console.log("some unknow error happened");
            }
        }
        return throwError(() => new Error("some error happened"));
    }
}