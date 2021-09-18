import { useCallback } from 'react';
import { TileDocument } from '@ceramicnetwork/stream-tile';
import { schemas } from '../../config.json';
import { useIdxContext } from 'lib/context/idxContext';

export type InvoiceItem = {
  id: string;
  title: string;
};

export type InvoiceList = { invoices: Array<InvoiceItem> };

/**
 * @notice Hook that handles updating the IDX interface
 * @notice https://developers.idx.xyz/reference/idx/
 * @return functions and state from state.ts
 * TODO: Evaluate need to have state and dispatch functionality
 */
export function useIDX() {
  const { idx, ceramic } = useIdxContext();
  // const [id, setId] = useState(idx.id);

  /**
   * @notice Used to check authentication of user
   */
  const auth = async ():Promise<boolean> => {
    if (ceramic.did._id !== '') {
        return true;
    }
    return false;
  };

  /**
   * @notice used to get all invoices listed withing a users IDX
   * @return array of invoice objects (see InvoiceList interface)
   */
  const getProfile = async (): Promise<InvoiceList> => {
    const values = await idx.get('basicProfile');
    console.log(values);
    return values;
  };

  const setProfile = async () => {
    await idx.set('basicProfile', {name: 'Ryan Turner (Dev)',}) // Example profile set call
  }

  /**
   * @notice function used to save invoice link to IDX
   * @dev first calls idx create to create the document,
   * @dev then saves invoice info to IDX in a list for easy retrieval.
   * @dev uses useCallback
   * @param title<string> (title of invoice), text<string> (link for IPFS)
   * @return void
   */
  const saveInvoice = useCallback(async (title: string, text: string) => {
      //! This is a holdover call from another app. Left here as an example of how to 
      //! create documents on the users account.
    console.log(idx);
    console.log(ceramic);
    await TileDocument.create(
      ceramic,
      {
        date: new Date().toISOString(),
        title,
        text,
      },
      {
        schema: schemas.Invoice,
      }
    )
      .then(async (doc: TileDocument) => {
        const invoiceList = await idx.get('invoices');
        const invoices = invoiceList?.invoices ?? [];
        return idx
          .set('invoices', {
            invoices: [{ id: doc.id.toUrl(), title, text }, ...invoices],
          })
          .then(() => {
            console.log('Invoice Saved');
          });
      })
      .catch((err: any) => {
        console.log(`Error in saveInvoice: `, err);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    auth,
    saveInvoice,
    getProfile,
    setProfile
  };
}

// Image Format: 
// image: {
//     original: {
//       src: "ipfs://bafy...",
//       mimeType: "image/png",
//       width: 500,
//       height: 200
//     }
//   },
//Generic userProfile fields. These are always available
// Property	Description	Value	Max Size	Required	Example
// name		        string	150 char	optional	Mary Smith
// image		    Image sources		optional	
// description		string	420 char	optional	This is my cool description.
// emoji		    unicode	2 char	    optional	🔢
// background       Image sources		optional	background image (3:1 ratio)	
// birthDate	   	10 char	            optional	1990-04-24
// url		        string	240 char	optional	http://ceramic.network
// gender		    string	42 char	    optional	female
// homeLocation		string	140 char	optional	Berlin
// residenceCountry	ISO 3166-1 alpha-2	2 char	optional	DE
// nationalities	array of ISO 3166-1 alpha-2 values	2 char	optional	CN
// affiliations		array of strings	240 char	optional	Ceramic Ecosystem Alliance