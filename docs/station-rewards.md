# Station Rewards Allocation

<div style="display: flex; gap: 0.5rem; flex-wrap: wrap; align-items: flex-start; justify-content: space-between; margin-bottom: 0.5rem">

  <div style="flex: 0 0 60%;">
    Stations are rewarded with $WXM tokens (governance participation) based on the data they contribute on a daily basis.
  </div>

  <div style="flex: 0 0 35%;">
    <iframe 
      src="https://dune.com/embeds/3806895/6401672" 
      width="100%" 
      height="150"
      frameborder="0"
    ></iframe>
  </div>

</div>

<iframe
  src="https://dune.com/embeds/3806923/6401716"
  width="100%" 
  height="320" 
/>

## Algorithm

The Rewards Allocation Algorithm describes how rewards are distributed between the station owners.

Every day, the reward algorithm assesses the performance of all weather stations, and creates a Merkle tree containing the rewards every station owner can claim. The root hash is submitted to the RewardPool smart contract. The total amount of claimable tokens (including past unclaimed amounts) becomes available in the RewardPool.

Users can claim their rewards by using the Merkle proof. They don't have to claim their rewards on a daily basis and at any point in time they can claim all, or part of them.

## Daily rewards allocation algorithm

We use the Reward Mechanism v2.0 as described [here](https://docs.weatherxm.com/reward-mechanism#reward-mechanism-v20).
A detailed description of the final mechanism will be published here once finalized.

## Beta rewards

::: warning Important Update regarding Beta Rewards 
Stations started receiving $WXM rewards on **Arbitrum One** mainnet on May 30, 2024.
An updated, fairer calculation was used, that will ultimately deliver ~3.2M (instead of 3.0M) 
tokens to beta stations. [Read more on our blog](https://blog.weatherxm.com/a-fix-for-beta-rewards-dilution-493f1a81a28d).

The Beta Rewards Table (BRT) was calculated with all station data up to May 27, 2024, that marked the end of
the project's beta phase. You can find the BRT [here](beta-rewards-allocation-table). 
:::

According to the [Token Allocation](/docs/wxm-token.html#token-allocation) table 3,000,000 $WXM are reserved to reward stations that
participated in the network before the [Token Launch Day](/docs/wxm-token.html#token-launch-day) ("Beta period").

Beta rewards distribution will last 425 days, with Day 1 being the Token Launch day.


### Beta rewards calculation

The following values were calculated for each station `s`, on the day before the Token Launch:

1. `RewardableBetaHours[s]`.  
This is the total number of hours the station provided valid data during the Beta period.  
A rewardable hour is an hour during which the station sent at least one valid weather data point.
2. `StationBetaRewards[s] = 3000000 * RewardableBetaHours[s]/Sum(RewardableBetaHours of all stations)`  
This is the percentage of the 3m tokens that correspond to the rewardable hours the station provided.
3. `DailyBetaRewards[s] = StationBetaRewards[s]/365`  
This is the beta rewards allocated daily to this station.

Stations had to have a wallet defined to be part of the Beta Rewards allocation.

### Beta rewards claim

For 425 days after the Token Launch, stations are rewarded according to the following formula, and will be able to claim
beta rewards and normal daily rewards together.

`Rewards = DailyRewards[s] + ( DailyBetaRewards[s] * QoD_Score )`
