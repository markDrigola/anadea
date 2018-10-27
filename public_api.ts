// general +
export {Providers as CoreGeneralProviders} from './di_providers/general';

// ########################################

// objectWrapper +
export {Factory as ObjectWrapperFactory} from './src/ObjectWrapper/Factory';
export {ObjectWrapper} from './src/ObjectWrapper';

// ########################################

// metadata +
export {Providers as CoreMetadataProviders} from './di_providers/metadata';

export {Factory as CoreMetadataFactory} from './src/Metadata/Factory';
export {Metadata} from './src/Metadata';

// ########################################

// config +
export {Providers as CoreConfigProviders} from './di_providers/config';

export {Registration as CoreConfigRegistration} from './src/Config/Registration';

export {Factory as ConfigFactory} from './src/Config/Factory';
export {Config} from './src/Config';

// ########################################

// bootstrap +
export {Providers as CoreBootstrapProviders} from './di_providers/bootstrap';

export {BOOTSTRAP_REGISTRATIONS} from './di_providers/bootstrap';
export {BOOTSTRAP_TASKS} from './di_providers/bootstrap';

export {Registration as CoreBootstrapRegistration} from './src/Bootstrap/Registration';

export {Bootstrap as CoreBootstrap} from './src/Bootstrap';

export {BaseInterface as ICoreBootstrapRegistration} from './src/Bootstrap/Registration/BaseInterface';
export {BaseInterface as IBootstrapTask} from './src/Bootstrap/Task/BaseInterface';

export {Factory as ResultFactory} from './src/Bootstrap/Result/Factory';
export {Result} from './src/Bootstrap/Result';

// ########################################

// eventManagement +
export {Providers as EventManagementProviders} from './di_providers/event_management';

export {Factory as EventsManagementFactory} from './src/EventsManagement/Factory';
export {EventsManagement} from './src/EventsManagement';

export {Factory as CoreEventAboutEventFactory} from './src/EventsManagement/Event/AboutEvent/Factory';
export {AboutEvent as CoreEventAboutEvent} from './src/EventsManagement/Event/AboutEvent';

export {BaseAbstract as EventBaseAbstract} from './src/EventsManagement/Event/BaseAbstract';

export {BaseInterface as ObserverBaseInterface} from './src/EventsManagement/Observer/BaseInterface';

// ########################################

// environment +
export {Providers as EnvironmentProviders} from './di_providers/environment';

export {Factory as EnvironmentFactory} from './src/Environment/Factory';
export {Environment} from './src/Environment';

export {Factory as CollectorFactory} from './src/Environment/Collector/Factory';
export {Collector} from './src/Environment/Collector';

export {Factory as BrowserFactory} from './src/Environment/Browser/Factory';
export {Browser} from './src/Environment/Browser';

export {Factory as LocaleFactory} from './src/Environment/Locale/Factory';
export {Locale} from './src/Environment/Locale';

export {Factory as ScreenFactory} from './src/Environment/Screen/Factory';
export {Screen} from './src/Environment/Screen';

export {Factory as OperationSystemFactory} from './src/Environment/OperationSystem/Factory';
export {OperationSystem} from './src/Environment/OperationSystem';

// ########################################

// cache +
export {Providers as CacheProviders} from './di_providers/cache';

export {Factory as PermanentCacheFactory} from './src/Cache/Permanent/Factory';
export {Permanent as PermanentCache} from './src/Cache/Permanent';

export {Factory as RuntimeCacheFactory} from './src/Cache/Runtime/Factory';
export {Runtime as RuntimeCache} from './src/Cache/Runtime';

export {Factory as RuntimeCacheControllerFactory} from './src/Cache/Runtime/Controller/Factory';
export {Controller as RuntimeCacheController} from './src/Cache/Runtime/Controller';

// ########################################

// register +
export {Providers as RegisterProviders} from './di_providers/register';

export {Factory as RegisterManagerFactory} from './src/Register/Manager/Factory';
export {Manager as RegisterManager} from './src/Register/Manager';

export {Factory as RegisterPermanentFactory} from './src/Register/Permanent/Factory';
export {Permanent as RegisterPermanent} from './src/Register/Permanent';

export {Factory as RegisterSessionFactory} from './src/Register/Session/Factory';
export {Session as RegisterSession} from './src/Register/Session';

export {Factory as RegisterVariableFactory} from './src/Register/Variable/Factory';
export {Variable as RegisterVariable} from './src/Register/Variable';

export {Factory as RegisterStorageLocalFactory} from './src/Register/Storage/Local/Factory';
export {Local as RegisterStorageLocal} from './src/Register/Storage/Local';

export {Factory as RegisterStorageSessionFactory} from './src/Register/Storage/Session/Factory';
export {Session as RegisterStorageSession} from './src/Register/Storage/Session';

export {Factory as RegisterStorageVariableFactory} from './src/Register/Storage/Variable/Factory';
export {Variable as RegisterStorageVariable} from './src/Register/Storage/Variable';

export {BaseInterface as RegisterStorageBaseInterface} from './src/Register/Storage/BaseInterface';

// ########################################

// background worker +
export {Providers as BackgroundWorkerProviders} from './di_providers/background_worker';

export {Factory as BackgroundWorkerProcessorFactory} from './src/BackgroundWorker/Processor/Factory';
export {Processor as BackgroundWorkerProcessor} from './src/BackgroundWorker/Processor';

export {Factory as BackgroundWorkerAsyncLockFactory} from './src/BackgroundWorker/AsyncLock/Factory';
export {AsyncLock as BackgroundWorkerAsyncLock} from './src/BackgroundWorker/AsyncLock';

export {Factory as BackgroundWorkerDefinitionTaskFactory} from './src/BackgroundWorker/Definition/Task/Factory';
export {Task as BackgroundWorkerDefinitionTask} from './src/BackgroundWorker/Definition/Task';

export {BaseAbstract as BackgroundWorkerTaskBaseAbstract} from './src/BackgroundWorker/Task/BaseAbstract';

// ########################################

// error +
export {Providers as ErrorProviders} from './di_providers/error';

export {Factory as ErrorProcessorFactory} from './src/Error/Processor/Factory';
export {Processor} from './src/Error/Processor';

export {FactoryBasedOfDefaults as ProcessorFactoryBasedOfDefaults} from './src/Error/Processor/FactoryBasedOfDefaults';

export {ErrorInterface as AngularErrorInterface} from './src/Error/Angular/ErrorInterface';

export {Hook as ErrorAngularHook} from './src/Error/Angular/Hook';

export {Factory as ErrorEntityFactory} from './src/Error/Entity/Factory';
export {Entity as ErrorEntity} from './src/Error/Entity';

export {Factory as ErrorHandlerFactory} from './src/Error/Handler/Factory';
export {Handler as ErrorHandler} from './src/Error/Handler';

export {Factory as ErrorHandlerRouteDefinitionFactory} from './src/Error/Handler/Route/Definition/Factory';
export {Definition as ErrorHandlerRouteDefinition} from './src/Error/Handler/Route/Definition';

export {Factory as ErrorHandlerRouteMatcherFactory} from './src/Error/Handler/Route/Matcher/Factory';
export {Matcher as ErrorHandlerRouteMatcher} from './src/Error/Handler/Route/Matcher';

export {Factory as ErrorTaskLoggingFactory} from './src/Error/Task/Logging/Factory';
export {Logging as ErrorTaskLogging} from './src/Error/Task/Logging';

export {Factory as ErrorTaskDisplayToModalFactory} from './src/Error/Task/DisplayToModal/Factory';
export {DisplayToModal as ErrorTaskDisplayToModal} from './src/Error/Task/DisplayToModal';
export {DisplayModule as ErrorTaskDisplayToModalModule} from './src/Error/Task/DisplayToModal/display.module';

export {Factory as ErrorTaskDisplayToNotificationFactory} from './src/Error/Task/DisplayToNotification/Factory';
export {DisplayToNotification as ErrorTaskDisplayToNotification} from './src/Error/Task/DisplayToNotification';

export {DefinitionFactory as ErrorTaskDefinitionFactory} from './src/Error/Task/DefinitionFactory';

export {BaseInterface as ErrorTaskBaseInterface} from './src/Error/Task/BaseInterface';
export {BaseFactoryInterface as ErrorTaskBaseFactoryInterface} from './src/Error/Task/BaseFactoryInterface';

// ########################################

// date time +
export {Providers as DateTimeProviders} from './di_providers/date_time';

export {Factory as DateTimeCurrentFactory} from './src/DateTime/Current/Factory';
export {Current as DateTimeCurrent} from './src/DateTime/Current';

export {Factory as DateTimeFactory} from './src/DateTime/Factory';

export {Factory as DateTimeTimerFactory} from './src/DateTime/Timer/Factory';
export {Timer as DateTimeTimer} from './src/DateTime/Timer';

export {Factory as DateTimeTimerEntityFactory} from './src/DateTime/Timer/Entity/Factory';
export {Entity as DateTimeTimerEntity} from './src/DateTime/Timer/Entity';

// ########################################

// logger
export {Providers as LoggerProviders} from './di_providers/logger';

export {Factory as LoggerFactory} from './src/Logger/Factory';
export {Logger} from './src/Logger';

export {Factory as LoggerStreamConsoleFactory} from './src/Logger/Stream/Console/Factory';
export {Console as LoggerStreamConsole} from './src/Logger/Stream/Console';

export {Factory as LoggerStreamBackendFactory} from './src/Logger/Stream/Backend/Factory';
export {Backend as LoggerStreamBackend} from './src/Logger/Stream/Backend';

export {BaseInterface as LoggerStreamBaseInterface} from './src/Logger/Stream/BaseInterface';

// ########################################

// backend
export {Providers as BackendProviders} from './di_providers/backend';

export {Factory as BackendStorageFactory} from './src/Backend/Storage/Factory';
export {Storage as BackendStorage} from './src/Backend/Storage';

export {Factory as BackendRestConnectorFactory} from './src/Backend/Rest/Connector/Factory';
export {Connector as BackendRestConnector} from './src/Backend/Rest/Connector';

export {BaseInterface as BackendRestRequestBaseInterface} from './src/Backend/Rest/Request/BaseInterface';

export {Factory as BackendRestRequestSimpleFactory} from './src/Backend/Rest/Request/Simple/Factory';
export {Simple as BackendRestRequestSimple} from './src/Backend/Rest/Request/Simple';

export {BaseInterface as BackendRestResponseErrorBaseInterface} from './src/Backend/Rest/Response/Error/BaseInterface';

export {Factory as BackendRestResponseErrorFactory} from './src/Backend/Rest/Response/Error/Factory';
export {Error as BackendRestResponseError} from './src/Backend/Rest/Response/Error';

export {Factory as BackendRestResponseSuccessFactory} from './src/Backend/Rest/Response/Success/Factory';
export {Success as BackendRestResponseSuccess} from './src/Backend/Rest/Response/Success';

export {Factory as StorageRestCommandsGetFactory} from './src/Backend/Storage/RestCommands/Get/Factory';
export {Get as StorageRestCommandsGet} from './src/Backend/Storage/RestCommands/Get';

export {Factory as StorageRestCommandsDeleteFactory} from './src/Backend/Storage/RestCommands/Delete/Factory';
export {Delete as StorageRestCommandsDelete} from './src/Backend/Storage/RestCommands/Delete';

export {Factory as StorageRestCommandsOverrideFactory} from './src/Backend/Storage/RestCommands/Override/Factory';
export {Override as StorageRestCommandsOverride} from './src/Backend/Storage/RestCommands/Override';

export {Factory as StorageRestCommandsRetrieveFactory} from './src/Backend/Storage/RestCommands/Retrieve/Factory';
export {Retrieve as StorageRestCommandsRetrieve} from './src/Backend/Storage/RestCommands/Retrieve';

export {Factory as StorageRestCommandsSetFactory} from './src/Backend/Storage/RestCommands/Set/Factory';
export {Set as StorageRestCommandsSet} from './src/Backend/Storage/RestCommands/Set';

export {Factory as StorageRestCommandsTruncateFactory} from './src/Backend/Storage/RestCommands/Truncate/Factory';
export {Truncate as StorageRestCommandsTruncate} from './src/Backend/Storage/RestCommands/Truncate';

export {Factory as ResponseValidatorSetFactory} from './src/Backend/Rest/Response/Validator/Set/Factory';
export {Set as ResponseValidatorSet} from './src/Backend/Rest/Response/Validator/Set';

export {BaseInterface as ResponseValidatorBaseInterface} from './src/Backend/Rest/Response/Validator/BaseInterface';

// ########################################

// modules
export {MaterialModule as CoreMaterialModule} from './public/material.module';
export {DisplayModule as CoreDisplayModule} from './src/Error/Task/DisplayToModal/display.module';

// ########################################
