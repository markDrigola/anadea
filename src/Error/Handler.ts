import {BaseInterface as TaskBaseInterface} from "./Task/BaseInterface";
import {Entity} from "./Entity";
import {Injectable} from "@angular/core";
import {Definition} from "./Handler/Route/Definition";
import {Factory as MatcherFactory} from "./Handler/Route/Matcher/Factory";
import {Matcher} from "./Handler/Route/Matcher";
import {DefinitionFactory as TaskDefinitionFactory} from "./Task/DefinitionFactory";
import {Factory as ProcessorFactory} from "./Processor/Factory";
import {FactoryBasedOfDefaults} from "./Processor/FactoryBasedOfDefaults";
import {Processor} from "./Processor";
import * as _ from 'lodash';

@Injectable()
export class Handler {

    private definitions: Definition[] = null;

    private matcherFactory: MatcherFactory = null;

    private definitionFactory: TaskDefinitionFactory = null;

    private processorFactory: ProcessorFactory = null;

    private factoryBasedOfDefaults: FactoryBasedOfDefaults = null;

    // ########################################

    constructor(
        definitions: Definition[],
        matcherFactory: MatcherFactory,
        definitionFactory: TaskDefinitionFactory,
        processorFactory: ProcessorFactory,
        factoryBasedOfDefaults: FactoryBasedOfDefaults
    ) {
        this.definitions = definitions;
        this.matcherFactory = matcherFactory;
        this.definitionFactory = definitionFactory;
        this.processorFactory = processorFactory;
        this.factoryBasedOfDefaults = factoryBasedOfDefaults;
    }

    // ########################################

    public process(entity: Entity): void {
        let url: string = location.pathname;
        let tasks: TaskBaseInterface[] = [];
        let processor: Processor;

        let routeDefinition: Definition = _.find(this.definitions, (unit: Definition) => {
            let routerMatcher: Matcher = this.matcherFactory.create(unit.getPattern(), url);

            return routerMatcher.match();
        });

        if (routeDefinition) {
            tasks = this.definitionFactory.create(routeDefinition);
            processor = this.processorFactory.create(tasks);
        } else {
            processor = this.factoryBasedOfDefaults.create();
        }

        processor.process(entity);
    }

    // ########################################
}