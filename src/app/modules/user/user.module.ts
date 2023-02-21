import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';
import { CreditCardsComponent } from './credit-cards/credit-cards.component';
import { AddCardComponent } from './credit-cards/add-card/add-card.component';
import { UpdateCardComponent } from './credit-cards/update-card/update-card.component';
import { DeleteCardComponent } from './credit-cards/delete-card/delete-card.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ProfileUpdateComponent,
    CreditCardsComponent,
    AddCardComponent,
    UpdateCardComponent,
    DeleteCardComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CreditCardsComponent
  ]
})
export class UserModule { }
