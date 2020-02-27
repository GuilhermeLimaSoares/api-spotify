import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AlbumDetailComponent } from '../app/album-detail/album-detail.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';

const APP_ROUTES: Routes = [
  {path: 'home', component: AppComponent},
  {path: 'detalhes', component: AlbumDetailComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);