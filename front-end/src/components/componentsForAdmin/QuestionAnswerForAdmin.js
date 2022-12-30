/* eslint-disable */
import React, { useEffect, useState } from "react";
import AnswerForAdmin from "./AnswerForAdmin";




function QuestionAnswerForAdmin(props) {

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



      </div>


      <AnswerForAdmin
        answerId={props.answerSent._id}
        fName={props.answerSent.user.fName}
        lName={props.answerSent.user.lName}
        branch={props.answerSent.user.branch}
        year={props.answerSent.user.year}

        content={props.answerSent.content}
        category="Answer"
      />

      {/* <AnswerForAdmin
        // answerId={props.answerSent._id}
        fName="Student"
        lName="Name"
        branch="MAE"
        year="2021"

        content="1111111111111 2222222222222222 33333333333333333 44444444444444444 55555555555"
        category="Answer"
      /> */}


    </div>
  );
}

export default QuestionAnswerForAdmin;
