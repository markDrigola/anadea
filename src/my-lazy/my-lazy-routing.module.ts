import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ParentComponent} from './parent/parent.component';
import {ChildComponent} from './child/child.component';
import {ChildNextComponent} from "./child-2/child-next.component";
import {Child3Component} from "./child-3/child-3.component";
import {Child4Component} from "./child-4/child-4.component";
import {Child5Component} from "./child-5/child-5.component";

export const routes: Routes = [
    {
        path: 'child-2', component: ChildNextComponent, pathMatch: 'full'
    },
    {
        path: '', component: ParentComponent, children: [
            {
                path: 'child-3', component: Child3Component
            },
            {
                path: ':id', component: ChildComponent, children: [
                    {
                        path: 'child-4', component: Child4Component
                    },
                    {
                        path: 'child-5', component: Child5Component
                    }
                ]
            },
        ]
        // , data: {
        //     scope: ApplicationScopes.NOTIFICATION_ERROR
        // }
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MyLazyRoutingModule {

}
