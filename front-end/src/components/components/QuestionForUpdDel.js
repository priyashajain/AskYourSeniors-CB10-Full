/* eslint-disable */
import React, { useEffect, useState } from "react";
import Answer from "./Answer";
import AnswerForUpdDel from "./AnswerForUpdDel";



function QuestionForUpdDel(props) {




  return (
    <div className="question-grey-container">
      <div className="question-main-container">

        <div className="info-container">
          <div className="student-info-container">
            <img src="../ASSETS/10.svg" alt="" />
            <div className="student-info">
              <p className="name">{props.fName} {props.lName}</p>
              <p className="branch-year">{props.branch}, {props.year}</p>
            </div>
          </div>
          <div className="category-like-container">
            <div className="category">
              <p>{props.category}</p>
            </div>
            <img src="../ASSETS/Favorite.svg" alt="" />
          </div>
        </div>

        <div className="question">
          <p>{props.content}</p>
        </div>


        {/* <p>{props.questionId}</p>
        <p>{props.answerSent.user.fName}</p> */}

      </div>

      {/* <br />         */}

          <AnswerForUpdDel
            // key={index}
            // id={index}
            answerId={props.answerSent._id}
            fName={props.answerSent.user.fName}
            lName={props.answerSent.user.lName}
            branch={props.answerSent.user.branch}
            year={props.answerSent.user.year}

            content={props.answerSent.content}
            category="Answer"
          />
        
      
    </div>
  );
}

export default QuestionForUpdDel;
