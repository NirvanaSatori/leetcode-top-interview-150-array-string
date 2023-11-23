/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0
    let minPrice = Number.MAX_VALUE;
    for(let i = 0; i < prices.length; i++) {
            if(prices[i] < minPrice){
                minPrice = prices[i]
            }else if(prices[i] - minPrice > maxProfit){
                maxProfit = prices[i] - minPrice
            }
    }
    return maxProfit;

//This following code also works;
//   let left = 0; // Buy
//   let right = 1; // sell
//   let max_profit = 0;
//   while (right < prices.length) {
//     if (prices[left] < prices[right]) {
//       let profit = prices[right] - prices[left]; // our current profit

//       max_profit = Math.max(max_profit, profit);
//     } else {
//       left = right;
//     }
//     right++;
//   }
//   return max_profit;
};