import React, { useState } from 'react';
import axios from 'axios';

const MintToken = () => {
    const [address, setAddress] = useState('');

    const handleMint = async () => {
        try {
            await axios.post('http://localhost:5000/mint', { to: address });
            alert('Token minted successfully');
        } catch (error) {
            console.error(error);
            alert('Minting failed');
        }
    };

    return (
        <div>
            <h2>Mint Token</h2>
            <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Recipient address"
            />
            <button onClick={handleMint}>Mint Token</button>
        </div>
    );
};

export default MintToken;