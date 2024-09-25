import { Routes } from '@angular/router';

/* Routing with Lazy Loading */
export const routes: Routes = [
  { path: 'home', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
  { path: 'dev', loadComponent: () => import('./dev/dev.component').then(m => m.DevComponent) },
  { path: 'dev/pdf', loadComponent: () => import('./utilities/evoke-style-guide-pdf.component').then(m => m.EvokeStyleGuidePdfComponent) },
  { path: 'test', loadComponent: () => import('./test/test.component').then(m => m.TestComponent) },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', loadComponent: () => import('./utilities/page-not-found.component').then(m => m.PageNotFoundComponent) }
];

/* Latest Routing via Lazy Loading */
// export const routes: Routes = [
//   { path: 'home', loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent) },
//   { path: '', redirectTo: 'home', pathMatch: 'full' },
//   { path: '**', loadComponent: () => import('./utilities/page-not-found.component').then(m => m.PageNotFoundComponent) }
// ]
