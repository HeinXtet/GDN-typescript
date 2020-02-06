declare module 'MasterData' {

    export interface Country {
        code: string;
        name: string;
        default_currency: string;
    }

    export interface Data {
        countries: Country[];
    }

    export interface MasterData {
        errorCode: number;
        message: string;
        data: Data;
    }

}

