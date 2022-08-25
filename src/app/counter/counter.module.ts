import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { CounterButtonsComponent } from "./counter-buttons/counter-buttons.component";
import { CounterOutputComponent } from "./counter-output/counter-output.component";
import { CounterComponent } from "./counter/counter.component";
import { CustomCounterComponent } from "./custom-counter/custom-counter.component";
import { counterReducer } from "./state/counter.reducers";
import { COUNTER_STATE_NAME } from "./state/counter.selectors";

const router: Routes = [
    {
        path: '',
        component: CounterComponent
    }
]

@NgModule({
    imports: [
        CommonModule, 
        RouterModule.forChild(router),
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forFeature(COUNTER_STATE_NAME, counterReducer)
    ],
    declarations: [
        CounterButtonsComponent,
        CounterOutputComponent,
        CustomCounterComponent,
        CounterComponent,
    ]
})

export class CounterModule {

}