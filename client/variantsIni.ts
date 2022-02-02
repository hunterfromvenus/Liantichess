export const variantsIni = `
# Lose at anti-chess win at anti-antichess.
[anti_antichess:giveaway]
extinctionValue = loss
stalemateValue = loss
castling = false

# Hybrid of 3 check and antichess.
[coffee_3check:3check]
mustCapture = true

# Hybrid of rk and antichess
[coffeerace:racingkings]
mustCapture = true

[anticapablanca:capablanca]
mustCapture = true
extinctionValue = loss
extinctionPieceTypes = *
extinctionPseudoRoyal = fals

# Hybrid of antichess and atomic.
[antiatomic:giveaway]
blastOnCapture = true
castling = false

# Hybrid of antichess and zh. Antichess is the base variant.
[antihouse:giveaway]
pieceDrops = true
capturesToHand = true
pocketSize = 6
castling = false

# antichess with a pawn structure following horde rules.
[antipawns:horde]
king = -
commoner = k
startFen = pppppppp/pppppppp/pppppppp/8/8/PPPPPPPP/PPPPPPPP/PPPPPPPP w - - 0 1
promotionPieceTypes = nbrqk
stalemateValue = win
extinctionValue = win
mustCapture = true
extinctionPieceTypes = *
extinctionPseudoRoyal = false
castling = false

# Hybrid of antichess and zh. Zh is th base variant.
[coffeehouse:crazyhouse]
mustCapture = true

# Hybrid variant of antichess and king of the hill
[coffeehill:kingofthehill]
mustCapture = true

# Hybrid variant of antichess, atomic and king of the hill
[atomic_giveaway_hill:giveaway]
blastOnCapture = true
flagPiece = k
whiteFlag = d4 e4 d5 e5
blackFlag = d4 e4 d5 e5
castling = false`