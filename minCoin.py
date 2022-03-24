coins = [2,10]
amount = 14
amountLimit = amount + 1
# initialize the matrix 

dp = [amountLimit] * amountLimit
dp[0] = 0

denominations = {}

for a in range(0,amountLimit):
    denominations[str(a)] = []

for a in range(1,amountLimit):
    for c in coins:
        if a - c >= 0 :
            prevDp = dp[a]
            dp[a] = min(dp[a], 1 + dp[ a - c ])
            if dp[a] != prevDp:
                denominations[str(a)] = [c] + denominations[str(a - c)]

print(dp)
print(denominations)

