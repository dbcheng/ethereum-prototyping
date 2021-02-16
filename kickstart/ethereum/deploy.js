const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
	'knife decrease goddess argue winter company rescue breeze siege captain name interest',
	'https://rinkeby.infura.io/v3/11c8a5c12e7041468d0f01e7cf3f3c71'
);

const web3 = new Web3(provider);

const deploy = async () => {
	const accounts = await web3.eth.getAccounts();
	console.log('Attempting to deploy from account ', accounts[0]);
	const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
		.deploy({ data: compiledFactory.bytecode })
		.send({ gas: '1000000', from: accounts[0] });
	console.log('Contract deployed to ', result.options.address);
};

deploy();


