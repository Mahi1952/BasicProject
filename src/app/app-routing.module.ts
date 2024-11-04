import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ViewProductsComponent } from './components/view-products/view-products.component';
import { AdminComponent } from './components/admin/admin.component';
import { DemoFormComponent } from './components/demo-form/demo-form.component';
import { AdminGuard } from './guards/adminguard';
import { TestersComponent } from './components/testers/testers.component';

const routes: Routes = [
  { path: 'home', component: DemoFormComponent },
  { path: 'about', component: AboutComponent },
  { path: 'viewproducts', component: ViewProductsComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AdminGuard()] },
  { path: 'test', component: TestersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
