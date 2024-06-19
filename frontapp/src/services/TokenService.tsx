export async function fetchTokens() {
    const response = await fetch("http://localhost:8080/tokens");
    if (!response.ok) {
        throw new Error("Failed to fetch tokens");
    }
    return response.json();
}

export async function fetchTokenData (symbol: string) {
    const response = await fetch(`http://localhost:8080/tokens/${symbol}`);
    if (!response.ok) {
        throw new Error("Failed to fetch token data");
    }
    return response.json();
}
