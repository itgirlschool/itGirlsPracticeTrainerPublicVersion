import { set, get, del, keys, createStore } from 'idb-keyval';

const servicesIndexedDb = () => {
    const store1 = createStore('progressTrainer', 'user');
    const store2 = createStore('rules', 'user');

    const getItemsFromStore1 = async () => {
        return keys(store1).then((ids) => Promise.all(ids.map((id) => get(id, store1))));
    };

    const getItemsFromStore2 = async () => {
        return keys(store2).then((ids) => Promise.all(ids.map((id) => get(id, store2))));
    };

    const addItemToStore1 = async (item) => {
        return set(item.id, item, store1);
    };

    const addItemToStore2 = async (item) => {
        return set(item.id, item, store2);
    };

    const updateItemInStore1 = async (item) => {
        return set(item.id, item, store1);
    };

    const updateItemInStore2 = async (item) => {
        return set(item.id, item, store2);
    };

    const deleteItemFromStore1 = async (id) => {
        return del(id, store1);
    };

    const deleteItemFromStore2 = async (id) => {
        return del(id, store2);
    };

    return {
        getItemsFromStore1,
        getItemsFromStore2,
        addItemToStore1,
        addItemToStore2,
        updateItemInStore1,
        updateItemInStore2,
        deleteItemFromStore1,
        deleteItemFromStore2,
    };
};

export default servicesIndexedDb;
