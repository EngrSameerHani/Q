"use server"
import { cookies } from "next/headers"
const url = process.env.NEXT_PUBLIC_API_URL as string


export const getPublicApplications = async (careerId: number) => {

    try {
        const res = await fetch(`${url}public/applications${careerId ? `?career_id=${careerId}` : ''}`,
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