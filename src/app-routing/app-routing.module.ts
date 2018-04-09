import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './../app/main/main.component'
import { HotComponent } from './../app/hot/hot.component'
import { DraftComponent } from './../app/draft/draft.component'
import { SettingComponent } from './../app/setting/setting.component'


const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', component: MainComponent, children: [
    {path: '', component: HotComponent},
    {path: 'hot', component: HotComponent},
    {path: 'draft', component: DraftComponent},
    {path: 'setting', component: SettingComponent}
  ]},

];

@NgModule({
  imports: [
    //CommonModule
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
