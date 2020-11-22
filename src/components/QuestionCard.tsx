export interface QuestionCardProps {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: any;
    questionNr: number;
    totalQuestions: number; 
}
 
const QuestionCard: React.FunctionComponent<QuestionCardProps> = ({question, answers, callback, userAnswer, questionNr, totalQuestions}) => {
    return ( 
    <div>
        <p className="number">Question: {questionNr} / {totalQuestions}</p>
        <p dangerouslySetInnerHTML={{__html: question}}></p>
        <div>
            {answers.map((a) => (
                <div>
                    <button disabled={userAnswer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{__html: a}}></span>
                    </button>
                </div>
            ))}
        </div>
    </div> 
    );
}
 
export default QuestionCard;