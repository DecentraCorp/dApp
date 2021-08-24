import { ContractAddresses } from './contracts';
import { NETWORK_TYPES } from './networks';

// TODO: remove any, fix network types
const addresses: { [network in NETWORK_TYPES]: ContractAddresses } = {
  [NETWORK_TYPES.LOCAL]: {
    DecentraStock: 0xB5cb4ec3ec818Bd7F40c9CACE96f70f47bbbFB62,
    DecentraDollar: 0x3d6633369e4D07304aa27ffdb653E221ed25f918,
    DScore: 0x24aa949Fe2445e4F3bb6f2072c1c44FeD45c89E0,
    DecentraCore: 0x2BbeF6aC3Cc291aA3bA7116a6509A3990f46e010,
    DecentraBank: 0x9837F2d66503CF2D283Eb5189c3dD744781da317
  },
} as any;

export default addresses;