"use server"
import { cookies } from "next/headers"
const url = process.env.NEXT_PUBLIC_API_URL as string


export const getCareers = async () => {
    const token = ((await cookies()).get('token')?.value)
    try {
        const res = await fetch(`${url}careers`,
            {
                cache: 'no-cache',
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            })
        const data = await res.json()
        return data
    } catch (error) {
        return error
    }
}

export const getPublicCareers = async () => {
    try {
        const res = await fetch(`${url}public/careers`,
            {
                cache: 'no-cache',
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
            })
        const data = await res.json()
        return data
    } catch (error) {
        return error
    }
}

export const getSingleCareer = async (id: number) => {
    const token = ((await cookies()).get('token')?.value)
    try {
        const res = await fetch(`${url}careers/${id}`,
            {
                cache: 'no-cache',
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            })
        const data = await res.json()
        return data
    } catch (error) {
        return error
    }
}

export const getPublicSingleCareer = async (id: number) => {

    try {
        const res = await fetch(`${url}public/careers/${id}`,
            {
                cache: 'no-cache',
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            })
        const data = await res.json()
        return data
    } catch (error) {
        return error
    }
}