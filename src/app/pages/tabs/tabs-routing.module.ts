import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreloadAllModules } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path:'home',
        children:[
          {
            path: '',
            loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
          }
        ]
      },
      {
        path:'self',
        children:[
          {
            path: '',
            loadChildren: () => import('../self/self.module').then( m => m.SelfPageModule)
          },
        ]
      },
      {
        path:'category',
        children:[
          {
            path: '',
            loadChildren: () => import('../category/category.module').then( m => m.CategoryPageModule)
          },
        ]
      },
      {
        path:'profile',
        children:[

            {
              path: '',
              loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
            }
        ]
      },
      {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
