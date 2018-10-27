import {
    AfterContentInit,
    Component,
    Inject,
    OnChanges, OnDestroy,
    OnInit,
    SimpleChanges
} from '@angular/core';
import {Config} from "../../src/Config";
import {EventsManagement} from "../../src/EventsManagement";
import {BaseAbstract} from "../../src/EventsManagement/Event/BaseAbstract";
import {BaseInterface} from "../../src/EventsManagement/Observer/BaseInterface";
import {Metadata} from '../../src/Metadata';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/combineLatest';
// import {MyError} from "../../src/Error/MyError";
import {Factory as HandlerFactory} from "../../src/Error/Handler/Factory";
import {Factory, Factory as EntityFactory} from "../../src/Error/Entity/Factory";
import {Entity} from "../../src/Error/Entity";
import {TestErrorAdditionalTask} from "../TestErrorAdditionalTask";
import { TestWorkerStart } from "../OTHER-FILES/test-worker-start";
import {Environment} from "../../src/Environment";
import {Browser} from "../../src/Environment/Browser";
import {OperationSystem} from "../../src/Environment/OperationSystem";
import {Locale} from "../../src/Environment/Locale";
import {Screen} from "../../src/Environment/Screen";
import {Collector} from "../../src/Environment/Collector";
import {Manager as RegisterManager} from "../../src/Register/Manager";
import {Local} from "../../src/Register/Storage/Local";
// import {Factory as RegisterSimpleRecordFactory} from "../../src/Register/Unitsdfgsdf/Simple/Factory";
import {Permanent} from "../../src/Register/Permanent";
// import {Session} from "../../src/Register/Session";

import {Logger as LoggerManager} from '../../src/Logger';
import {Factory as CollectorFactory} from "../../src/Environment/Collector/Factory";
import {Session} from "../../src/Register/Session";
import {Backend} from "../../src/Logger/Stream/Backend";
import {Logging} from "../../src/Error/Task/Logging";
import {Factory as LoggingFactory} from "../../src/Error/Task/Logging/Factory";
import { MatDialog } from '@angular/material/dialog';
import {ModalComponent} from "../../src/Error/Task/DisplayToModal/Component/modal.component";
import {Factory as ProcessorFactory} from "../../src/Error/Processor/Factory";
import {FactoryBasedOfDefaults} from "../../src/Error/Processor/FactoryBasedOfDefaults";
import {Factory as DisplayToModalFactory} from "../../src/Error/Task/DisplayToModal/Factory";
import {Factory as KeySlashFactory} from "../../src/Cache/Storage/Adapter/KeySlash/Factory";
import {Factory as DateTimeCurrentFactory} from "../../src/DateTime/Current/Factory";
import {Current} from "../../src/DateTime/Current";
import {Factory as DateTimeFactory} from "../../src/DateTime/Factory";
import { Factory as VariableFactory} from '../../src/Cache/Storage/Variable/Factory';
import {Factory as TimerFactory} from "../../src/DateTime/Timer/Factory";
import {Permanent as PermanentCache} from "../../src/Cache/Permanent";


import * as momentNs from 'moment';
import {Runtime as RuntimeCache} from "../../src/Cache/Runtime";
const moment = momentNs;
import { Factory as GetFactory } from "../../src/Backend/Storage/RestCommands/Get/Factory";
// import { Factory as PostFactory } from "../../src/Server/Storage/RestCommands/Post/Factory";
import {Factory as CommandConnectorFactory} from "../../src/Backend/Rest/Connector/Factory";
import {Factory as SetFactory} from "../../src/Backend/Storage/RestCommands/Set/Factory";
import {Factory as DeleteFactory} from "../../src/Backend/Storage/RestCommands/Delete/Factory";
import {Factory as OverrideFactory} from "../../src/Backend/Storage/RestCommands/Override/Factory";
import {Connector as CommandConnector} from "../../src/Backend/Rest/Connector";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/combineLatest';
import {map} from "rxjs/operator/map";
import {pipe} from "rxjs/Rx";
import {Success as SuccessResponse} from "../../src/Backend/Rest/Response/Success";
import {Error as ErrorResponse} from "../../src/Backend/Rest/Response/Error";
import {Storage as RestStorage} from "../../src/Backend/Storage";
// import {Factory as TestMyResponseFactory} from "../../src/Backend/Rest/Response/TestMyResponse/Factory";


export class TestEvent extends BaseAbstract {
    constructor(name: string) {
        super(name);
    }
}

export class CallableFunction implements BaseInterface {

    constructor(private myFunc, private name) {}

    process(event: BaseAbstract) {
        this.myFunc(event);
    }

    getEventName() {
        return this.name;
    }
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    testMessage = '';
    // os2: Factory = new Factory();
    // err: MyError = new MyError('asdfsa', 'asdfasd', 'sdfasdf');
    constructor(

        @Inject('CONFIG') private config: Config,
        @Inject('EventsManagement') private man: EventsManagement,
        @Inject('CORE_METADATA') private test: Metadata,
        // private handelrFactory: HandlerFactory,
        private entityFactory: EntityFactory,
        // private activatedRoute: ActivatedRoute,
        // private router: Router,
        // private myActivatedRouter: ActivatedRouterService
        // public tst: ViewContainerRef
        // @Inject('BOOTSTRAP_TASKS') private testtask

        @Inject('Environment') private env: Environment,
        @Inject('Browser') private br: Browser,
        @Inject('OperationSystem') private oSystem: OperationSystem,
        @Inject('Locale') private loc: Locale,
        @Inject('Screen') private scr: Screen,
        private collectorFactory: CollectorFactory,
        // @Inject('Collector') private coll: Collector,
        // private collectorFactory: CollectorFactory,
        // @Inject('RegisterLocalStorage') private register: RegisterManager,
        @Inject('RegisterPermanent') private permanent: Permanent,

        @Inject('RegisterSession') private session: Session,
        // @Inject('RegisterSession') private runtime: Session,
        @Inject('Logger') private logger: LoggerManager,
        // @Inject('LocalStorage') private local: Local
        // private ts1: UnitFactory,
        // private ts2: RegisterSimpleRecordFactory,

        private myProcessorsFactory: ProcessorFactory,
        private myDefProcFactory: FactoryBasedOfDefaults,
        private myLoggingFactory: LoggingFactory,
        private myModalFactory: DisplayToModalFactory,
        private keySlashFactory: KeySlashFactory,
        private dateTimeCurrentFactory: DateTimeCurrentFactory,
        private dateTimeFactory: DateTimeFactory,
        private varFactory: VariableFactory,
        private timerFactory: TimerFactory,
        private runtimeCache: RuntimeCache,
        private permanentCache: PermanentCache,

        private gtf: GetFactory,
        private setFactory: SetFactory,
        private deleteFactory: DeleteFactory,
        private override: OverrideFactory,

        private commandConnector: CommandConnector,

        private http: HttpClient,

        private restStorage: RestStorage,

        // private testMyResponseFactory: TestMyResponseFactory,
    ) {
        let randomNumber = Math.round(Math.random() * 1000000);


        let setCommand = this.setFactory.create('/1/', {data: 'bla - bla - bla', id: 1});

        // this.commandConnector.process(setCommand).then((data) => {
        //     debugger
        //     console.log(data);
        // })
        // this.restStorage.set()
        // this.restStorage.delete('1').then((response: SuccessResponse) => {
        //     debugger
        //     console.log(response);
        // }).catch((err) => {
        //     debugger
        // })


        // this.restStorage.getAsync('/4/').subscribe((response: Success) => {
        //     console.log(response);
        // }, (err: Error) => {
        //     console.log(err);
        // });
// debugger
//         let data = this.restStorage.getSync('/2/', (resp: Success) => {
//             console.log(resp);
//             // debugger
//         }, (error: Error) => {
//             console.log(error);
//             // debugger
//         })
//
//         console.log(data);
//         debugger
        // this.restStorage.getSync('/4/', (resp: Success) => {
        //     console.log(resp);
        //     // debugger
        // }, (error: Error) => {
        //     console.log(error);
        //     // debugger
        // })


        // this.restStorage.getSync('/2/')((data) => {
        //     debugger
        //     console.log(data);
        // })

// debugger
        // this.restStorage.getAsync('/433/').subscribe((response: Success) => {
        //     console.log(response);
        // }, (err: Error) => {
        //     console.log(err);
        // })


        // this.commandConnector.process(setCommand).subscribe((response: Success) => {
        //     debugger
        //     console.log(response.getData());
        // }, (err: Error) => {
        //     debugger
        //     console.log(err.getErrors());
        // })

        // console.log(this.permanentCache.get('/asdasdasd/'));

        // console.log(this.session.get('blasasda', 'asdasdasd'));

        // let setCommand = this.setFactory.create();
        // setCommand.setBody({id: randomNumber, body: {title: 'Hello world!'}});
        // setCommand.setParams('posts/');
        //
        // let deleteCommand = this.deleteFactory.create();
        // deleteCommand.setParams(`posts/${randomNumber}`);
        //
        // let overrideCommand = this.override.create();
        // overrideCommand.setBody({ body: { title: 'refactor title! ' + randomNumber}});
        // overrideCommand.setParams('posts/3');

        // commandConnector.process(getCommand)
        //     .subscribe((data: ResponseInterface<{id: number, title: string}>) => {
        //         console.log('GET ', data);
        //     });

        // commandConnector.process<SuccessInterface>(getCommand)
        //     .subscribe((data) => {
        //         console.log('GET ', data);
        //     });

        // console.log('1');
        //
        // let ttt = new Observable((observer) => {
        //     console.log('2');
        //     observer.next('trololo')
        // });
        // console.log('3');
        // ttt.subscribe((data) => {
        //     console.log('4');
        // });
        // console.log('5');

        // commandConnector.process(getCommand).subscribe((response: Success) => {
        //     debugger
        //     console.log(response.getData());
        // }, (err: Error) => {
        //     debugger
        //     console.log(err.getErrors());
        // })


        // .subscribe((response: SuccessInterface) => {
            //     console.log('GET ', response);
            //
            //     if (response.data) {
            //         console.log(response);
            //     }
            //
            // }, (error) => {
            //     console.log(error);
            // });

        // commandConnector.process(setCommand)
        //     .subscribe((data: ResponseInterface<{id: number, title: string}>) => {
        //         console.log('POST ', data);
        //     });
        //
        // commandConnector.process(overrideCommand)
        //     .subscribe((data: ResponseInterface<{id: number, title: string}>) => {
        //         console.log('OVERRIDE ', data.body.title);
        //     });

        // commandConnector.process(deleteCommand)
        //     .subscribe((data: ResponseInterface<{id: number, title: string}>) => {
        //         console.log('DELETE ', data);
        //     });

        // commandConnector.process(this.gtf.create('posts/2'))
        //     .subscribe((data: ResponseInterface<{id: number, title: string}>) => {
        //         console.log('GET BY ID ', data.body);
        //     });

        // commandConnector.process(this.ptf.create('posts/', {id: 1, body: {title: 'Hello world 2!'}}))
        //     .subscribe((data) => {
        //         console.log('POST ', data);
        //     });
        //
        // commandConnector.process(this.ptf.create('posts/', {id: Math.random(), body: {title: 'Hello world!'}}))
        //     .subscribe((data) => {
        //         console.log('POST ', data);
        //     });
        //
        // commandConnector.process(this.putf.create('posts/3', { body: { title: 'refactor title!'} }))
        //     .subscribe((data) => {
        //         console.log('PUT ', data);
        //     });
        //
        // commandConnector.process(this.delF.create('posts/1'))
        //     .subscribe((data) => {
        //         console.log('DELETE ', data);
        //     })
        // console.log(this.runtimeCache.set('/test/data/key/', {test: 'data'}, 2600, ["testTeg"]));
        // debugger
        // console.log(this.runtimeCache.get('/test/data/key/'));
        // console.log(this.runtimeCache.getByTags(["testTeg"]));
        // debugger
        // // this.runtimeCache.removeByGroup('/test/');
        // debugger
        // // console.log(this.runtimeCache.getByTags(['/test/']));
        // debugger
        // console.log(sessionStorage);
        // this.runtimeCache.removeByGroup('/test/');
        // console.log(sessionStorage);
        // debugger
        //

        // console.log(this.permanentCache.set('/test/data/key/', {test: 'data'}, 2600, ['myTag']));
        // console.log(this.permanentCache.set('/test/data2/key2/', {test: 'data2'}, 2600, ['myTag']));
        // debugger
        // this.permanentCache.remove('/test/data2/key2/');
        // console.log(this.permanentCache.getByTags(['myTag']));
        // debugger
        // // this.permanentCache.clear();
        // debugger
        // console.log(localStorage);


        // console.log(this.dateTimeCurrentFactory.create());
        // let dateTampstamp = this.dateTimeFactory.createFromTimestamp(Date.now())
        // console.log(dateTampstamp);
        // let date = new Date().toUTCString();
        // console.log(this.dateTimeFactory.createFromString(date));
        //
        // let timer = this.timerFactory.create();
        // //
        // timer.start();
        //
        // setTimeout(() => {
        //     console.log(timer.getMilliSecondsPassed());
        // }, 2023);
        // console.log(this.dateTimeCurrentFactory.create().getCurrentTime());
        // console.log(this.dateTimeCurrentFactory.create().getTimeStamp());
        // console.log(this.dateTimeFactory.createFromString(this.dateTimeCurrentFactory.create().getCurrentTime()));
        // console.log(this.dateTimeFactory.createFromTimestamp(this.dateTimeCurrentFactory.create().getTimeStamp()));

        // let variableCache = this.varFactory.create();
        // variableCache.set('/test/key/one/', {data: 'test data'}, 2600,['test', 'key', 'test', 'one', 'key'])
        // variableCache.set('/two/key/bounce/', {data: 'test data2'}, 2600,['bounce', 'key', 'test', 'two', 'key'])
        // //
        // //
        // //
        // // debugger
        // console.log(variableCache.get('/test/key/one/'));
        // console.log(variableCache.remove('/test/key/one/'));
        // console.log(variableCache.getByTags(['one', 'bounce']));




        // let current: Current = this.dateTimeCurrentFactory.create();
        //
        // let tamp = this.momentFactory.create().getTimeStamp();
        //
        // console.log(this.dateTimeFactory.createFromTimestamp(tamp, 'MM/DD/YYYY'));
        // console.log(this.dateTimeFactory.createFromString(current.getCurrentTime(), 'MM/DD/YYYY hh'));
        // console.log(this.momentFactory.create().getCurrentTime());
        // let keySlash = keySlashFactory.create();
        //
        // keySlash.set('/test/key/one/', {data: 'test'}, ['test', 'key']);
        // console.log(this.test);
        // console.log(this.collectorFactory.create().getInfo());

        // this.logger.process(this.ts3.createErrorTypeRecord('test logger', {data: 'My data'}), 'test group');
        // this.logger.process('test logger', LoggerManager.TYPE_ERROR, {data: 'My data'}, 'test group');
        // this.session.set(this.unitFactory.create('group-1', 'key-1', {value: 'Mark 2'}));
        //
        // console.log(this.session.get('group-1', 'key-1').getValue());

        // this.permanent.set('group-1', 'key-1', {value: 'Mark 2'});
        //
        // console.log(this.permanent.get('group-1', 'key-1'));
        //
        //
        // this.session.set('session-group', 'session-key', {data: 'test'});
        // console.log(this.session.get('session-group', 'session-key'));
        //
        // console.log(this.permanent.get('group-1', 'key-1').getValue());


        // console.log(this.collectorFactory.create().getInfo());


        // console.log(this.collectorFactory.create().getInfo());

        // this.logger.consoleLogging(logerSimpleRecord, 'test grouyp');

        // console.log(this.runtime.set(this.ts2.create('runtime', 'my-key', 'test 2')));
        // console.log(this.runtime.get('runtime', 'my-key'));
        //
        // console.log(this.permanent.set(this.ts2.create('first', 'my-key', 'test')));
        // console.log(this.permanent.get('test', 'some_key').getUnit().getValue());
        // debugger
        // console.log(this.register.set(this.ts2.create('test', 'some_key', {test: 'Mark'})));
        // console.log(this.register.get('test', 'some_key'));
        // debugger
        // console.log(this.err.getMessage());
        // console.log(this.err.getMessage());
        // console.log(this.coll.getInfo());
        // console.log(this.scr.getScreenSize());
        // console.log(this.loc.getTimeZone());
        // console.log(this.oSystem.getOperationSystemPlatform());
        // console.log(this.oSystem.getOperationSystem());
        // console.log(this.os2.create('asdfasdf', 'sdfasdf'));
        // console.log(this.br.getBrowserName());
        // console.log(this.br.getBrowserVersion());
        // console.log(this.br.getBrowserMajorVersion());
// debugger
//         console.log(this.env.getEnvironment());
//         console.log(this.env.isDevelopmentEnvironment());
//         console.log(this.env.isProductionEnvironment());

        // const testWorker = new TestWorkerStart();
        // console.log(this.router.url);
        // this.router.subscribe((data) => {
        //     console.log('asdfasdfasdf', data);
        // });
        // this.router.changes.subscribe((val) => {
        //         val.log()
        // })
        // this.router.events
        //     .filter((event) => event instanceof NavigationEnd)
        //     .subscribe((event) => {
        //         this.activatedRoute.data.subscribe((scope) => {
        //             this.myActivatedRouter.setCurrentDataScope(scope);
        //         });
        //     });
        // this.router.events.subscribe((data) => {
        //     console.log(data);
        // })

        // this.testOutlet.createComponent()
        // console.log(this.tst);
        // throw new Error('sdsfgh');
        // window.onerror = function(message, url, lineNumber) {
        //     debugger
        //     alert("Поймана ошибка, выпавшая в глобальную область!\n" +
        //         "Сообщение: " + message + "\n(" + url + ":" + lineNumber + ")");
        // };

        // console.log(this.bootstrap);
        // console.log(this.testtask);


        // class Test<T> {
        //     test: T;
        //
        //     getTest(data: T): T {
        //         return this.test;
        //     }
        // }
        //
        //
        // const data = new Test<number>();
        // // data.test = '10';
        //
        // console.log(data.getTest(123));
        // data.test = 123;
        //
        //
        // class Test1 {
        //     static names: string = 'sadfasdfds';
        //     test: string;
        //
        //     constructor(name: string) {
        //         this.test = name;
        //     }
        // }
        //
        // let t1: Test1;
        // let t2: typeof Test1 = Test1;
        // // console.log(t2.names);
        // // debugger
        // // console.log(Test1.names);
        // // let t3: Test1 = new t2('Mark');
        //
        // // console.log('My test classes type: ', t2 === t3)
        //
        //
        // class Cars {
        //     private name: string;
        //
        //     constructor(name: string) {
        //         this.name = name;
        //     }
        //
        //     getName() {
        //         return this.name;
        //     }
        // }
        //
        // class BMW extends Cars {
        //     constructor(name) {
        //         super(name);
        //     }
        // }
        //
        //
        // const bmw1: BMW = new BMW('BMW');
        // console.log(bmw1.getName());
        //
        //
        // abstract class MyAbstract {
        //     readonly abstract name: string;
        //
        //     abstract getName();
        // }
        //
        // class T1 extends MyAbstract {
        //     name: string = 'sadas';
        //
        //     getName() {
        //         return this.name;
        //     }
        // }
        //
        // const tt = new T1();
        // console.log(tt.getName());
    }



    async ngOnInit() {
    // async ngOnInit(): void {
    //     debugger
    //     // debugger
    //     await this.restStorage.get('').then((response: SuccessResponse) => {
    //         // let myResponse = this.testMyResponseFactory.create(response);
    //         console.log(response);
    //         // debugger
    //     }).catch((data) => {
    //         console.log(data);
    //         // debugger
    //     })
    //
    //     await this.restStorage.set('', {test: "test"}).then((response: SuccessResponse) => {
    //         // let myResponse = this.testMyResponseFactory.create(response);
    //         console.log(response);
    //         // debugger
    //     }).catch((err: ErrorResponse) => {
    //         console.log(err);
    //         // debugger
    //     });




        // let xhr = new XMLHttpRequest();
        //
        // xhr.open('POST', 'http://10.0.30.39/m2epro/a.yatin/other_projects/simple_rest/', true);
        //
        //
        // xhr.send(JSON.stringify({error: '123'}));
        // xhr.onload = function(data) {
        //     console.log(data);
        //     debugger
        // }
        // console.log(xhr);
        // debugger

        // this.http.get<any>('https://jsonplaceholder.typicode.com/posts', { observe: 'response' }).subscribe((resp: HttpResponse<any>) => {
        //     const keys = resp.headers.keys()
        //     console.log(resp);
        //     debugger
        // }, (err) => {
        //     console.log(err);
        //     debugger
        // })
        //
        // this.http.post('http://localhost:81/test-frame/', {error: '123'}).subscribe((data) => {
        //     console.log(data);
        //     debugger
        // }, (err) => {
        //     console.log(err);
        //     debugger
        // })
        //
        // this.http.post('https://jsonplaceholder.typicode.com/posts', {id: 2, error: '123'}).subscribe((data) => {
        //     console.log(data);
        //     debugger
        // }, (err) => {
        //     console.log(err);
        //     debugger
        // })



        // await this.restStorage.get('/2/').then((data) => {
        //     console.log(data);
        //     debugger
        // }).catch((err) => {
        //     console.log(err);
        //     debugger
        // });
        //
        // debugger
        // this.restStorage.get('/2sda/').then((data) => {
        //     console.log(data);
        //     debugger
        // }, (err) => {
        //     console.log(err);
        //     debugger
        // })
        //
        // debugger

        // let s1 = this.http.get('https://jsonplaceholder.typicode.com/posts?id=1&id=2');
        // let s1 = this.http.get('https://jsonplaceholder.typicode.com/storage?key=posts(1,2,3)&key=comments').subscribe((data) => {
        // // let s1 = this.http.get('https://jsonplaceholder.typicode.com/posts?id=1&id=2').subscribe((data) => {
        //     console.log(data);
        // })
        // let s2 = this.http.get('https://jsonplaceholder.typicode.com/posts/');
        //
        // Observable.combineLatest(
        //     s1,
        //     s2
        // ).subscribe((data) => {
        //     console.log(data);
        // });
        //

        // console.log(this.config.get());
        // throw new Error('Test');

        //console.log('ok11111');
        // console.log(this.test.get('/test/'));
        // sdfasdf;
        //console.log(this.config.get());
        // const test = new CallableFunction((event) => {
        //     debugger
        //     console.log(event);
        // }, 'TestEvent');


       // this.man.attach(test, 'first');
        // this.man.attach(test,'first');

        // this.man.attach(test,'first');
        // const callableFunc2 = new CallableFunction((event) => {
        //     console.log(event);
        // }, 'AboutEvent');
        //

        // const callableFunc = new CallableFunction((event) => {
        //     console.log(event);
        // }, 'CookieTime');
        //

        // this.man.attach(callableFunc, 'first');
        // this.man.attach(callableFunc2, 'before_event');
        //
        // // this.man.attach(callableFunc, '');
        //
        // this.man.dispatch(new TestEvent('TestEvent'), 'first');
        // this.man.dispatch(new TestEvent('TestEvent'), 'first');
        // this.man.dispatch(new TestEvent('TestEvent'), 'first');

        //this.man.detach(test, 'first');

        //this.man.dispatch(new TestEvent('TestEvent'), 'first');


        // setTimeout(() => {
        //     sadfsad;
        // }, 2000)

        // this.man.attach(callableFunc, 'expirationTime');

        // console.log(this.config);
    }


    // getConfigResponse(): Observable<HttpResponse<Config>> {
    //     return this.http.get<Config>(
    //         this.configUrl, { observe: 'response' });
    // }
    //
    errorThrow() {
        try {
            // asdasdsa;
        } catch (e) {
            // debugger
            let displayToModalTask = this.myModalFactory.create({
                closing: true
            });

            // let processor = this.myProcessorsFactory.create([this.myLoggingFactory.create(), displayToModalTask]);
            let entity: Entity = this.entityFactory.create(e.message, e.stack);
            // processor.process(entity);
            let processor = this.myDefProcFactory.create();
            processor.process(entity);
            // debugger

            // console.dir(e);
            //
            // const err: EvalError = new Error('My error');
            // console.dir(err);
            // throw err;

            // const loggerSimpleRecord = this.ts3.create(e.message, 'error', e.stack);
            // // debugger
            //
            // this.logger.process(loggerSimpleRecord, 'test grouyp');
            // let err = new MyError(e.name, e.message, e.stack);
            // console.log(err.name);



            // throw err;
        }


        throw new Error();
        // let entity: Entity = this.entityFactory.create('My error', 'my stack');
        // let errorHandler = this.handelrFactory.create();
        // errorHandler.process(entity, [Logging, BackendLogging])
        // this.handelrFactory.create().process(error, [TestErrorAdditionalTask]);
        // throw new Error('My error');
        // let err = new Error('My error');

    }


    getStorageData() {
        let getCommand = this.gtf.create('/4/');
        let setCommand = this.setFactory.create('/3/', {data: 'blalala'});

        this.commandConnector.process(getCommand).then((response: SuccessResponse) => {
            // debugger
            console.log(response.getData());
        }, (err: ErrorResponse) => {
            // debugger
            console.log(err.getErrors());
        })
    }

    getSyncTest() {
        // this.restStorage.getSync('/2/', (data: Success) => {
        //     console.log(data);
        // })
    }
}
