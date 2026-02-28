
"use server"
import { cookies } from "next/headers"
const url = process.env.NEXT_PUBLIC_API_URL as string


export const getAllPages = async () => {

    const token = (await cookies()).get('token')?.value
    try {
        const response = await fetch(`${url}pages`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })

        const data = await response.json()
        return data
    } catch (error) {
        return error
    }
}

export const getPublicPageBySlug = async (slug: string) => {
    try {
        const response = await fetch(`${url}public/getPageBySlug/${slug}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        })

        const data = await response.json()
        return data
    } catch (error) {
        return error
    }
}

export const getPageById = async (id: number) => {
    const token = (await cookies()).get('token')?.value
    try {
        const response = await fetch(`${url}pages/${id}`, {
            method: 'GET',
            cache: 'no-cache',
            headers: {

                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })

        const data = await response.json()
        return data
    } catch (error) {
        return error
    }
}




