import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const URL = environment.url;
const apiKey = environment.apiKey;

@Injectable({
    providedIn: 'root',
})
export class MoviesService {
    constructor(private http: HttpClient) {}

    // * Private Methods

    /**
     * Built url endpoint
     * @param query URL
     */
    private executeQuery(query: string): string {
        query = URL + query;
        return (query += `&api_key=${apiKey}&language=es&include_image_language=es`);
    }

    public getFeature(): Observable<IGetMoviesFeatures> {
        const today = new Date();
        const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
        const month = today.getMonth() + 1;
        let monthStr;

        if (month < 10) {
            monthStr = '0' + month;
        } else {
            monthStr = month;
        }

        const startdate = `${today.getFullYear()}-${monthStr}-01`;
        const endDate = `${today.getFullYear()}-${monthStr}-${lastDay}`;

        const url = this.executeQuery(
            `/discover/movie?primary_release_date.gte=${startdate}&primary_release_date.lte=${endDate}`
        );
        return this.http.get(url).pipe(tap((res: IGetMoviesFeatures) => res));
    }
}
