import PocketBase from 'pocketbase';

export const usePocketbaseClient = () => {
    return new PocketBase("http:/127.0.0.1:8090");
};