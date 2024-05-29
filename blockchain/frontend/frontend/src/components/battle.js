import React, { useState } from 'react';
import axios from 'axios';

const BattleTokens = () => {
    const [tokenId1, setTokenId1] = useState('');
    const [tokenId2, setTokenId2] = useState('');

    const handleBattle = async () => {
        try {
            await axios.post('http://localhost:5000/battle', { tokenId1, tokenId2 });
            alert('Battle completed successfully');
        } catch (error) {
            console.error(error);
            alert('Battle failed');
        }
    };

    return (
        <div>
            <h2>Battle Tokens</h2>
            <input
                type="text"
                value={tokenId1}
                onChange={(e) => setTokenId1(e.target.value)}
                placeholder="Token ID 1"
            />
            <input
                type="text"
                value={tokenId2}
                onChange={(e) => setTokenId2(e.target.value)}
                placeholder="Token ID 2"
            />
            <button onClick={handleBattle}>Start Battle</button>
        </div>
    );
};

export default BattleTokens;