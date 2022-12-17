/* eslint-disable */
import React, { useState } from "react";

function AnswerForUpdDel(props) {
    const [isUpdateButtonActive, setUpdateButton] = useState(false);

    const handleUpdateButton = () => {
        setUpdateButton(!isUpdateButtonActive);
    }


    const [updatedAnswer, setUpdatedAnswer] = useState("");

    const handleUpdatedAnswerClickAndSubmit = async () => {
        console.log(updatedAnswer);
        setUpdateButton(false);
        let result = await fetch(`http://localhost:5000/update-answer/${props.answerId}`, {
            method: 'Put',
            body: JSON.stringify({ content: updatedAnswer }),
            headers: {
                'Content-Type': "application/json"
            }
        });
        result = await result.json();

    }

    const handleDeleteButton = async ()=>{
        let result = await fetch(`http://localhost:5000/delete-answer/${props.answerId}`, {
            method: "Delete"
        });

        result = await result.json();
    }


    return (
        <div>
            {isUpdateButtonActive ? <div className="update-answer-container">
                <textarea
                    className="update-answer-input-box"
                    type="text"
                    placeholder="Enter new answer"
                    rows="3"
                    name="updatedAnswer"
                    value={updatedAnswer}
                    onChange={(event) => { setUpdatedAnswer(event.target.value) }}
                />
                <button className="update-answer-submit-button" onClick={handleUpdatedAnswerClickAndSubmit}>Submit</button>
            </div> : null}

            <div className="answer-question-main-container">

                <div className="left-part-answer-div">
                    <div className="answer-info-container">
                        <div className="answer-student-info-container">
                            <img src="../ASSETS/10.svg" alt="" />
                            <div className="student-info">
                                <p className="name">{props.fName} {props.lName}</p>
                                <p className="branch-year">{props.branch}, {props.year}</p>
                            </div>
                        </div>

                    </div>

                    <div className="question">
                        <p>{props.content}</p>
                    </div>
                </div>

                <div className="right-part-answer-div">
                    <button className="update-delete-button" onClick={handleDeleteButton}>Delete</button>
                    <button className="update-delete-button" onClick={handleUpdateButton}>Edit</button>
                </div>
            
            </div>
            {/* <p>{props.answerId}</p> */}
        </div>
    );
}

export default AnswerForUpdDel;