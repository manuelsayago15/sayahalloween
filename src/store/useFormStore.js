import { create } from "zustand"

export const useFormStore = create((set) => {
    return  {
        currentStep: 0,
        showIntro: true,
        nextStep: () => 
            set((state) => ({ 
                currentStep: state.currentStep + 1,
                question: state.question + 1 
            })),
        
        prevStep: () => 
            set((state) => ({
                currentStep: state.currentStep - 1
            })),
        hideShowIntro: () =>
            set((state) => ({
                showIntro: state.showIntro = false
            }))
        
    }
})