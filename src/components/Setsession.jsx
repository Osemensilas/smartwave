import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Setsession = () => {
    const navigate = useNavigate();
    let browserSession = sessionStorage.getItem("session");

    

    let [timer, setTimer] = useState(0);

    useEffect(() => {

        const session = { userSession: browserSession };

        const endSession = async function () {
            try{
                const response = await axios.post("http://localhost/backends/waves/logout.php",
                    session,
                    {
                        headers: {
                            "Content-Type" :  "Application/json"
                        },
                        withCredentials: true,
                    }
                );
                if (response.data === 'logged out'){
                    sessionStorage.setItem('session', '');

                    let browserSession = sessionStorage.getItem("session");

                    if (browserSession === ''){
                        navigate('/home');
                    }
                }
            }catch(err){
                console.log(err);
            }
        }

        setInterval(() => {

            setTimer(timer + 1);
            
            if (timer === 2){
                endSession();
            }
        }, 60000);
    }, [timer, navigate, browserSession]);


}


export default Setsession;