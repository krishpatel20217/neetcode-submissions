class Solution {
    maxProfit(prices) {

        let minPrice = prices[0];
        let profit = 0;

        for(let i = 1; i < prices.length; i++) {

            let currentProfit = prices[i] - minPrice;

            profit = Math.max(profit, currentProfit);

            minPrice = Math.min(minPrice, prices[i]);
        }

        return profit;
    }
}