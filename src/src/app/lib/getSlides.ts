"use server"

import { cookies } from "next/headers"

const BASE_URL = process.env.NEXT_PUBLIC_API_URL

if (!BASE_URL) {
  throw new Error("NEXT_PUBLIC_API_URL is not defined")
}

/* =========================
   PUBLIC SLIDES (NO AUTH)
   ========================= */
export const getAllPublicSlides = async () => {
  try {
    const response = await fetch(`${BASE_URL}/public/slides`, {
      method: "GET",
      cache: "no-store",
      headers: {
        Accept: "application/json",
      },
    })

    if (!response.ok) return []

    const result = await response.json()
    return result?.data ?? result ?? []
  } catch (error) {
    console.error("Error fetching public slides:", error)
    return []
  }
}

/* =========================
   ALL SLIDES (AUTH)
   ========================= */
export const getAllSlides = async () => {
  const cookieStore = await cookies() // ✅ MUST use await
  const token = cookieStore.get("token")?.value

  if (!token) return []

  try {
    const response = await fetch(`${BASE_URL}/slides`, {
      method: "GET",
      cache: "no-store",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })

    if (!response.ok) return []

    const result = await response.json()
    return result?.data ?? result ?? []
  } catch (error) {
    console.error("Error fetching slides:", error)
    return []
  }
}

/* =========================
   SLIDE BY ID (AUTH)
   ========================= */
export const getSlideById = async (id: number) => {
  const cookieStore = await cookies() // ✅ MUST use await
  const token = cookieStore.get("token")?.value

  if (!token) return null

  try {
    const response = await fetch(`${BASE_URL}/slides/${id}`, {
      method: "GET",
      cache: "no-store",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })

    if (!response.ok) return null

    const result = await response.json()
    return result?.data ?? result ?? null
  } catch (error) {
    console.error("Error fetching slide by ID:", error)
    return null
  }
}

