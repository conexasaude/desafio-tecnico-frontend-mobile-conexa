import { User } from "../types/user";
import api from "./api";

export async function auth(email: string, password: string): Promise<User> {
    const response = await api.post('login', { email, password })
    
    return response.data.data
}