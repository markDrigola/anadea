import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, Injector, NgModule} from '@angular/core';
import {AppComponent} from "../public/app-component/app.component";
import {Providers as CoreBootstrapProviders} from "../di_providers/bootstrap";
import {Providers as MetadataProviders} from "../di_providers/metadata";
import {Providers as ConfigProviders} from "../di_providers/config";
import {Providers as GeneralProviders} from "../di_providers/general";
import {Providers as EnvironmentProviders} from "../di_providers/environment";
import {Providers as RegisterProviders} from "../di_providers/register";
import {Providers as LoggerProviders} from "../di_providers/logger";
import {TestBaseProviders} from "../public/base-test/test-base-providers";
import {Providers as EventManagerProviders} from "../di_providers/event_management";
import {StartComponent} from '../public/start-component/start.component';
import {Providers as ErrorProviders} from "../di_providers/error";
import {Providers as CacheProviders} from "../di_providers/cache";
import {Providers as DateTimeProviders} from "../di_providers/date_time";
import {Providers as CroneProviders} from "../di_providers/background_worker";
import {Providers as CommandsProviders} from "../di_providers/backend";
import {DisplayModule} from "./Error/Task/DisplayToModal/display.module";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {TestComponent} from "../public/test-component/test.component";
import {TestModuleModule} from "../public/test-module.module";
import {HomeComponent} from "../public/home/home.component";
import {MaterialModule} from "../public/material.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ModalComponent} from "./Error/Task/DisplayToModal/Component/modal.component";
import {HttpClientModule} from "@angular/common/http";

declare var Promise;

@NgModule({
    declarations: [
        AppComponent,
        StartComponent,
        TestComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        DisplayModule,
        FormsModule,
        TestModuleModule,
        MaterialModule,
        HttpClientModule
    ],
    providers: [
        CoreBootstrapProviders,
        MetadataProviders,
        ConfigProviders,
        GeneralProviders,
        // TestBaseProviders,
        EventManagerProviders,
        EnvironmentProviders,
        RegisterProviders,
        LoggerProviders,
        ErrorProviders,
        CacheProviders,
        DateTimeProviders,
        CroneProviders,
        CommandsProviders,

    ],
    entryComponents: [
        AppComponent,
        StartComponent,
        ModalComponent
    ]
})
export class AppModule {

    constructor(
        // private test: TestClass
    ) {
        // this.test
        // this.getBootstrapRootComponentName();
    }
    ngDoBootstrap(app) {
        this.getBootstrapRootComponentName()
            .then((name) => {
                this.bootstrapRootComponent(app, name);
            });
    }

    getBootstrapRootComponentName() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('app-root');
            }, 1000);
        });
    }

    bootstrapRootComponent(app, name) {
        const options = {
            'app-root': AppComponent,
            'app-start': StartComponent
        };

        const componentElement = document.createElement(name);
        document.body.insertBefore(componentElement, document.body.firstChild);

        const component = options[name];
        app.bootstrap(component);
    }
}

