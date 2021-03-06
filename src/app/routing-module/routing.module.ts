import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoComponent } from '../curso-module/curso-component/curso.component';
import { CursoListComponent } from '../curso-module/curso-list-component/curso-list.component';
import { AlumnoFormComponent } from '../alumno-module/alumno-form/alumno-form.component';
import { AlumnoListComponent } from '../alumno-module/alumno-list/alumno-list.component';
import { RouterModule, Routes } from '@angular/router';
import { AlumnoEditComponent } from '../alumno-module/alumno-edit/alumno-edit.component';
import { CursoModule } from '../curso-module/curso.module';

const ROUTES: Routes = [
  { path: 'curso/:id', component: CursoComponent },
  { path: 'cursos', component: CursoListComponent },
  { path: 'altaAlumno', component: AlumnoFormComponent },
  { path: 'alumnos', component: AlumnoListComponent },
  { path: 'alumno/:id', component: AlumnoEditComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RoutingModule { }
