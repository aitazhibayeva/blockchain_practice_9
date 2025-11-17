const contractAddress = "0x151517627195880166e7134242D118fA0A294a76";
const abi = [
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

const provider = new ethers.providers.Web3Provider(window.ethereum, 97);
let signer;
let contract;

provider.send("eth_requestAccounts", []).then(() => {
    provider.listAccounts().then((accounts) => {
        signer = provider.getSigner(accounts[0]);
        contract = new ethers.Contract(contractAddress, abi, signer);
        console.log(contract);
    });
});

async function setNote() {
    const note = document.getElementById("note").value;
    const setNote = await contract.setNote(note);
}

async function getNote() {
    const note = await contract.getNote();
    console.log(getNote);
    document.getElementById("result").innerText = note;
}