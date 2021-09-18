import useAuthThreeId from 'lib/hooks/useAuthThreeId'
import React from 'react'
import { daostyle } from '../../styles'

export default function Dao() {

    const {authenticate} = useAuthThreeId();
    return (
        <div style={daostyle}>
            <button onClick={authenticate}>Authenticate DID</button>
        </div>
    )
}