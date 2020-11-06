import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { TodoModule } from './todo/todo.module';
import { MaterialModule } from './material.module';
import { EffectsModule } from '@ngrx/effects';
import { todoReducer } from './todo/reducers/todo.reducer';
import { TodoEffectService } from './todo/effects/todo-effect.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TodoModule,
    MaterialModule,
    StoreModule.forRoot({ todos: todoReducer }, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([TodoEffectService]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
