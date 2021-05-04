require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter occur slab chaos note often upgrade idea argue blue style'; 
let testAccounts = [
"0xa526b90bc1e91ac8b245fa821f1b69cd3ecbb9c0626d75a63c6d1bdc4dbc3904",
"0x01bc4e65062279afb4899c0598d34c83812212b39b6e5229e2c82b4521042ccb",
"0xef5725c9ea8350f26a57c9d811efb667260752b42c40802b87b14c688ea0a462",
"0x3056d6d77b42d3099d216f5873b2ea08e2ee4cf5c872dfd771dca0b0177d573e",
"0x4e99191dda5f29462dc2d7f27d9712b132f8ba57c777b4f49fec1a537e57d834",
"0x74a80e49a2d18dacb6968bfc88277f2c4570fb54fdc13edf9f1ee1b5fa5b6c2e",
"0xa2f7ebd7c1531ecf307e5dd90d27aba7b41ba4c2ffbed8b6b1ea4e670669f6ac",
"0x5e46c5e2414499c11fe4e40eb77016447c5581256d87c52494cece5db85e8cc0",
"0x2cadbcc689725008679d10ec7f23d72874ddabdfea75f4ef6a27d4e579de6dc0",
"0x2fc285ae65ad515c875d8d31493927aa0a3912bcdeda429dd9965ce509c09f39"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

