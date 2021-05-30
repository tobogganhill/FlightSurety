var HDWalletProvider = require('truffle-hdwallet-provider');

// Mnemonic used for the current Ganache workspace.
// Your mnemonic is a special secret created for you by Ganache.
// It's used to generate the addresses available during development as well
// as sign transactions sent from those addresses.
// You should only use this mnemonic during development.
// If you use a wallet application configured with this mnemonic,
// ensure you switch to a separate configuration when using that
// wallet with production blockchains.
// This mnemonic is not secure. You should not trust it to manage blockchain assets.
var mnemonic =
	'scan point gold cruel health uniform enlist marble behave object plastic illegal';

module.exports = {
	networks: {
		development: {
			provider: function () {
				return new HDWalletProvider(mnemonic, 'http://127.0.0.1:8545/', 0, 50);
				// return new HDWalletProvider(mnemonic, 'http://127.0.0.1:7545/', 0, 50);
			},
			network_id: '*',
			gas: 5000000,
		},
	},
	compilers: {
		solc: {
			version: '^0.4.24',
		},
	},
};
