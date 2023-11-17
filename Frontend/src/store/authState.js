import {atom} from 'recoil'

export const authState = atom({
    key: 'authState',
    defautlt: {token: null, username: null}
})