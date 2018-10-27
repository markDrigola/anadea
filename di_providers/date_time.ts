import {Factory as CurrentFactory} from "../src/DateTime/Current/Factory";
import {Factory as DateTimeFactory} from "../src/DateTime/Factory";
import {Factory as TimerFactory} from "../src/DateTime/Timer/Factory";
import {Factory as TimerEntityFactory} from "../src/DateTime/Timer/Entity/Factory";

export const Providers = [
    CurrentFactory,
    DateTimeFactory,
    TimerFactory,
    TimerEntityFactory
];