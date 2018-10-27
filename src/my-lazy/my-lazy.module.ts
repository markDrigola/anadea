import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ParentComponent} from './parent/parent.component';
import {ChildComponent} from './child/child.component';
import {MyLazyRoutingModule} from './my-lazy-routing.module';
import {ChildNextComponent} from "./child-2/child-next.component";
import {Child3Component} from "./child-3/child-3.component";
import {Child4Component} from "./child-4/child-4.component";
import {Child5Component} from "./child-5/child-5.component";

@NgModule({
    imports: [
        CommonModule,
        MyLazyRoutingModule
    ],
    declarations: [
        ParentComponent,
        ChildComponent,
        ChildNextComponent,
        Child3Component,
        Child4Component,
        Child5Component
    ]
})
export class MyLazyModule {}
