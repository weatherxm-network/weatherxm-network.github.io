---
outline: deep
---

# Wallets and Contracts controled by the association

## Station Rewards

::: info 55M tokens are allocated for station rewards, with a daily unlock schedule.
See [Station Rewards](/docs/station-rewards.html) for details.
:::

The amount of total undistributed token rewards is the sum of WXM balances of two addresses:

- [arb:0xb99401dBBc3576738b6Cd28F62aC35e4cA2Bd03d](https://arbiscan.io/address/0xb99401dBBc3576738b6Cd28F62aC35e4cA2Bd03d) is a multisig (safe.global)
 that holds the tokens initially allocated for station rewards. 
- Station rewards are periodically transfered to the Rewards Pool smart contract ([arb:0x2CDBa04dcFD3999ef3FDa00121b23c693AF4041b](https://arbiscan.io/address/0x2cdba04dcfd3999ef3fda00121b23c693af4041b)), where station owners can claim them from.

The initial balance of the Station Rewards Wallet was 55,000,000 $WXM (daily rewards and beta rewards) and
given the fixed rate of rewards, **it holds enough tokens to reward stations until 2034.**
Because data license auctions are in WXM the association receives WXM tokens back from the 
market and stores/locks them in order to provide rewards for the future beyond 2034.

## Treasury Wallets

- [eth:0xC506E1f48bC62e5659707c7DC4A5005F71C9EF26](https://etherscan.io/address/0xC506E1f48bC62e5659707c7DC4A5005F71C9EF26)
- [arb:0xe09471Ab9b3f8c45D7EBAdA73eC51F22776AFca3](https://arbiscan.io/address/0xe09471Ab9b3f8c45D7EBAdA73eC51F22776AFca3)
