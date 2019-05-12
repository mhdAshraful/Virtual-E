import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'time', loadChildren: './time/time.module#TimePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'arobjects', loadChildren: './arobjects/arobjects.module#ArobjectsPageModule' },
  { path: 'coyote', loadChildren: './arobjects/coyote/coyote.module#CoyotePageModule' },

  { path: 'earth', loadChildren: './arobjects/earth/earth.module#EarthPageModule' },

  { path: 'kangaroo', loadChildren: './arobjects/kangaroo/kangaroo.module#KangarooPageModule' },
  { path: 'satellite', loadChildren: './arobjects/satellite/satellite.module#SatellitePageModule' },
  { path: 'forest3d', loadChildren: './arobjects/forest3d/forest3d.module#Forest3dPageModule' },


  { path: 'units', loadChildren: './units/units.module#UnitsPageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'human', loadChildren: './arobjects/human/human.module#HumanPageModule' },
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
