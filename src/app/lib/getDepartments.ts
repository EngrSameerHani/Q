"use server"

import { cookies } from "next/headers"


const url = process.env.NEXT_PUBLIC_API_URL as string


export const getDepartments = async () => {
    try {
        const res = await fetch(`${url}public/departments`,
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


export const getDepartmentById = async (id: number) => {
    const token = (await cookies()).get('token')?.value
    try {
        const res = await fetch(`${url}departments/${id}`,
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



export const getPublicDepartmentById = async (id: number) => {
    try {
        const res = await fetch(`${url}public/departments/${id}`,
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


