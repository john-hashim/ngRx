import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
    {path: '', children: [
        {path: '', redirectTo:'login', pathMatch: "full"},
        {path: 'login', component: LoginComponent}
    ]}
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        LoginComponent
    ],
    exports: [

    ]
})
export class AuthModule {}