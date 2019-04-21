import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',  // default
    component: TabsPage,
    children: [
        { path: 'time', loadChildren: '../time/time.module#TimePageModule' },
        { path: 'learn', loadChildren: '../learn/learn.module#LearnPageModule' },
        { path: 'online', loadChildren: '../online/online.module#OnlinePageModule' },
        { path: 'discuss', loadChildren: '../discuss/discuss.module#DiscussPageModule' },
        { path: 'submit', loadChildren: '../submit/submit.module#SubmitPageModule' },
        { path: 'grade', loadChildren: '../grade/grade.module#GradePageModule' },

    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
