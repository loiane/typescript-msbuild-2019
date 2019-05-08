import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';

import { ProductService } from './../services/product.service';
import * as product from './product.actions';

@Injectable()
export class ProductEffects {
  constructor(private api: ProductService, private actions$: Actions) {}

  @Effect()
  loadAction$ = this.actions$
    .pipe(
      ofType<product.LoadAction>(product.ProductActions.LOAD),
      switchMap(() =>
        this.api
          .load()
          .pipe(
            map(res => new product.LoadSuccessAction(res)),
            catchError(error => this.handleError(error))
          )
      )
    );

  @Effect()
  createAction$ = this.actions$
    .pipe(
      ofType<product.CreateAction>(product.ProductActions.CREATE),
      map((action: any) => action.payload),
      mergeMap(payload =>
        this.api
          .create(payload)
          .pipe(
            map(res => new product.CreateSuccessAction(res)),
            catchError(error => this.handleError(error))
          )
      )
    );

  @Effect()
  updateAction$ = this.actions$
    .pipe(
      ofType<product.UpdateAction>(product.ProductActions.UPDATE),
      map((action: any) => action.payload),
      mergeMap(payload =>
        this.api
          .update(payload)
          .pipe(
            map(res => new product.UpdateSuccessAction(res)),
            catchError(error => this.handleError(error))
          )
      )
    );

  @Effect()
  removeAction$ = this.actions$
    .pipe(
      ofType<product.RemoveAction>(product.ProductActions.REMOVE),
      map((action: any) => action.payload),
      mergeMap(payload =>
        this.api
          .remove(payload.id)
          .pipe(
            map(res => new product.RemoveSuccessAction(res)),
            catchError(error => this.handleError(error))
          )
      )
    );

  private handleError(error: any) {
    return of(new product.ErrorAction(error));
  }
}
