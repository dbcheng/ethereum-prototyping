import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // In browser + metamask is running
    web3 = new Web3(window.web3.currentProvider);
} else {
    // server or no metamask
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/11c8a5c12e7041468d0f01e7cf3f3c71'
    );
    web3 = new Web3(provider);
}

export default web3;
