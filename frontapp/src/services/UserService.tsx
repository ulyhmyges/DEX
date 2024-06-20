export async function login(username: string, password: string) {
    const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
    });

    if (!response.ok) {
        throw new Error("Invalid credentials");
    }

    return response.json();
}

export async function signup(username: string, password: string) {
    const response = await fetch("http://localhost:8080/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
    });

    if (!response.ok) {
        throw new Error("Username already taken");
    }

    return response.json();
}
