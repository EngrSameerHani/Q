
"use server"
import { cookies } from "next/headers"
const url = process.env.NEXT_PUBLIC_API_URL as string


export const getTickers = async () => {
    const token = ((await cookies()).get('token')?.value)
    try {
        const res = await fetch(`${url}public/tickers`, {
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


export const getTickersById = async (id: number) => {
    const token = (await cookies()).get('token')?.value
    try {
        const res = await fetch(`https://qih.driveo.pk/api/v1/tickers/${id}`,
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