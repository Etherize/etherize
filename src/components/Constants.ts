export default class Constants{
    static email = "hello@etherize.io";
    static twitter = 'https://twitter.com/EtherizePortal';
    static telegram = 'https://t.me/hybridentities';
    static home = "https://www.etherize.io";
    static defaultOpenLawConfig = {
        server: process.env.OpenlawHost,
        templateName: "",
    };
    static ownershipFAQTag="ownership-token"
}

export enum EntityPrices {
     hybridEntity = 50000,
     legalEntity = 40000
}
