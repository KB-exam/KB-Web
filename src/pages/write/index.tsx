import { Button } from "@/components/button"
import { Dropdown } from "@/components/dropdown"
import { Input } from "@/components/input"
import { useWirte } from "@/hooks/useWrite"

const type2 = ["O","X"];
const type4 = ['1','2','3','4']

export default () => {
    const { state, addProblem, removeProblem, changeText, problem } = useWirte()

    return <main className="py-32 px-10">
        {
            state.problems.map(({type,tag, title,content,choice,answer},idx) => {
                const {changeChoice,changeProblemText,changeType} = problem(idx)
                const isOX = type === "2"; 
                return (<div>
                    <Input label="문제의 유형" name="tag" value={tag} onChange={changeProblemText} />
                    <div className="flex gap-3">
                    <input type="radio" onChange={changeType[2]} checked={type === "2"} />
                    OX 퀴즈
                    </div>
                    <div className="flex gap-3">
                    <input type="radio" onChange={changeType[4]} checked={type === '4'} />
                    4지선다 퀴즈
                    </div>
                    
                    <Input label="title" name="title" value={title} onChange={changeProblemText} />
                    <Input label="content" name="content" value={content} onChange={changeProblemText} />
                    
                    {!isOX && Array(Number(type)).fill("2").map((_,idx) => <Input label={idx + "번"} name="choice" value={choice[idx]} onChange={changeChoice(idx)}/>)}
                    <Dropdown elements={isOX ? type2 : type4 } />
                </div>)})
        }
        <span onClick={addProblem}>
            <Button>
                add
            </Button>
        </span>

    </main>
}