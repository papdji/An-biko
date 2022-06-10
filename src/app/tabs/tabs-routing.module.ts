import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'actualy',
        loadChildren: () => import('../pages/actualy/actualy.module').then( m => m.ActualyPageModule)
      },
      {
        path: 'chat',
        loadChildren: () => import('../pages/chat/chat.module').then(m => m.ChatPageModule)
      },
      {
        path: 'anbiko',
        loadChildren: () => import('../pages/anbiko/anbiko.module').then(m => m.AnbikoPageModule)
      },
      {
        path: 'chatroom',
        loadChildren: () => import('../pages/chatroom/chatroom.module').then(m => m.ChatroomPageModule)
      },
      // {
      //   path: 'forecast',
      //   loadChildren: () => import('../forecast/forecast.module').then(m => m.ForecastPageModule)
      // },
      
  
      {
        path: '',
        redirectTo: '/tabs/actualy',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/actualy',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
