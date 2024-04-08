# Station Rewards Allocation

Stations are rewarded with $WXM tokens (governance participation) based on the data they contribute on a daily basis.

::: info
- Stations will start receiving $WXM rewards on Arbitrum **sepolia testnet** by January 16, 2024
- Stations will start receiveing $WXM rewards on Arbitrum **mainnet** soon (TBA).
:::

## Algorithm

The Rewards Allocation Algorithm describes how rewards are distributed between the station owners.

Every day, the reward algorithm will assess the performance of all weather stations, and will create a Merkle tree containing the rewards every station owner can claim, and the root hash will be submitted to the RewardPool. The total claimable amount (including past unclaimed amounts) is also made available in the RewardPool.

Users can claim their rewards by using the Merkle proof. They don't have to claim their rewards on a daily basis and at any point in time they can claim all, or part of them.

## Daily rewards allocation algorithm

We intend to use the Reward Mechanism v2.0 as described [here](https://docs.weatherxm.com/reward-mechanism#reward-mechanism-v20).
A detailed description of the final mechanism will be published here once finalized.

## Beta rewards

According to the [Token Allocation](/docs/wxm-token.html#token-allocation) table 3,000,000 $WXM are reserved to reward stations that
participated to the network before the [Token Launch Day](/docs/wxm-token.html#token-launch-day) ("Beta period").

Beta rewards distribution will last 425 days, with Day 1 being the Token Launch day.

::: tip
The final Beta Rewards Table (BRT) will
be calculated the day before the mainnet lauch. A preview is available
[here](beta-rewards-allocation-table). 
:::

### Calculation

The following calculations will take place for each station `s`, the day before the Token Launch:

1. `RewardableBetaHours[s]`.  
This is the total number of hours the station provided valid data during the Beta period.  
A rewardable hour is an hour during which the station sent at least one valid weather data point.
2. `StationBetaRewards[s] = 3000000 * RewardableBetaHours[s]/Sum(RewardableBetaHours of all stations)`  
This is the percentage of the 3m tokens that correspond to the rewardable hours the station provided.
3. `DailyBetaRewards[s] = StationBetaRewards[s]/365`  
This is the beta rewards allocated daily to this station.

Stations must have a wallet defined to be part of the Beta Rewards allocation.

The day before the mainnet launch, [the Beta Rewards Table will be updated and published here](beta-rewards-allocation-table).

### Claim

For 425 days after the Token Launch, **in addition to their daily rewards**, stations will be able to claim beta rewards as follows:

`BetaRewards[s] = DailyBetaRewards[s] * QoD_Score`

So each one of the stations that participated during the Beta period, every day after the Token Launch, and for 365 days, they will be able to claim:

`Rewards = DailyRewards + BetaRewards`