import {Manager} from "./Manager";

export class Variable {

    private manager: Manager = null;

    // ########################################

    constructor(manager: Manager) {
        this.manager = manager;
    }

    // ########################################

    public isExist(group: string, key: string): boolean {
        return this.manager.isExist(group, key);
    }

    public set(group: string, key: string, value: any): void {
        this.manager.set(group, key, value);
    }

    public get(group: string, key: string): Object {
        return this.manager.get(group, key);
    }

    public delete(group: string, key: string): void {
        this.manager.delete(group, key);
    }

    // ########################################
}
