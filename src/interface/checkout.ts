export type FullOption = LifeOption | RenewOption | RegularOption;

export interface LifeOption {
    type: 'life';
    label: string;
    value: string;
    paymentType: {
        label: string;
        value: string;
        isDisabled: boolean;
    }[];
}

export interface RenewOption {
    type: 'renew';
    label: string;
    value: string;
    membershipType: Options[];
}

export interface Options {
    label: string;
    value: string;
}

export interface RegularOption extends Options {
    type: 'regular'
}

export interface MemberOptions {
    [type: string]: {
        id: number | string;
        sku?: string;
        label: string;
        price: number;
    }
}
