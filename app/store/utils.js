"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStoreIndexes = void 0;
// createStoreIndexes is a function that returns a set of functions to manage a store
// It is used to create indexes for a store
// keys is an array of keys that will be used to index the store
const createStoreIndexes = (keys) => {
    const indexMap = new Map();
    let changed = false;
    let allItemsCache = [];
    const init = () => {
        for (const key of keys) {
            indexMap.set(key, new Map);
        }
        changed = true;
    };
    const addItem = (item) => {
        for (const key of keys) {
            indexMap.get(key)?.set(item[key], item);
        }
        changed = true;
    };
    const addItems = (items) => {
        for (const item of items) {
            addItem(item);
        }
    };
    const getItem = (key, value) => {
        return indexMap.get(key)?.get(value);
    };
    const deleteItem = (item) => {
        for (const key of keys) {
            indexMap.get(key)?.delete(item[key]);
        }
        changed = true;
    };
    const getAllItems = () => {
        if (changed) {
            allItemsCache = [...indexMap.get('id')?.values() ?? []];
            changed = false;
        }
        return allItemsCache;
    };
    init();
    return {
        addItem,
        addItems,
        getItem,
        deleteItem,
        clean: init,
        getAllItems
    };
};
exports.createStoreIndexes = createStoreIndexes;
