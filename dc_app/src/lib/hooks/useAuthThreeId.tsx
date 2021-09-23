import { useState } from 'react';
import { EthereumAuthProvider, ThreeIdConnect } from '@3id/connect';
import ThreeIdResolver from '@ceramicnetwork/3id-did-resolver';
import Ceramic from '@ceramicnetwork/http-client';
import { IDX } from '@ceramicstudio/idx';
import { DID } from 'dids';
import Web3Modal from 'web3modal';
import { definitions } from '../../config.json';
import { useIdxContext } from 'lib/context/idxContext';

const CERAMIC_URL = process.env.CERAMIC_API || 'http://localhost:7007';
declare let window: any;
const threeIdConnect = new ThreeIdConnect();
/**
 * @notice used to authorize the user for IDX
 * @dev creates a ceramic instance, as well as IDX
 * @dev saves the ceramic and idx instances to the userContext hook
 * @dev saves ceramic and idx to the window object (for now)
 * @return useAuth function
 */
//TODO: Check to see if user is pre-authorized. If so, do not prompt them
const useAuthThreeId = () => {
  // const [authProvider, setAuthProvider] = useState<EthereumAuthProvider>();
  const { setCeramic, setIdx } = useIdxContext();
const [userDid, setUserDid] = useState<string>();
const [userIdx, setUserIdx] = useState<IDX>();

  const web3Modal = new Web3Modal({
    network: 'rinkeby', // Make this extensible
    cacheProvider: true,
  });
  const authenticate = async () => {
    const ethProvider = await web3Modal.connect();
    const addresses = await ethProvider.enable();

    const authProvider = new EthereumAuthProvider(ethProvider, addresses[0]);
    await threeIdConnect.connect(authProvider);

    const ceramic = new Ceramic(CERAMIC_URL);
    const did = new DID({
      provider: threeIdConnect.getDidProvider(),
      resolver: ThreeIdResolver.getResolver(ceramic),
    });
    await ceramic.setDID(did);
    await ceramic.did?.authenticate();

    // Sets the localStorage values
    const idx = new IDX({ ceramic, aliases: definitions });
    console.log('User Did')
    console.log(did.id);
    setCeramic(ceramic);
    setIdx(idx);
    setUserDid(did.id);
    setUserIdx(idx);
    window.idx = idx;
    window.ceramic = ceramic;
  };

  return { authenticate, userDid, userIdx };
};

export default useAuthThreeId;
