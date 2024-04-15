import firebase from  'firebase/compat/app';
import firebaseConfig from '../../../firebase.js';
import 'firebase/compat/database';
import {useQuery, useMutation, useQueryClient} from "react-query";

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.database()
export function useAddData() {
    const queryClient = useQueryClient();

    return useMutation(async (newData) => {
        const ref = db.ref('users').push();
        const newKey = ref.key;
        console.log(newKey)
        await ref.set(newData);
        return newKey;
    }, {
        onSuccess: (newKey) => {
            queryClient.invalidateQueries('users');
        },
    });
}

export function useEditData() {
    const queryClient = useQueryClient()
    return useMutation(async ({id, updateData}) => {
            await db.ref(`users/${id}`).set(updateData)
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries('users')
            }
        })
}
export function useGetData() {
    return useQuery('test', async () => {
        const snapshot = await db.ref('users').once('value');
        return snapshot.val();
    });
}

export async function  getAllUsers(){
    const snapshot = await db.ref('users').once('value');
    return snapshot.val();
}

