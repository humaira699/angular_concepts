import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { ViewstdComponent } from './viewstd/viewstd.component';
import { TeacherProfileComponent } from './teacher-profile/teacher-profile.component';
import { SignupComponent } from './signup/signup.component';
import { TestComponent } from './test/test.component';
import { AppHighlightDirective } from './app-highlight.directive';
import { ViewstdServiceComponent } from './viewstd-service/viewstd-service.component';
import { AdmincomponentComponent } from './admincomponent/admincomponent.component';
import { ViewClassesComponent } from './view-classes/view-classes.component';
import { UpdateStdComponent } from './update-std/update-std.component';

@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
    StudentComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ViewstdComponent,
    TeacherProfileComponent,
    SignupComponent,
    TestComponent,
    AppHighlightDirective,
    ViewstdServiceComponent,
    AdmincomponentComponent,
    ViewClassesComponent,
    UpdateStdComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
