import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'arobjects', loadChildren: './arobjects/arobjects.module#ArobjectsPageModule' },
  { path: 'coyote', loadChildren: './arobjects/coyote/coyote.module#CoyotePageModule' },
  { path: 'forest', loadChildren: './arobjects/forest/forest.module#ForestPageModule' },
  { path: 'earth', loadChildren: './arobjects/earth/earth.module#EarthPageModule' },
  { path: 'house', loadChildren: './arobjects/house/house.module#HousePageModule' },
  { path: 'kangaroo', loadChildren: './arobjects/kangaroo/kangaroo.module#KangarooPageModule' },
  { path: 'satellite', loadChildren: './arobjects/satellite/satellite.module#SatellitePageModule' },
  { path: 'forest3d', loadChildren: './arobjects/forest3d/forest3d.module#Forest3dPageModule' },
  { path: 'computer', loadChildren: './arobjects/computer/computer.module#ComputerPageModule' },
  { path: 'machine', loadChildren: './arobjects/machine/machine.module#MachinePageModule' },
  { path: 'units', loadChildren: './units/units.module#UnitsPageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'vrview', loadChildren: './vrview/vrview.module#VrviewPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
