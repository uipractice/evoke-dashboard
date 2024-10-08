import { Routes } from '@angular/router';

/* Routing with Lazy Loading */
// export const routes: Routes = [
//   { path: 'home', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent) },
//   { path: 'dev', loadComponent: () => import('./components/dev/dev.component').then(m => m.DevComponent) },
//   { path: 'dev/pdf', loadComponent: () => import('./shared/evoke-style-guide-pdf.component').then(m => m.EvokeStyleGuidePdfComponent) },
//   { path: 'test', loadComponent: () => import('./components/test/test.component').then(m => m.TestComponent) },
//   { path: '', redirectTo: 'home', pathMatch: 'full' },
//   { path: '**', loadComponent: () => import('./shared/page-not-found.component').then(m => m.PageNotFoundComponent) }
// ];

/* Latest Routing via Lazy Loading */
export const routes: Routes = [
  { path: 'Dashboard', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent) },
  { path: 'AI', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent) },
  { path: 'Cloud', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent) },
  { path: 'IT', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent) },
  { path: 'Java', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent) },
  { path: 'LowCode', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent) },
  { path: '.NET', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent) },
  { path: 'OpenSource', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent) },
  { path: 'Oracle', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent) },
  { path: 'Pega', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent) },
  { path: 'QA', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent) },
  { path: 'RPA', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent) },
  { path: 'Salesforce', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent) },
  { path: 'UI', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent) },
  { path: '', redirectTo: 'Dashboard', pathMatch: 'full' },
  { path: '**', loadComponent: () => import('./shared/page-not-found.component').then(m => m.PageNotFoundComponent) }
];
