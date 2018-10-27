import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {StartComponent} from "../public/start-component/start.component";
import {TestComponent} from "../public/test-component/test.component";
import {HomeComponent} from "../public/home/home.component";

const routes: Routes = [
    {
        path: 'start',
        component: StartComponent,
        // outlet: 'myOutlet'
    },
    {
        path: 'test',
        component: TestComponent,

    },
    {
        path: 'lazy',
        loadChildren: './my-lazy/my-lazy.module#MyLazyModule',
    },
    {
        path: '',
        component: HomeComponent,
        // data: {
        //     scope: ApplicationScopes.MODAL_ERROR
        // },
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes,
        // {
        //     enableTracing: true, // <-- debugging purposes only
        // }
        )],
    exports: [RouterModule]
})
export class AppRoutingModule {}
