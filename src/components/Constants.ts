export enum EntityTypes {
    hybridEntity,
    legalEntity,
}

export default class Constants{
    static email = "hello@etherize.io";
    static twitter = 'https://twitter.com/EtherizePortal';
    static telegram = 'https://t.me/hybridentities';
    static home = "https://www.etherize.io";
    static defaultOpenLawConfig = {
        server: process.env.OpenlawHost,
        templateName: "",
    };
    static ownershipFAQTag="ownership-token";
    static PricesPerEntity = {
        [EntityTypes.hybridEntity]: 50000,
        [EntityTypes.legalEntity]: 40000,
    };
    static AgreementsPerEntity = {
        [EntityTypes.hybridEntity]: "Hybrid Formation Service Agreement",
        [EntityTypes.legalEntity]: "Formation Service Agreement",
    }
}
//

