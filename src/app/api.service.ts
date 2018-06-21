import {Injectable} from '@angular/core';
// import {Film} from '../film';
// import {SortOption} from '../sort-option';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FilmData} from './film-data';
import {Film} from './film';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = '0994e7679a856150aadcecf7de489bce';
  movieUrl: string = `${this.apiUrl}/movie`;
  searchUrl: string = `${this.apiUrl}/search`;
  personUrl: string = `${this.apiUrl}/person`;
  params: string = `&api_key=${this.apiKey}&language=en-US`;

  imgPath: string = 'https://image.tmdb.org/t/p';
  midImgPath: string = `${this.imgPath}/w500`;
  smallImgPath: string = `${this.imgPath}/w185`;
  bigBackPath: string = `${this.imgPath}/w1280`;
  midBackPath: string = `${this.imgPath}/w780`;
  smallBackPath: string = `${this.imgPath}/w300`;
  films: Array<any>;

  constructor(private http: HttpClient) {
  }

  getPopularFilms(page?: number) {
    return this.http.get(`${this.movieUrl}/popular?page=${page}${this.params}`);
  }

  getPopularPeople(page?: number) {
    return this.http.get(`${this.personUrl}/popular?page=${page}${this.params}`);
  }

}