import {Factory as DateTimeCurrentFactory} from "./Current/Factory";
import {Factory as TimerEntityFactory} from "./Timer/Entity/Factory";
import {Entity} from "./Timer/Entity";
import {Moment} from "moment";

export class Timer {

    private startTime: Moment = null;

    private dateTimeCurrentFactory: DateTimeCurrentFactory = null;

    private timerEntityFactory: TimerEntityFactory = null;

    // ########################################

    constructor(
        dateTimeCurrentFactory: DateTimeCurrentFactory,
        timerEntityFactory
    ) {
        this.dateTimeCurrentFactory = dateTimeCurrentFactory;
        this.timerEntityFactory = timerEntityFactory;
    }

    // ########################################

    public isRun(): boolean {
        return this.startTime !== null;
    }

    public start(): void {
        this.startTime = this.dateTimeCurrentFactory.create().getCurrentTime();
    }

    public stop(): Entity {
        if (!this.isRun()) {
            throw new Error('Timer not started.');
        }

        let entity = this.createTimerEntity();
        this.startTime = null;

        return entity;
    }

    // ########################################

    public isSecondsPassed(value): boolean {
        if (!this.isRun()) {
            throw new Error('Timer is not started yet.');
        }

        return this.createTimerEntity().getMilliseconds() >= (value * Entity.MILLISECOND_IN_SECOND);
    }

    public getSecondsPassed(): number {
        if (!this.isRun()) {
            throw new Error('Timer is not started yet.');
        }

        return this.createTimerEntity().getSeconds();
    }

    public getMilliSecondsPassed(): number {
        if (!this.isRun()) {
            throw new Error('Timer is not started yet.');
        }

        return this.createTimerEntity().getMilliseconds();
    }

    public getSecondsLeft(value) {
        if (!this.isRun()) {
            throw new Error('Timer is not started yet.');
        }

        let milliseconds = (value * Entity.MILLISECOND_IN_SECOND) - this.createTimerEntity().getMilliseconds();
        let seconds = milliseconds / Entity.MILLISECOND_IN_SECOND;

        return (seconds <= 0) ? 0 : seconds;
    }

    // ########################################

    private createTimerEntity(): Entity {
        return this.timerEntityFactory.create(this.startTime, this.dateTimeCurrentFactory.create().getCurrentTime());
    }

    // ########################################
}
