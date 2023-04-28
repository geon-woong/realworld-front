import { atom } from "recoil";

export const isLoggedInAtom = atom({
    key: 'isLoggedInAtom',
    default : false,
})

export const userAtom = atom({
    key: 'userAtom',
    default:{
        email : '',
        username : '',
        bio:'',
        image:'',
    }
})

export const pageAtom = atom({
    key: 'pageAtom',
    default: 1,
})

export const feedToggle = atom({
    key: 'toggle',
    default: 1,
})

export const feedTag = atom({
    key:'tag',
    default:'',
})
