import { create } from "zustand"

export const useProblemStore = create(() => ({
    viewedProblems: [],
    viewedSolution: {}
}))

export const setViewedProblems = (problems) => {
    return useProblemStore.setState(() => ({
        viewedProblems: [...problems] 
    }))
}


export const setViewedSolution = (solution) => {
    return useProblemStore.setState(() => ({
        viewedSolution: {...solution} 
    }))
}