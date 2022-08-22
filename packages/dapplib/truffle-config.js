require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good close blue spot shock rare remember smile include clock bone genre'; 
let testAccounts = [
"0xe15d054f256215352e2809ba378ec221bdd44a4a71780e5ab1deaf478d36532a",
"0x182230cdce95f3daeda53d9c2adb691fe149b63957edab6ee19246acd6caeec0",
"0xf024f18f509eb7790337b66fb35acca911e18e5ec095f5774b0763e9e0273002",
"0x9c40966ec670c05f19463dbe632b61816af94940d1d049cb956d1cc1d2606025",
"0xbe74fbfab6b366e872a738090d74d930943af24241e8c5e473b9d5c5f393cfea",
"0x3bb8a5218277f26cf2431e1895fecba8b167e600b702d1ba0e540fa3cafbc6bc",
"0xc753451174432b049ef2acd09ee7ac7627b4a3ec8998e981d7940792de75751d",
"0x8f39c76c00a8ca7dba8b743f8303fd18655d86154093e33a6eaae9e9b4a30604",
"0x6294fa7bbe82cc718e65100c8144911dfe16dfdb09fc708dc396085be445e0c1",
"0xebe020b603ecb4795eca9488fed64fcae1d931deaca6eb7450386acd8fcfba01"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


