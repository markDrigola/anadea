export class Locale {

    private language: string = null;

    // ########################################

    constructor(language: string) {
        this.language = language;
    }

    // ########################################

    public getLanguage(): string {
        return this.language;
    }

    public getDate(): Date {
        return new Date();
    }

    public getTimeZone(): string {
        let date = this.getDate();
        const timeZoneNames = {
            "UTC+0":"GMT",
            "UTC+1":"CET",
            "UTC+2":"EET",
            "UTC+3":"EEDT",
            "UTC+3.5":"IRST",
            "UTC+4":"MSD",
            "UTC+4.5":"AFT",
            "UTC+5":"PKT",
            "UTC+5.5":"IST",
            "UTC+6":"BST",
            "UTC+6.5":"MST",
            "UTC+7":"THA",
            "UTC+8":"AWST",
            "UTC+9":"AWDT",
            "UTC+9.5":"ACST",
            "UTC+10":"AEST",
            "UTC+10.5":"ACDT",
            "UTC+11":"AEDT",
            "UTC+11.5":"NFT",
            "UTC+12":"NZST",
            "UTC-1":"AZOST",
            "UTC-2":"GST",
            "UTC-3":"BRT",
            "UTC-3.5":"NST",
            "UTC-4":"CLT",
            "UTC-4.5":"VET",
            "UTC-5":"EST",
            "UTC-6":"CST",
            "UTC-7":"MST",
            "UTC-8":"PST",
            "UTC-9":"AKST",
            "UTC-9.5":"MIT",
            "UTC-10":"HST",
            "UTC-11":"SST",
            "UTC-12":"BIT"
        };

        let offset: string | number = -1 * date.getTimezoneOffset()/60;
        offset = "UTC" + (offset >= 0 ? "+" + offset : offset);

        return `${offset} ${timeZoneNames[offset]}`;
    }

    // ########################################
}