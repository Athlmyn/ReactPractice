// Generated by https://quicktype.io

export interface API {
    _id:            string;
    sr:             string;
    en:             string;
    author:         string;
    source:         null | string;
    numberOfVotes?: number;
    rating?:        number;
    addedBy:        AddedBy;
    id:             string;
    __v?:           number;
}

export enum AddedBy {
    The5Ab04D928C8B4E3Cbf733557 = "5ab04d928c8b4e3cbf733557",
}