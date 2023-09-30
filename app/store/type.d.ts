export interface StoreModule {
    name: string;
    init: () => Promise<void>;
}
