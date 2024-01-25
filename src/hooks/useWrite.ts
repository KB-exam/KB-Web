import { ChangeEvent, useState } from "react"

interface ProblemType {
    type: "2" | "4",
    category: string;
    title: string;
    content: string;
    choice: string[];
    answer: string;
}

interface WriteType {
    problems: ProblemType[];
}

const problemInit:ProblemType = {
    type: "4",
    title: '',
    category: '',
    content: '',
    choice: ['','','',''],
    answer: '1',
}

export const useWirte = () => {
    const [state,setState] = useState<WriteType>({
        problems: [problemInit],
    })

    return {
        state,
        problem: (index: number) => {
        const { problems } = state
        const problemChange = (problems: ProblemType[]) => setState({...state,problems})
        const changeElement = (index:number,newElement: ProblemType) => {
            const temp = [...state.problems];
            temp.splice(index,1,newElement)
            return temp
        }
    
        const changeType = {
            2: () => problemChange(changeElement(index, { ...problems[index], type: "2", answer: "O"})),
            4: () => problemChange(changeElement(index, { ...problems[index], type: "4", answer: "1"}))
        }

        const changeChoice = (choiceIndex: number) => (e:ChangeEvent<HTMLInputElement>) => {
            const problem = problems[index];
            const temp  = [...problem.choice];
            
            temp.splice(choiceIndex,1, e.target.value)
            problemChange(changeElement(index, { ...problem, choice: temp}))
        }
        const changeProblemText = (e:ChangeEvent<HTMLInputElement>) => {
            const problem = problems[index];
            const { name, value } = e.target
            problemChange(changeElement(index, {...problem, [name]: value }))
        }
        const clickProblemText = (text: string) => {
            const problem = problems[index];
            problemChange(changeElement(index, {...problem, "answer": text }))
        }
        return {
            changeType,
            changeChoice,
            changeProblemText,
            clickProblemText,
        }
    }}
}