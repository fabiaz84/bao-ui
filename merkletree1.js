const { MerkleTree } = require('merkletreejs');
const keccak256 = require('keccak256');
const whitelistAddresses = require('./src/json/whitelistAddresses1.json');

const leafNodes = whitelistAddresses.addresses.map(addr => keccak256(addr));
const tree = new MerkleTree(leafNodes, keccak256, { sortPairs: true});

const root = tree.getHexRoot();

const account = "0xb9ab9578a34a05c86124c399735fdE44dEc80E7F"

const claimingAccount = keccak256(account);
const hexProof = tree.getHexProof(claimingAccount);

console.log('Whitelist Merkletree\n', tree.toString());
console.log('Whitelist Hash\n', root);
console.log('Whitelist proof\n', hexProof.toString());