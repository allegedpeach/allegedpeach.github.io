import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HexaComponent } from './hexa/hexa.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { InformationComponent } from './information/information.component';
import { IncomeComponent } from './income/income.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'hexa', component: HexaComponent },
  { path: 'income', component: IncomeComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'information', component: InformationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
