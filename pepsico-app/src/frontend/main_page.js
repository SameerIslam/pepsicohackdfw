import { signIn } from "../backend/auth";


export function MainPage(){
    async function getResponse(){
        const a = await signIn();
    }

    const handleClick = (event) =>{
        getResponse();
    }
    return(
        <button onClick={handleClick}>Main page</button>
    );
}