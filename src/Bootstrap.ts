import {Registration} from './Bootstrap/Registration';
import {BaseInterface as IBootstrapRegistration} from './Bootstrap/Registration/BaseInterface';
import {BaseInterface} from './Bootstrap/Task/BaseInterface';
import {Injectable} from '@angular/core';
import * as _ from 'lodash';
import {AsyncAction} from "rxjs/scheduler/AsyncAction";
import {Result} from "./Bootstrap/Result";
import {Factory as ResultFactory} from "./Bootstrap/Result/Factory";

declare var Promise;

@Injectable()
export class Bootstrap {

    private initializeTasks: BaseInterface[] = [];

    private isInitialized = false;

    private registrations: Registration[];

    // ########################################

    constructor(
        registrations: Registration[],
        initializeTasks: BaseInterface[]
    ) {
        this.registrations = registrations;
        this.initializeTasks = initializeTasks;
    }

    // ########################################

    public async initialize(): Promise<any>  {
        if (this.isInitialized) {
            throw new Error('Bootstrap already initialized');
        }

        try {
            const tasks: BaseInterface[] = this.getSortedTasks(this.initializeTasks, this.registrations);

            if (tasks === null) {
                return true;
            }

            for (const task of tasks) {
                const taskPromise = task.load().getPromise();

                if (taskPromise) {
                    await taskPromise;
                }
            }

            this.isInitialized = true;

            return true;
        } catch (error) {

            if (!error) {
                throw new Error('Internal error. Unable to initialize bootstrap.');
            }  else {
                throw error;
            }
        }
    }

    // ########################################

    private mergedRegistrations(registrations: Registration[]): IBootstrapRegistration[] {
        let merged: IBootstrapRegistration[] = [];

        for (const layerRegistration of registrations) {
            const tasksInfo: IBootstrapRegistration[] = layerRegistration.getData();
            merged = _.concat(merged, tasksInfo);
        }

        return merged;
    }

    private getSortedTasks(tasks: BaseInterface[], registrations: Registration[]): Array<BaseInterface> {
        if (tasks === null || registrations === null) {
            return null;
        }

        const sortedTasks = [];
        const mergedRegistrations = this.mergedRegistrations(registrations);

        if (mergedRegistrations.length !== tasks.length) {
            throw new Error('The number of tasks does not coincide with the number of registered tasks');
        }

        for (const taskUnit of mergedRegistrations) {
            const unitClass: any = taskUnit.taskClass;

            const indexTaskInInitialTasks = _.findIndex(tasks, (task) => {

                return task instanceof unitClass;
            });

            if (indexTaskInInitialTasks === -1) {

                throw new Error('Task is not found');
            } else {
                if (!taskUnit['first'] &&
                    !taskUnit['last'] &&
                    !taskUnit['before'] &&
                    !taskUnit['after']) {

                    throw new Error('Task data is invalid. Must be one of keys: first, last, before, after.');
                }

                if (taskUnit['first']) {
                    const cutTask = tasks.slice(indexTaskInInitialTasks, indexTaskInInitialTasks + 1);

                    sortedTasks.unshift(cutTask[0]);

                } else if (taskUnit['last']) {

                    const cutTask = tasks.slice(indexTaskInInitialTasks, indexTaskInInitialTasks + 1);

                    sortedTasks.push(cutTask[0]);

                } else if (_.isObject(taskUnit['before'])) {
                    const beforeClass: any = taskUnit['before'];

                    const existedTaskIndex = _.findIndex(sortedTasks, function (task) {
                        return task instanceof beforeClass;
                    });

                    if (existedTaskIndex === -1) {
                        throw new Error(`Unable to append new initialize task. No existing task '${taskUnit.taskClass}'.`);
                    }

                    const cutTask = tasks.slice(indexTaskInInitialTasks, indexTaskInInitialTasks + 1);

                    sortedTasks.splice(existedTaskIndex, 0, cutTask[0]);

                } else if (_.isObject(taskUnit['after'])) {
                    const afterClass: any = taskUnit['after'];

                    const existedTaskIndex = _.findIndex(sortedTasks, function (unit) {
                        return unit instanceof afterClass;
                    });

                    if (existedTaskIndex === -1) {
                        throw new Error(`Unable to append new initialize task. No existing task '${taskUnit.taskClass}'.`);
                    }

                    const cutTask = tasks.slice(indexTaskInInitialTasks, indexTaskInInitialTasks + 1);

                    sortedTasks.splice(existedTaskIndex + 1, 0, cutTask[0]);
                }
            }
        }

        return sortedTasks;
    }

    // ########################################
}
