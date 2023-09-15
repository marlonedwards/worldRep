# worldRep
A dashboard for managing on-chain gaming reputation.

## Why?
Most traditional games are on centralized marketplaces such as Steam or Epic Games. These platforms give players profiles that show the amount of hours played, account age, and achievements earned per game. 

For on-chain gaming, this single profile does not exist. I believe that this lack of social reputation is one of the biggest barriers to on-chain game adoption.

## How?
My goal is to create an application for users to see all of their on-chain gaming data in one place. I will do this by creating a dApp that uses wallet providers to import user data. 

The profile data can either be stored on one chain or on a centralized service (for simplicity).

## Program Structure
1. Users create an account by using their primary wallet.
2. Then they can connect additional wallets (their data will be linked to parent wallet)

### Technical Challenges
- Games are on many different chains with different RPC endpoints.

## Next Steps
- Provide a method for manually importing game data.
- Show an explore page for on-chain games. (Users that play games from this portal can automatically link their account to the dashboard)
- Allow for users to select some in-game NFTs to be displayed on their profiles.
- Allow for users to share their profiles on this app.
