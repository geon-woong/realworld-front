import { useRecoilState } from "recoil";
import { useState } from 'react'
import { uuid } from 'uuid';
export const useDialog = () => {

    const [instanceList,setInstanceList] = usestate([]);

    const open = async()=>{
        return new Promise((resolve,reject)=>{

            const id = uuid();
            const instance = {
                id,
                resolve,
                reject,
            };

            setInstanceList([
                instance,
                ...instanceList,
            ])
        });
    };
}