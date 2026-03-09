// frontend-only login (no backend)
type LoginResult =
  | {
      success: true
      user: {
        name: string
        email: string
        role: string
      }
    }
  | {
      success: false
      message: string
    }

// Hardcoded user
const DEFAULT_USER = {
  email: "receptionist@qih.com",
  password: "123456", // plain password for frontend
  name: "Receptionist",
  role: "receptionist",
}

export function loginUser(
  email: string,
  password: string
): LoginResult {
  email = email.trim()
  password = password.trim()

  if (!email || !password) {
    return { success: false, message: "Email and password required" }
  }

  if (email !== DEFAULT_USER.email || password !== DEFAULT_USER.password) {
    return { success: false, message: "Invalid email or password" }
  }

  return {
    success: true,
    user: {
      name: DEFAULT_USER.name,
      email: DEFAULT_USER.email,
      role: DEFAULT_USER.role,
    },
  }
}

// Example usage:
const result = loginUser("receptionist@qih.com", "123456")
console.log(result)