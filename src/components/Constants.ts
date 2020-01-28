export enum EntityTypes {
    hybridEntity,
    legalEntity,
    bugEntity
}

export default class Constants{
    static email = "hello@etherize.io";
    static legalEmail = "contracts@etherize.io";
    static twitter = 'https://twitter.com/EtherizePortal';
    static telegram = 'https://t.me/hybridentities';
    static home = "https://www.etherize.io";
    static defaultOpenLawConfig = {
        server: process.env.OpenlawHost,
        templateName: "",
    };
    static ownershipFAQTag="ownership-token";
    static betaFAQTag="beta";

    static AgreementsPerEntity = {
        [EntityTypes.hybridEntity]: "Hybrid Formation Service Agreement",
        [EntityTypes.legalEntity]: "Formation Service Agreement",
        [EntityTypes.bugEntity]: "Registered Agent Service Agreement-bug",
    };

    // These keys are used to determine which fields should be watched in case of user input to generate previously
    // hidden fields, i.e. eth addresses
    static OpenLawDynamicFieldKeys=[
        "Deployment",
        "Entity Location",
        "Ethereal Component",
        "Legal Component"
    ];
    static OpenLawMemberEmailKey = "Member Signature";
    static VersionNumber = "0.2.0";
}
//
