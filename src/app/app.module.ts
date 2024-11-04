import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductComponent } from './components/product/product.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ViewProductsComponent } from './components/view-products/view-products.component';
import { AdminComponent } from './components/admin/admin.component';
import { DemoFormComponent } from './components/demo-form/demo-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './components/add-product/add-product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { CustomEventComponent } from './components/custom-event/custom-event.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { CoditionalRenderComponent } from './components/coditional-render/coditional-render.component';
import { StyleDirectiveComponent } from './components/style-directive/style-directive.component';
import { TestersComponent } from './components/testers/testers.component';
import { NgClassExampleComponent } from './components/ng-class-example/ng-class-example.component';
import { NgOnInitComponent } from './components/lifecycle/ng-on-init/ng-on-init.component';
import { NgOnChangesParentComponent } from './components/lifecycle/ng-on-changes-parent/ng-on-changes-parent.component';
import { NgOnChangesChildComponent } from './components/lifecycle/ng-on-changes-child/ng-on-changes-child.component';
import { ValidationShorthandComponent } from './components/validation-shorthand/validation-shorthand.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { StepperComponentComponent } from './components/stepper-component/stepper-component.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { StepperFormComponent } from './components/stepper-form/stepper-form.component';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {
  MatDatepicker,
  MatDatepickerModule,
} from '@angular/material/datepicker';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    ContentComponent,
    FooterComponent,
    ProductComponent,
    AboutComponent,
    HomeComponent,
    ViewProductsComponent,
    AdminComponent,
    DemoFormComponent,
    AddProductComponent,
    UpdateProductComponent,
    CustomEventComponent,
    ParentComponent,
    ChildComponent,
    CoditionalRenderComponent,
    StyleDirectiveComponent,
    TestersComponent,
    NgClassExampleComponent,
    NgOnInitComponent,
    NgOnChangesParentComponent,
    NgOnChangesChildComponent,
    ValidationShorthandComponent,
    StepperComponentComponent,
    StepperFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAccordion,
    MatExpansionModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    MatDatepicker,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
