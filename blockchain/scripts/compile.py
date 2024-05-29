import json
from solcx import compile_standard, install_solc

install_solc('0.8.0')  # Install the specific Solidity compiler version

with open('../contracts/SimpleStorage.sol', 'r') as file:
    simple_storage_file = file.read()

compiled_sol = compile_standard({
    "language": "Solidity",
    "sources": {
        "SimpleStorage.sol": {
            "content": simple_storage_file
        }
    },
    "settings": {
        "outputSelection": {
            "*": {
                "*": ["abi", "metadata", "evm.bytecode", "evm.sourceMap"]
            }
        }
    }
})

with open("compiled_code.json", "w") as file:
    json.dump(compiled_sol, file)
