import { $authHost, $host } from "./index";

export const createAuto = async (auto) => {
    const {data} = await $authHost.post('api/auto', auto)
    return data
}

export const fetchAuto = async () => {
    const {data} = await $host.get('api/auto')
    return data
}

export const createPart = async (part) => {
    const {data} = await $authHost.post('api/part', part)
    return data
}

export const fetchParts = async (part) => {
    const {data} = await $host.get('api/part', part)
    return data
}

export const fetchOnePart = async (id) => {
    const {data} = await $host.get('api/part/'+id)
    return data
}
