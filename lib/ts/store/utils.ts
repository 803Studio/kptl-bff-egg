interface Indefinable {
  id: number
}

// createStoreIndexes is a function that returns a set of functions to manage a store
// It is used to create indexes for a store
// keys is an array of keys that will be used to index the store
export const createStoreIndexes = <T extends Indefinable>(keys: (keyof T)[]) => {
  const indexMap = new Map<keyof T, Map<any, T>>()
  let changed = false
  let allItemsCache: T[] = []


  const init = () => {
    for (const key of keys) {
      indexMap.set(key, new Map)
    }
    changed = true
  }

  const addItem = (item: T) => {
    for (const key of keys) {
      indexMap.get(key)?.set(item[key], item)
    }
    changed = true
  }

  const addItems = (items: T[]) => {
    for (const item of items) {
      addItem(item)
    }
  }

  const getItem = (key: keyof T, value: any) => {
    return indexMap.get(key)?.get(value)
  }

  const deleteItem = (item: T) => {
    for (const key of keys) {
      indexMap.get(key)?.delete(item[key])
    }
    changed = true
  }

  const getAllItems = () => {
    if (changed) {
      allItemsCache = [...indexMap.get('id')?.values() ?? []] as T[]
      changed = false
    }

    return allItemsCache
  }

  init()

  return {
    addItem,
    addItems,
    getItem,
    deleteItem,
    clean: init,
    getAllItems
  }
}

export type StoreIndexes<T extends Indefinable> = ReturnType<typeof createStoreIndexes<T>>
