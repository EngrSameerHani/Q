"use server"

import { cookies } from "next/headers"


const url = process.env.NEXT_PUBLIC_API_URL as string


export const getConsultants = async () => {
    const token = ((await cookies()).get('token')?.value)
    try {
        const res = await fetch(`${url}consultants`,
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


export const getConsultantById = async (id: number) => {
    const token = (await cookies()).get('token')?.value
    try {
        const res = await fetch(`${url}consultants/${id}`,
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

export const getPublicConsultants = async () => {
    try {
        const res = await fetch(`${url}public/consultants`,
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

export const getPublicConsultantById = async (id: number) => {
    try {
        const res = await fetch(`${url}public/consultants/${id}`,
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

export const getConsultantsByDepartmentId = async (id: number) => {
    try {
        const res = await fetch(`${url}public/getConsultantsByDepartment/${id}`,
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