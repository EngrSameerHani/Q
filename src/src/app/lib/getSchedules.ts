"use server"
import { cookies } from "next/headers"
const url = process.env.NEXT_PUBLIC_API_URL as string


export const getPublicConsultantSchedules = async (id: number) => {
    try {
        const res = await fetch(`${url}public/schedules/consultant/${id}`,
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

export const getConsultantSchedules = async (id: number) => {
    const token = ((await cookies()).get('token')?.value)
    try {
        const res = await fetch(`${url}schedules/consultant/${id}`,
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

export const getSlotsByDate = async (consultantId: number, date: string,) => {

    try {
        const res = await fetch(`${url}public/schedules/${consultantId}/${date}`,
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

export const getConsultantSchedule = async () => {
    const token = ((await cookies()).get('token')?.value)
    const user = JSON.parse((await cookies()).get('user')?.value as string)
    try {
        const res = await fetch(`${url}schedules/consultant/${user.id}`,
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


export const getAdminConsultantSchedule = async (consultantId: number) => {

    const token = ((await cookies()).get('token')?.value)
    try {
        const res = await fetch(`${url}schedules/consultant/${consultantId}`,
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
