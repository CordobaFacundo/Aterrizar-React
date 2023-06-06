import { packs } from "../data/packs"


export const getPackById = ( id ) => {
    return packs.find( pack => pack.id === id)
}