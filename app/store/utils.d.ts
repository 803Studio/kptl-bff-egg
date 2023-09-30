interface Indefinable {
    id: number;
}
export declare const createStoreIndexes: <T extends Indefinable>(keys: (keyof T)[]) => {
    addItem: (item: T) => void;
    addItems: (items: T[]) => void;
    getItem: (key: keyof T, value: any) => T | undefined;
    deleteItem: (item: T) => void;
    clean: () => void;
    getAllItems: () => T[];
};
export type StoreIndexes<T extends Indefinable> = ReturnType<typeof createStoreIndexes<T>>;
export {};
