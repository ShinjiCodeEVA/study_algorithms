import { create } from "zustand"

export const useProblemStore = create(() => ({
    viewedProblems: []
}))

export const setViewedProblems = (problems) => {
    return useProblemStore.setState(() => ({
        viewedProblems: [...problems] 
    }))
}