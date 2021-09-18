import { useIdxContext } from 'lib/context/idxContext';
import useAuthThreeId from 'lib/hooks/useAuthThreeId'
import { useIDX } from 'lib/hooks/useIDX';
import React, { useEffect } from 'react'
import { daostyle } from '../../styles'

export default function Dao() {
    
    const {authenticate} = useAuthThreeId();
    const {getProfile, auth, setProfile} = useIDX();
    const {idx, ceramic, did} = useIdxContext();

    const authUser = async () => {
        await authenticate()
    }

    const getDidProfile = async () => {
        if (idx != '') {
            console.log('Claro')
            console.log(did)
            let isAuthorized = await auth();
            if (isAuthorized) {
                getProfile();
            }
        } else {
            console.log('No IDX Yet')
        }
    }

    const setPro = async () => {
        setProfile();
    }


    return (
        <div style={daostyle}>
            <button onClick={authUser}>Authenticate DID</button>
            <br />
            <button onClick={getDidProfile}>Get Profile Info</button>
            <br />
            <button onClick={setPro}>Set Profile</button>
        </div>
    )
}

function auth() {
    throw new Error('Function not implemented.');
}
