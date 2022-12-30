/* eslint-disable */
import React, { useState } from "react";

function AnswerForAdmin(props) {
    // const [isUpdateButtonActive, setUpdateButton] = useState(false);

    // const handleUpdateButton = () => {
    //     setUpdateButton(!isUpdateButtonActive);
    // }


    // const [updatedAnswer, setUpdatedAnswer] = useState("");

    // const handleUpdatedAnswerClickAndSubmit = async () => {
    //     console.log(updatedAnswer);
    //     setUpdateButton(false);
    //     let result = await fetch(`http://localhost:5000/update-answer/${props.answerId}`, {
    //         method: 'Put',
    //         body: JSON.stringify({ content: updatedAnswer }),
    //         headers: {
    //             'Content-Type': "application/json"
    //         }
    //     });
    //     result = await result.json();

    // }



    const handleAdminAnswersDeleteButton = async ()=>{
        let result = await fetch(`http://localhost:5000/delete-answer/${props.answerId}`, {
            method: "Delete"
        });

        result = await result.json();
    }

    const handleAdminAnswersApproveButton = async ()=>{
        let result = await fetch(`http://localhost:5000/update-answer-approved/${props.answerId}`, {
            method: 'Put',
            body: JSON.stringify({ approved: true }),
            headers: {
                'Content-Type': "application/json"
            }
        });
        result = await result.json();
    }


    return (
        <div>

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
                    <button className="update-delete-button" onClick={handleAdminAnswersApproveButton}>Approve</button>
                    <button className="update-delete-button" onClick={handleAdminAnswersDeleteButton}>Delete</button>
                </div>
            
            </div>
         
        </div>
    );
}

export default AnswerForAdmin;