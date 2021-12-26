import { NgModule } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { MainComponent } from './main/main.component';
import { ViewstdComponent } from './viewstd/viewstd.component';
import {TeacherProfileComponent} from './teacher-profile/teacher-profile.component';
import {SignupComponent} from './signup/signup.component';
import {NavigationExtras} from '@angular/router'; 
import {ViewstdServiceComponent} from './viewstd-service/viewstd-service.component';
import {AdmincomponentComponent} from './admincomponent/admincomponent.component';
import {ViewClassesComponent} from './view-classes/view-classes.component';
import { UpdateStdComponent } from './update-std/update-std.component';
const routes: Routes = [  
  {
    path:'Teacher',
    component: TeacherComponent,
    children:[{
      path:'ViewStudent',
      // component:StudentComponent
      component: ViewstdComponent
    },
    {
      path: 'Signup',
      component: SignupComponent
    },
    {
      path:'ViewProfile',
      component: TeacherProfileComponent
    },
    {
      path: "stdexpress",
      component: AdmincomponentComponent
    },
    {
      path:"ViewClasses",
      component: ViewClassesComponent
    }
    ]
  },
  {
    path:'Student',
    component:StudentComponent,
    children:[{
      path: 'viewStdService',
      component: ViewstdServiceComponent
    },
    {
      path: 'updateStd',
      component: UpdateStdComponent
    }
    ]
  },
  {
    path:'',
    component:MainComponent    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
