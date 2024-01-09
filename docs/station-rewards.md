# Station Rewards Allocation

Stations are rewarded with $WXM tokens (governance participation) based on the data they contribute on a daily basis.

::: info
- Stations will start receiveing $WXM rewards on Arbitrum **mainnet** in February 2024.
- Stations will start receiving $WXM rewards on Arbitrum **sepolia testnet** by January 16, 2024
:::

## Algorithm

The Rewards Allocation Algorithm describes how rewards are distributed between the station owners.

Every day, the reward algorithm will assess the performance of all weather stations, and will create a Merkle tree containing the rewards every station owner can claim, and the root hash will be submitted to the RewardPool. The total claimable amount (including past unclaimed amounts) is also made available in the RewardPool.

Users can claim their rewards by using the Merkle proof. They don't have to claim their rewards on a daily basis and at any point in time they can claim all, or part of them.

## Daily rewards allocation algorithm

We intend to use the Reward Mechanism v2.0 as described [here](https://docs.weatherxm.com/reward-mechanism#reward-mechanism-v20).
A detailed description of the final mechanism will be published here once finalized.
