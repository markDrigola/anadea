import {Handler} from "../Handler";
import {Factory as DefinitionFactory} from "../Handler/Route/Definition/Factory";
import {Config} from "../../Config";
import {Inject, Injectable} from "@angular/core";
import {DefinitionFactory as TaskDefinitionFactory} from "../Task/DefinitionFactory";
import {Definition} from "./Route/Definition";
import {Factory as MatcherFactory} from "./Route/Matcher/Factory";
import {Factory as ProcessorFactory} from "../Processor/Factory";
import {FactoryBasedOfDefaults} from "../Processor/FactoryBasedOfDefaults";

@Injectable()
export class Factory {

    private config: Config = null;

    private definitionFactory: DefinitionFactory = null;

    private matcherFactory: MatcherFactory = null;

    private taskDefinitionFactory: TaskDefinitionFactory = null;

    private processorFactory: ProcessorFactory = null;

    private factoryBasedOfDefaults: FactoryBasedOfDefaults = null;

    // ########################################

    constructor(
        @Inject('CONFIG') config: Config,
        definitionFactory: DefinitionFactory,
        matcherFactory: MatcherFactory,
        taskDefinitionFactory: TaskDefinitionFactory,
        processorFactory: ProcessorFactory,
        factoryBasedOfDefaults: FactoryBasedOfDefaults
    ) {
        this.config = config;
        this.definitionFactory = definitionFactory;
        this.matcherFactory = matcherFactory;
        this.taskDefinitionFactory = taskDefinitionFactory;
        this.processorFactory = processorFactory;
        this.factoryBasedOfDefaults = factoryBasedOfDefaults;
    }

    // ########################################

    public create(): Handler {
        let errorConfig = this.config.get('/error/url_routes/');
        let definitions: Definition[] = [];

        (<any[]>errorConfig).forEach((unit: {pattern: string; tasks: any[]}) => {
            definitions.push(this.definitionFactory.create(unit.pattern, unit.tasks));
        });

        return new Handler(
            definitions,
            this.matcherFactory,
            this.taskDefinitionFactory,
            this.processorFactory,
            this.factoryBasedOfDefaults
        )
    }

    // ########################################
}
