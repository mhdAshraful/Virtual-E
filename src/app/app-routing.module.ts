import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'time', loadChildren: './time/time.module#TimePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'arobjects', loadChildren: './arobjects/arobjects.module#ArobjectsPageModule' },
  { path: 'units', loadChildren: './units/units.module#UnitsPageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'human', loadChildren: './arobjects/human/human.module#HumanPageModule' },
  { path: 'birds', loadChildren: './arobjects/birds/birds.module#BirdsPageModule' },
  { path: 'dino', loadChildren: './arobjects/dino/dino.module#DinoPageModule' },
  { path: 'vrview', loadChildren: './vrview/vrview.module#VrviewPageModule' },
  { path: 'help', loadChildren: './help/help.module#HelpPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
