/* eslint-disable */
import React, { useState } from "react";
import Question from "./Question";
import CreateQuestion from "./CreateQuestion";
import Navbar from "./Navbar";
import Search from "./Search";
import Chatbot from "./Chatbot";
import LeftBorder from "./LeftBorder";


function App() {
  // let popup = document.getElementById("popup");

  // function openPopup(event){
  //   popup.classList.add("open-popup");
  //   // alert("Hello World!");
  // }
  // function closePopup(event){
  //   popup.classList.remove("open-popup");
  // }


  const [questions, setQuestions] = useState([]);

  function addQuestion(question) {
    setQuestions(prevQuestions => {
      return [...prevQuestions, question];
    });
  }



  return (
    <div className="complete">
      <LeftBorder />

      <div className="right-area">

        <Navbar />

        <Search />

        <CreateQuestion onAdd={addQuestion} />

        <div className="main-container">
          <div className="buttons-container">
            <button className="question-section-button">
              <p>All Questions</p>
            </button>
            <button className="question-section-button">
              <p>Your Questions</p>
            </button>
            <button className="question-section-button">
              <p>Your Answers</p>
            </button>
          </div>

          {questions.map((questionItem, index) => {
            return (
              <Question
                key={index}
                id={index}
                fName={questionItem.fName}
                lName={questionItem.lName}
                branch={questionItem.branch}
                year={questionItem.year}
                category={questionItem.category}
                content={questionItem.content}
              />
            );
          })}

          <Question
            fName="Student"
            lName="Name"
            branch="ECE"
            year="2024"
            category="Programming"
            content="Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel tristique orci. Nam neque leo, rutrum et nulla quis, ullamcorper varius nisl. Aliquam elementum tortor a nibh maximus, id porta est accumsan.elit"
          />
          {/* <Question
            fName="Student"
            lName="Name"
            branch="ECE"
            year="2024"
            category="Programming"
            content="Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel tristique orci. Nam neque leo, rutrum et nulla quis, ullamcorper varius nisl. Aliquam elementum tortor a nibh maximus, id porta est accumsan.elit"
          />
          <Question fName="Student"
            lName="Name"
            branch="ECE"
            year="2024"
            category="Programming"
            content="Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel tristique orci. Nam neque leo, rutrum et nulla quis, ullamcorper varius nisl. Aliquam elementum tortor a nibh maximus, id porta est accumsan.elit" />
          <Question
            fName="Student"
            lName="Name"
            branch="ECE"
            year="2024"
            category="Programming"
            content="Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel tristique orci. Nam neque leo, rutrum et nulla quis, ullamcorper varius nisl. Aliquam elementum tortor a nibh maximus, id porta est accumsan.elit"
          /> */}

        </div>




      </div>

      <Chatbot />

    </div>
  );
}

export default App;
