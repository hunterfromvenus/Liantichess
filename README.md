## Liantichess

[![Nodejs-CI](https://github.com/SriMethan/Liantichess/actions/workflows/nodejs.yml/badge.svg)](https://github.com/SriMethan/Liantichess/actions/workflows/nodejs.yml)

Liantichess is a free, open-source antichess variants server designed to play antichess and antichess variants.

All supported games on Liantichess can be seen [here](https://liantichess.herokuapp.com/variants)

For move generation, validation, analysis and engine play it uses
- [Fairy-Stockfish](https://github.com/ianfab/Fairy-Stockfish)
- [fairyfishnet](https://github.com/gbtami/fairyfishnet) fork of [fishnet](https://github.com/lichess-org/fishnet)
- [lichess-bot-variants](https://github.com/gbtami/lichess-bot-variants) fork of [lichess-bot](https://github.com/ShailChoksi/lichess-bot)
- [fairyfishnet](https://github.com/theyobots/fairyfishnet) fork of [fairyfishnet](https://github.com/gbtami/fairyfishnet)
- [lichess-bot-variants](https://github.com/gbtami/lichess-bot-variants) fork of [lichess-bot](https://github.com/careless25/lichess-bot)

On client side it is based on
[chessgroundx](https://github.com/gbtami/chessgroundx) fork of [chessground](https://github.com/lichess-org/chessground)

##

liantichess is a free server and it will remain free forever.

## Installation

### Prerequisites
* You need mongodb up and running. [Mongo daemon](https://docs.mongodb.com/manual/installation/)


### Project setup
```
pip3 install -r requirements.txt --user // Install python requirements
yarn install                            // Install node requirements
yarn dev                                // Compile typescript files to javascript
yarn md                                 // Compile md files to html
```

### Start server
```
python3 server/server.py
```