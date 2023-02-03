import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children:
    [
      {
        path: 'ruta-tres',
        loadChildren: () =>
        import('../tres/tres.module').then(m => m.TresPageModule)
      }, 
      {
         path: 'ruta-cuatro',
         loadChildren: () =>
         import('../cuatro/cuatro.module').then(m => m.CuatroPageModule)
       }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/ruta-tres',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
