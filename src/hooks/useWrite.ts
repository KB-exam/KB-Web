import { ChangeEvent, useState } from "react"

interface ProblemType {
    type: "2" | "4",
    tag: string;
    title: string;
    content: string;
    choice: string[];
    answer: number;
}

interface WriteType {
    problems: ProblemType[];
}

const problemInit:ProblemType = {
    type: "4",
    title: '',
    tag: '',
    content: '',
    choice: [],
    answer: 0,
}

export const useWirte = () => {
    const [state,setState] = useState<WriteType>({
        problems: [],
    })

    return {
        state,
        changeText: (e: ChangeEvent<HTMLInputElement>) =>  {
            const { name ,value } = e.target;
            setState({...state,[name]: value})
        },
        addProblem: () => setState({...state,problems: state.problems.concat(problemInit)}),
        removeProblem: () => {

        },
        problem: (index: number) => {
        const { problems } = state
        const problemChange = (problems: ProblemType[]) => setState({...state,problems})
        const changeElement = (index:number,newElement: ProblemType) => {
            const temp = [...state.problems];
            temp.splice(index,1,newElement)
            return temp
        }
    
        const changeType = {
            2: () => problemChange(changeElement(index, { ...problems[index], type: "2"})),
            4: () => problemChange(changeElement(index, { ...problems[index], type: "4"}))
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
        return {
            changeType,
            changeChoice,
            changeProblemText,
        }
    }}
}