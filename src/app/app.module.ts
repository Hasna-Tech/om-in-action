import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './pages/game/game.component';
import { DragScrollModule } from 'ngx-drag-scroll';
import { QuizComponent } from './pages/quiz/quiz.component';


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    QuizComponent
  ],
  imports: [
    DragScrollModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
