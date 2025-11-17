# Assignment 9 

## **Part 1: Creating a Smart Contract**

1. Created new file Note.sol in remix:

![Рисунок1](images/Рисунок1.png)

2. Deployed smart contract and get the address and abi:

![1763295312867]()

## Artifacts:

- Address: 0x151517627195880166e7134242D118fA0A294a76
- ABI:

```json
[
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_note",
				"type": "string"
			}
		],
		"name": "setNote",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getNote",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
```

## **Part 2. Creating a basic web page**

1. Created new file with name index.html:

![1763295596136]()

2. Include additional code in our exist index.html:

![1763295686697]()

3. Also created style.css file with several styles:

![1763295759045]()

4. Using live serve I open index.html in browser:

![1763295941486]()

## **Connect your web page to your smart contract**

1. Added script to connect web3 wallet and interact with smart contract using ui smart:

![1763296877681]()
