import { create } from "zustand"

export const useFormStore = create((set) => {
    return  {
        currentStep: 0,
        nextStep: () => 
            set((state) => ({ 
                currentStep: state.currentStep + 1 
            })),
        
        prevStep: () => 
            set((state) => ({
                currentStep: state.currentStep - 1
            }))
        
    }
})