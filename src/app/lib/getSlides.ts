
"use server"
import { cookies } from "next/headers"
const url = process.env.NEXT_PUBLIC_API_URL as string


export const getAllSlides = async () => {

    const token = (await cookies()).get('token')?.value
    try {
        const response = await fetch(`${url}slides`, {
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

export const getAllPublicSlides = async () => {

    try {
        const response = await fetch(`${url}public/slides`, {
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

export const getSlideById = async (id: number) => {

    const token = (await cookies()).get('token')?.value
    try {
        const response = await fetch(`${url}slides/${id}`, {
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