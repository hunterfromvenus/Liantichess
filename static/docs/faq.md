# Frequently Asked Questions

## Liantichess

<details><summary>What is Liantichess?</summary>

Liantichess is a website dedicated to to play antichess and antichess960. Derived From Pychess and Credits to Gbtami .</details>

<details><summary>Why is it called Liantichess?</summary>

The server code is written like pychess and to play antichess.</details>

<details><summary>What is the relationship to [Lichess](https://lichess.org/)?</summary>

Liantichess's design is heavily influenced by Lichess and is meant to be comfortable for Lichess users. Liantichess has no official relationship to Lichess. However, it does use Lichess accounts to facilitate user management.</details>

<details><summary>What is Fairy-Stockfish?</summary>

Stockfish is one of the premier engines designed to play chess. [Fairy-Stockfish](https://github.com/ianfab/Fairy-Stockfish) is a fork of that created by [Ianfab](https://www.github.com/ianfab) to handle multiple chess variants.</details>

<details><summary>Is level 8 Stockfish the strongest available?</summary>

It is the strongest available on this site, but does not represent Fairy-Stockfish at full strength. Full strength requires more time to think and analyze; on Liantichess, Stockfish is limited to less than a second for each move.</details>

<details><summary>I found a bug! Where do I report it?</summary>

[Make an issue](https://github.com/SriMethan/Liantichess/issues/new). Ultimately it needs to be filed in Github issue tracker. Ideally, try to find a way to reproduce this bug in your description (if necessary, include the browser and OS). If you're not on Github, you can also mention it on Discord, and someone can file it.</details>

## Variants

<details><summary>What games are available?</summary>

Check out the [Variants page](https://liantichess.herokuapp.com/variants).</details>

<details><summary>How do you play XXX?</summary>

Check out the [Variants page](https://liantichess.herokuapp.com/variants). Also, within a game, you can click the variant name at the top left to be taken to that game's learn page.</details>

<details><summary>How do you choose which variants to add?</summary>

Only Antichess variants will be added to Liantichess. Often the most popular or well-known variants are added or variants related to games on [Pychess](https://www.pychess.org/) or [Lichess](https://lichess.org/). However, there are still some that can't be added. Liantichess relies on Fairy-Stockfish to support the variant, as our code also depends on Fairy-Stockfish for move validation. This also means no variants that aren't supported by Fairy-Stockfish can be on Liantichess.</details>

<details><summary>Can you add XXX?</summary>

It depends on how popular or how interesting the variant is. We can't even consider adding variants that aren't supported by Fairy-Stockfish. Otherwise, you can ask us on Discord or Github.</details>

## Interface

<details><summary>How do I change settings?</summary>

To change the settings, click the gear button in the top right of the screen (next to login or your username) and choose "Board Settings".</details>

<details><summary>How do I change pieces and boards? Are there western or internationalized pieces?</summary>

Same answer as above, and then click on "Board Settings." All Asian variants have internationalized pieces.</details>

<details><summary>How do I draw arrows and circles on the board?</summary>

Use the right click. Clicking gives you a circle, and dragging gives you an arrow. These are green by default. You can make them red by holding Shift or Ctrl, and you can make them blue by holding Alt.</details>

<details><summary>What does "5+3" mean for time?</summary>

Those are the time controls for the game. By default we use an increment system. "5+3" means each player has 5 *minutes*, and after each move adds 3 *seconds* to the clock. You can set the time control to be whatever you want when creating the game. The 5+3 is just the default for random mover.</details>

## Social/Accounts

<details><summary>How do I log in?</summary>

You need to have a Lichess account. If you don't already, please go to [Lichess](https://lichess.org/signup) to make an account.</details>

<details><summary>Would logging in with my Lichess account compromise my account/password?</summary>

No! That is done via OAuth and your password isn't revealed to LiAntichess, just like how you can log in to third-party websites with your Google or Facebook accounts.</details>

<details><summary>What's the best way to contact the developers?</summary>

You can try the lobby chat, although the developers might not be on to answer. More reliably, we use [Discord](https://discord.gg/S3JmrXtsF2).</details>