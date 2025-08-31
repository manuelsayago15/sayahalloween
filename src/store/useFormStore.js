import { create } from "zustand"

export const useFormStore = create((set) => {
    return  {
        currentStep: 0,
        showIntro: true,
        answers: {},
        nextStep: () => 
            set((state) => ({ 
                currentStep: state.currentStep + 1,
                //question: state.question + 1 
            })),
        
        prevStep: () => 
            set((state) => ({
                currentStep: state.currentStep - 1
            })),
        hideShowIntro: () =>
            set((state) => ({
                showIntro: state.showIntro = false
            })),
        setAnswer: (questionId, value) =>
            set((state) => ({
                answers: {
                    ...state.answers,
                    [questionId]: {
                        ...state.answers[questionId],
                        ...value
                    }
                }
            }))
        
    }
})