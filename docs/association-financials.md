---
outline: deep
---

# WeatherXM Network Association Financials

## Wallets and Contracts controlled by the association

This section describes the allocation of the WeatherXM Network Association funds.

### Station Rewards

::: info 55M tokens are allocated for station rewards, with a daily unlock schedule.
See [Station Rewards](/docs/station-rewards.html) for details.
:::

The amount of **total undistributed token rewards** is the sum of WXM balances of two addresses:

- [arb:0xb99401dBBc3576738b6Cd28F62aC35e4cA2Bd03d](https://arbiscan.io/address/0xb99401dBBc3576738b6Cd28F62aC35e4cA2Bd03d)  
  This is a multisig (safe.global)
 that holds the tokens initially allocated for station rewards. 
- [arb:0x2CDBa04dcFD3999ef3FDa00121b23c693AF4041b](https://arbiscan.io/address/0x2cdba04dcfd3999ef3fda00121b23c693af4041b)  
  This is the Rewards Pool smart contract. Station rewards are periodically transfered from the multisig to the Rewards Pools, where station owners can claim them from.

The initial balance of the Station Rewards Wallet was 55,000,000 $WXM (daily rewards and beta rewards) and
given the fixed rate of rewards, **it holds enough tokens to reward stations until 2034.**
Because data license auctions are in WXM the association receives WXM tokens back from the 
market and stores/locks them in order to provide rewards for the future beyond 2034.

### Treasury Wallets

- [eth:0xC506E1f48bC62e5659707c7DC4A5005F71C9EF26](https://etherscan.io/address/0xC506E1f48bC62e5659707c7DC4A5005F71C9EF26)
- [arb:0xe09471Ab9b3f8c45D7EBAdA73eC51F22776AFca3](https://arbiscan.io/address/0xe09471Ab9b3f8c45D7EBAdA73eC51F22776AFca3)

| Wallet | Address| Type |
|:-|:-|:-|
|Revenue | 0xFf1AD9961b9D28dB7981CFb19E91AC0cF84Ed326| Liquid |
|Operational ETH | 0x35fe44D65b328245B1877F030eAc812B1F91d09a| Liquid |
|Operational ARB | 0x110008A4817bCa2072fc9CeA277c9C73802939C2| Liquid |
|Market Bootsrap ETH/ARB | 0xE4b785D9A620aB5A2f7a4e6618f8b3b150797260| Liquid |
|Treasury ETH/ARB | 0xe09471Ab9b3f8c45D7EBAdA73eC51F22776AFca3| Vested |
|Business Boost | 0xb99401dBBc3576738b6Cd28F62aC35e4cA2Bd03d| Liquid |

