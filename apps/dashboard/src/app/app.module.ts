import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CollegesComponent } from './colleges/colleges.component';
import { CollegeDetailsComponent } from './colleges/college-details/college-details.component';
import { CollegeListComponent } from './colleges/college-list/college-list.component';
import { MaterialModule } from "@colleges/material";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreDataModule } from "@colleges/core-data";
import { CoreStateModule } from "@colleges/core-state";
import { CommonModule } from '@angular/common';
import { environment } from '../environments/environment';
import { EnvironmentModule } from '@colleges/environment';
import { UiLoginModule } from '@colleges/ui-login';
import { CollegeComponent } from './college/college.component';
import { CollegeInfoComponent } from './college/college-info/college-info.component';

@NgModule({
  declarations: [AppComponent, CollegesComponent, CollegeDetailsComponent, CollegeListComponent, CollegeInfoComponent, CollegeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    BrowserAnimationsModule,
    CoreDataModule,
    CoreStateModule,
    MaterialModule,
    UiLoginModule,
    EnvironmentModule.withEnvironment(environment),
    FormsModule,
    ReactiveFormsModule,
    CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}