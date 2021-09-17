import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COLLEGE_ENVIRONMENT } from './college.token';
import { CollegeEnvironment } from "./college.model";


@NgModule({})
export class EnvironmentModule {
  static withEnvironment(environment: CollegeEnvironment): ModuleWithProviders<EnvironmentModule> {
    return {
      ngModule: EnvironmentModule,
      providers: [
        {
          provide: COLLEGE_ENVIRONMENT,
          useValue: environment
        }
      ]
    }
  }
}
