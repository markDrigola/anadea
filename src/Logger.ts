import {BaseInterface as StreamBaseInterface} from "./Logger/Stream/BaseInterface";

export class Logger {

    static readonly TYPE_SUCCESS = 'success';
    static readonly TYPE_NOTICE  = 'notice';
    static readonly TYPE_WARNING = 'warning';
    static readonly TYPE_ERROR   = 'error';

    private streams: StreamBaseInterface[] = [];

    // ########################################

    constructor(
        streams: StreamBaseInterface[]
    ) {
        this.streams = streams;
    }

    // ########################################

    public process(message: string, type: string, additionalData: any, group: string): void {
        this.streams.forEach((stream: StreamBaseInterface) => {
            stream.process(message, type, additionalData, group);
        })
    }

    // ########################################

    public processMultiple(records: object[], group): void {
        records.forEach((record: {message: string, type: string, additionalData: any}) => {
            this.streams.forEach((stream: StreamBaseInterface) => {
                stream.process(record.message, record.type, record.additionalData, group);
            })
        });
    }

    // ########################################
}
