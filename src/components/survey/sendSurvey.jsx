import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase/config"; 
import { useFormStore } from "./store/useFormStore";
import { useState } from "react";
import LoadingScreen from "./LoadingScreen";

const SendSurvey = () => {
    const { answers, setisSubmmited, userInfo } = useFormStore()
    const [loading, setLoading] = useState(false)

    const handleSurvey = async () => {
        setLoading(true)
        // console.log('loading ', loading)
        try {

            const filteredUserInfo = Object.fromEntries(
                Object.entries(userInfo).filter(([k, v]) => v.trim() !== "")
            )

            const docRef = await addDoc(collection(db, "tests"), {
                user: filteredUserInfo,
                answers,
                createdAt: serverTimestamp(),
            })

            console.log("Encuesta enviada con ID: ", docRef.id)

            setisSubmmited(true)
        } catch (e) {
            console.error("Error al enviar encuesta; ", e)
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            { loading && <LoadingScreen /> }
            <button 
                className='next-button'
                onClick={handleSurvey}
                disabled={loading}
            >
                { loading ? 'Enviando...' : 'Enviar' }
            </button>
        </>
    )
}

export default SendSurvey