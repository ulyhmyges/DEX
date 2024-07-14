import React, { useEffect, useState } from 'react';
import { fetchTokens, fetchTokenData } from '../../services/TokenService';
import './Tokens.css'; 

interface Token {
    id: number;
    name: string;
    symbol: string;
    price?: number;
    volume24h?: number;
}

const Tokens = () => {
    const [tokens, setTokens] = useState<Token[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getTokens = async () => {
            try {
                const tokensData = await fetchTokens();
                const tokensWithPrices = await Promise.all(tokensData.map(async (token: Token) => {
                    try {
                        const data = await fetchTokenData(token.symbol);
                        return { ...token, price: data.price, volume24h: data.volume24h };
                    } catch (err) {
                        return { ...token, price: 0, volume24h: 0 };
                    }
                }));
                setTokens(tokensWithPrices);
            } catch (err: any) {
                setError(err.message);
            }
        };

        getTokens();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Tokens List</h1>
            <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between">
                    <strong className="flex-fill column-name">Nom</strong>
                    <strong className="flex-fill column-price text-center">Prix</strong>
                    <strong className="flex-fill column-volume text-right">Volume (24h)</strong>
                </li>
                {tokens.map((token) => (
                    <li key={token.id} className="list-group-item d-flex justify-content-between">
                        <span className="flex-fill column-name">{token.name} ({token.symbol})</span>
                        <span className="flex-fill column-price text-center">${token.price?.toFixed(2) || 'N/A'}</span>
                        <span className="flex-fill column-volume text-right">{token.volume24h?.toFixed(2) || 'N/A'}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Tokens;



// import React, { useEffect, useState } from 'react';
// import { fetchTokens } from './services/TokenService';

// interface Token {
//     id: number;
//     name: string;
//     symbol: string;
// }

// const Tokens = () => {
//     const [tokens, setTokens] = useState<Token[]>([]);
//     const [error, setError] = useState<string | null>(null);

//     useEffect(() => {
//         const getTokens = async () => {
//             try {
//                 const data = await fetchTokens();
//                 setTokens(data);
//             } catch (err: any) {
//                 setError(err.message);
//             }
//         };

//         getTokens();
//     }, []);

//     if (error) {
//         return <div>Error: {error}</div>;
//     }

//     return (
//         <div className="container mt-5">
//             <h1 className="mb-4">Tokens List</h1>
//             <ul className="list-group">
//                 {tokens.map((token) => (
//                     <li key={token.id} className="list-group-item">
//                         {token.id}. {token.name} ({token.symbol})
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };
                
// export default Tokens;
