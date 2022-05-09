import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { CustomInputComponent } from '../components/custom-input/custom-input.component';
import { Input3nComponent } from '../components/input3n/input3n.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, CustomInputComponent,Input3nComponent]
})
export class HomePageModule {}
