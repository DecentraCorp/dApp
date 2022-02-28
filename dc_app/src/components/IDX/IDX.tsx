import { useIdxContext } from 'lib/context/idxContext';
// import useAuthThreeId from 'lib/hooks/useAuthThreeId'
import { useIDX } from 'lib/hooks/useIDX';
import CreateProfileForm from '../../components/CreateProfileForm/CreateProfileForm';
import {
    ButtonsContainer,
    Wrapper
} from './Style';

export default function Dao() {
    
    // const {authenticate} = useAuthThreeId();
    const {getProfile, auth, setProfile} = useIDX();
    const {idx, did} = useIdxContext();

    const authUser = async () => {
        // await authenticate()
    }

    const getDidProfile = async () => {
        // eslint-disable-next-line eqeqeq
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
        setProfile({name: 'Ryan Dev'});
    }


    return (
        <Wrapper>
            <ButtonsContainer>
            <button onClick={authUser}>Authenticate DID</button>
            <br />
            <button onClick={getDidProfile}>Get Profile Info</button>
            <br />
            <button onClick={setPro}>Set Profile</button>
            </ButtonsContainer>
            {/* Components to buildout;
            create profile form (to be inside a module)
            profile display component
            edit profile form (inside modal) */}
            {/* <CreateProfileForm /> */}
        </Wrapper>
    )
}