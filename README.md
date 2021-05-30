# How does it work?

## DAPP

The suggested flow is to start by trying to purchase insurance. An error message
of "Airline not yet available to sell insurance" should be displayed in the
"Operational Status" because no funds have been added yet. After receiving funds
we should be able to buy insurance, or receive the insurance information, and
send a request of flight status to Oracles. This will trigger the callOracle and
submitOracleResponse functions in the server. If Oracles report a status code of
late airline, the contract will call the processFlightStatus function which will
credit passenger with 1.5X the amount they paid and the passenger should be able
to get paid.

## Server

The server will start by initializing 10 oracles. After that it will be ready to
receive any event call from the DAPP client.

## Features

The first airline is registered when the contract is deployed with isActive
status equals to true and haveFunds status equals to false. Then airlines are
added to the registration queue by calling the registerAirline function. To
confirm registration, a registered airline must call the setAirlineStatus
function. The first 3 airlines will be registered without the need of approval
of other airlines. Subsquently new airlines will need multi-party consensus of
50% of registered airlines.

To sell insurance the airline will need to submit funding of 10 ether to the
contract. This must be tested from the Dapp by trying to sell insurance before
adding funds.

## Events

The following events are available and can be viewed in the server terminal:

- OracleRequest
- BoughtInsurance
- FlightStatusInfo
- PassengerPaid
- FundsReceived

## Running tests

Running tests in the truffle console is more stable.

Type `truffle develop` in the terminal.

1. type `test test/flightSurety.js`

   14 tests should pass.

2. type `test test/oracles.js`

   2 tests should pass.

## Install

This repository contains Smart Contract code in Solidity (using Truffle), tests
(also using Truffle), dApp scaffolding (using HTML, CSS and JS) and server app
scaffolding.

To install, download or clone the repo, then:

`npm install` `npm install webpack-cli -g` `truffle compile`

## Develop Client

To use the dapp:

`truffle compile` `truffle migrate` `npm run dapp`

To view dapp:

`http://localhost:8000`

## Develop Server

`npm run server` `truffle test ./test/oracles.js`

## Deploy

To build dapp for prod: `npm run dapp:prod`

Deploy the contents of the ./dapp folder

## Resources

- [How does Ethereum work anyway?](https://medium.com/@preethikasireddy/how-does-ethereum-work-anyway-22d1df506369)
- [BIP39 Mnemonic Generator](https://iancoleman.io/bip39/)
- [Truffle Framework](http://truffleframework.com/)
- [Ganache Local Blockchain](http://truffleframework.com/ganache/)
- [Remix Solidity IDE](https://remix.ethereum.org/)
- [Solidity Language Reference](http://solidity.readthedocs.io/en/v0.4.24/)
- [Ethereum Blockchain Explorer](https://etherscan.io/)
- [Web3Js Reference](https://github.com/ethereum/wiki/wiki/JavaScript-API)
