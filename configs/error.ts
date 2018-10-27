import {Factory as DisplayToNotificationFactory} from "../src/Error/Task/DisplayToNotification/Factory";
import {Factory as DisplayToModalFactory} from "../src/Error/Task/DisplayToModal/Factory";

export const CONFIG = {
    url_routes: [
        {
            pattern: '\/lazy\/',
            tasks: [
                {
                    factory: DisplayToModalFactory,
                    properties: {
                        closing: true
                    }
                }
            ],
        },
        {
            pattern: '\/lazy',
            tasks: [
                {
                    factory: DisplayToNotificationFactory,
                    properties: {
                        message: 'Hello world!',
                        action: 'action',
                        duration: 4000,
                        horizontalPosition: "right",
                        verticalPosition: "top",
                    }
                }
            ]
        },
        {
            pattern: '\/child-[a-z0-9]*',
            tasks: [
                {
                    factory: DisplayToModalFactory
                }
            ]
        }
    ]
};
