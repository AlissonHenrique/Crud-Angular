import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { IProduct, IShowMessage } from './IProduct.model';
import api from '../../services/api';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const urlProducts: string = '/products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}
  showMessage({ msg, isError = false }: IShowMessage): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }
  create({ name, price }: IProduct): Observable<Observable<IProduct>> {
    return this.http
      .post<IProduct>(api + urlProducts, { name, price })
      .pipe(
        map((obj) => obj),
        catchError((e) => this.errorHandler(e))
      );
  }
  errorHandler(e: any): Observable<any> {
    this.showMessage({ msg: 'Ocorreu um erro!', isError: true });
    return EMPTY;
  }
  read(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(api + urlProducts).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }
  readById(id: number): Observable<IProduct> {
    const url = `${api}${urlProducts}/${id}`;

    return this.http.get<IProduct>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(product: IProduct): Observable<IProduct> {
    const url = `${api}${urlProducts}/${product.id}`;
    return this.http.put<IProduct>(url, product).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<IProduct> {
    const url = `${api}${urlProducts}/${id}`;
    return this.http.delete<IProduct>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }
}
