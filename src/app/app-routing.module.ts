import { NgModule } from '@angular/core';
import { PreloadAllModules, PreloadingStrategy, Route, RouterModule, Routes } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export class CustomPreLoad implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    return route.data && route.data?.preload ? fn().pipe(delay(3000)) : of(null);
  }
}

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
  data: {preload: true} },
  { path: 'config', loadChildren: () => import('./config/config.module').then(m => m.ConfigModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: CustomPreLoad })],
  exports: [RouterModule],
  providers: [CustomPreLoad]
})
export class AppRoutingModule { }
