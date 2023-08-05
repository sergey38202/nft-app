import RedRound from "../../assets/red-level.svg";
import YellowRound from "../../assets/yellow-level.svg";
import BlueRound from "../../assets/blue-level.svg";
import GreenRound from "../../assets/green-level.svg";
import BinanceIcon from "../../assets/binance.svg";
import CCoin from "../../assets/c-coin-svgrepo-com.svg";
import HarmonyIcon from "../../assets/harmony.svg";
import SolanaIcon from "../../assets/solana.svg";
import CoinIcon from "../../assets/coin-svgrepo-com.svg";
import CryptoIcon from "../../assets/crypto-svgrepo-com.svg";
import ReactCryptoIcon from "../../assets/react-svgrepo-com.svg";
import WalletIcon from "../../assets/wallet.svg";
import MoneroIcon from "../../assets/monero-svgrepo-com.svg";
import BitcoinIcon from "../../assets/bitcoin-svgrepo-com.svg";

export const LEVEL_TABLE_ITEMS = [
    { id: 1, title: 'Rarity', items: ['Red', 'Yellow', 'Blue', 'Green'] },
    { id: 2, title: 'Color', items: [RedRound, YellowRound, BlueRound, GreenRound] },
    { id: 3, title: 'Name', items: ['Common', 'Uncommon', 'Rare', 'Legendary'] },
    { id: 4, title: 'Supply', items: [1800, 1000, 600, 60] }
];

export const LEVEL_SUPPORT_ITEMS = [
    { id: 1, image: BinanceIcon },
    { id: 2, image: CCoin },
    { id: 3, image: CoinIcon },
    { id: 4, image: HarmonyIcon },
    { id: 5, image: SolanaIcon },
    { id: 6, image: WalletIcon },
    { id: 7, image: CryptoIcon },
    { id: 8, image: ReactCryptoIcon },
    { id: 9, image: MoneroIcon },
    { id: 10, image: BitcoinIcon },
    { id: 11, image: CoinIcon },
]