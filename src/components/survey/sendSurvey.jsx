import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase/config"; 
import { useFormStore } from "./store/useFormStore";

const SendSurvey = () => {
    const { answers, setisSubmmited, userInfo } = useFormStore()

    const handleSurvey = async () => {
        try {
            const docRef = await addDoc(collection(db, "responses"), {
                user: userInfo,
                answers,
                createdAt: serverTimestamp(),
            })

            console.log("Encuesta enviada con ID: ", docRef.id)

            setisSubmmited(true)
        } catch (e) {
            console.error("Error al enviar encuesta; ", e)
        }
    }

    return (
        <>
            <button 
                className='next-button'
                onClick={handleSurvey}
            >
                Enviar
            </button>
        </>
    )
}

export default SendSurvey