import {Factory as ManagerFactory} from "../src/Register/Manager/Factory";

import {Factory as LocalStorageFactory} from "../src/Register/Storage/Local/Factory";
import {Factory as SessionStorageFactory} from "../src/Register/Storage/Session/Factory";
import {Factory as VariableStorageFactory} from "../src/Register/Storage/Variable/Factory";

import {Factory as PermanentFactory} from "../src/Register/Permanent/Factory";
import {Factory as SessionFactory} from "../src/Register/Session/Factory";
import {Factory as VariableFactory} from "../src/Register/Variable/Factory";

import {Local} from "../src/Register/Storage/Local";
import {Session} from "../src/Register/Storage/Session";
import {Variable} from "../src/Register/Storage/Variable";

import {Permanent} from "../src/Register/Permanent";
import {Session as StorageSession} from "../src/Register/Session";
import {Variable as StorageVariable} from "../src/Register/Variable";

export function AngularFactoryFunctionRegisterPermanent(managerFactory: ManagerFactory, storage: Local) {
    return new PermanentFactory(
        managerFactory,
        storage
    ).create()
}

export function AngularFactoryFunctionRegisterSession(managerFactory: ManagerFactory, storage: Session) {
    return new SessionFactory(
        managerFactory,
        storage
    ).create()
}

export function AngularFactoryFunctionRegisterVariable(managerFactory: ManagerFactory, storage: Variable) {
    return new VariableFactory(
        managerFactory,
        storage
    ).create()
}

export function AngularFactoryFunctionLocalStorage() {
    return new LocalStorageFactory().create()
}

export function AngularFactoryFunctionSessionStorage() {
    return new SessionStorageFactory().create()
}

export function AngularFactoryFunctionVariableStorage() {
    return new VariableStorageFactory().create()
}

export const Providers = [
    ManagerFactory,
    {
        provide: 'LocalStorage',
        useFactory: AngularFactoryFunctionLocalStorage,
        deps: []
    },
    {
        provide: 'SessionStorage',
        useFactory: AngularFactoryFunctionSessionStorage,
        deps: []
    },
    {
        provide: 'VariableStorage',
        useFactory: AngularFactoryFunctionVariableStorage,
        deps: []
    },
    {
        provide: 'RegisterPermanent',
        useFactory: AngularFactoryFunctionRegisterPermanent,
        deps: [ManagerFactory, 'LocalStorage']
    },
    {
        provide: 'RegisterSession',
        useFactory: AngularFactoryFunctionRegisterSession,
        deps: [ManagerFactory, 'SessionStorage']
    },
    {
        provide: 'RegisterVariable',
        useFactory: AngularFactoryFunctionRegisterVariable,
        deps: [ManagerFactory, 'VariableStorage']
    }
];
