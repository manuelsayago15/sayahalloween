import { create } from "zustand"

export const useFormStore = create((set) => {
    return  {
        currentStep: 0,
        showIntro: true,
        answers: {},
        userInfo: {
            name: '',
            email: ''
        },
        inputError: false,
        isSubmmited: false,
        setInputError: (value) => set(() => ({ inputError: value })),
        setisSubmmited: (value) => set(() => ({ isSubmmited: value })),
        setUserInfo: (key, value) => 
            set((state) => ({
                userInfo: {
                    ...state.userInfo, 
                    [key]: value,
                }
            })),
        nextStep: () => 
            set((state) => ({ 
                currentStep: state.currentStep + 1,
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