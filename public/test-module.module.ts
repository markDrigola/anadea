import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {NewTest2Component} from "./new-test2/new-test2.component";
import {NewTestComponent} from "./new-test/new-test.component";

export const routes: Routes = [
    {
        path: 'new-test2',
        component: NewTest2Component,
        pathMatch: 'full'
    },
    {
        path: 'new-test',
        component: NewTestComponent,
        pathMatch: 'full',
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        NewTest2Component,
        NewTestComponent
    ],
    providers: []
})
export class TestModuleModule {

}