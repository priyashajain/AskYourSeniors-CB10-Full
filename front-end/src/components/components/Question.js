/* eslint-disable */
import React, { useEffect, useState } from "react";
import Answer from "./Answer";


function Question(props) {
  const [isViewAnswersButtonActive, setIsViewAnswersButton] = useState(false);

  // useEffect(() => {
  //   // console.log(answers);
  //   console.log(question, user);
  // }, [])

  function handleViewAnswersButtonClick(event) {
    // alert("Answer button clicked!");
    setIsViewAnswersButton(!isViewAnswersButtonActive);
    // console.log(isViewAnswersButtonActive);
    getAnswerByQuestionId();
    event.preventDefault();
  }

  const [isAnsweringActive, setIsAnsweringActive] = useState(false);

  const [acategory, setACategory] = useState("");
  const [acontent, setAContent] = useState("");
  // const [user, setUser] = useState({
  //   _id: "", email: "", password: "", fName: "", lName: "", branch: "", year: ""
  // });
  const [userId, setUserId] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userfName, setUserfName] = useState("");
  const [userlName, setUserlName] = useState("");
  const [userBranch, setUserBranch] = useState("");
  const [userYear, setUserYear] = useState("");

  const [question_id, setQuestion_id] = useState("");
  const [questionCategory, setQuestionCategory] = useState("");
  const [questionContent, setQuestionContent] = useState("");
  // const [questionUser, setQuestionUser] = useState("")
  const [questionUserId, setQuestionUserId] = useState("");
  const [questionUserEmail, setQuestionUserEmail] = useState("");
  const [questionUserPassword, setQuestionUserPassword] = useState("");
  const [questionUserfName, setQuestionUserfName] = useState("");
  const [questionUserlName, setQuestionUserlName] = useState("");
  const [questionUserBranch, setQuestionUserBranch] = useState("");
  const [questionUserYear, setQuestionUserYear] = useState("");

  // const [question, setQuestion] = useState({
  //   _id: "",
  //   content: "",
  //   category: "",
  //   user: {
  //     _id: "",
  //     email: "",
  //     password: "",
  //     fName: "",
  //     lName: "",
  //     branch: "",
  //     year: ""
  //   }
  // });

  // const [answer, setAnswer] = useState({
  //   fName: "", lName: "", branch: "", year: "", category: "", content: ""
  // });

  // const [displayAnswer, setDisplayAnswer] = useState({
  //   fName: "", lName: "", branch: "", year: "", category: "", content: ""
  // });

  const [answers, setAnswers] = useState([]);

  const getAnswerByQuestionId = async () => {

    const id = props.questionId;
    console.log(id);
    let result = await fetch(`http://localhost:5000/answers/${id}`);
    result = await result.json();
    // console.log(result);
    // setUser(result);
    setAnswers(result);
    // console.log(result);

    // set_id(result._id);
    // setPassword(result.password);
    // setfName(result.fName);
    // setlName(result.lName);
    // setEmail(result.email);
    // setBranch(result.branch);
    // setYear(result.year);

  }

  const getQuestionById = async () => {
    const quesid = props.questionId;
    // let result = await fetch(`http://localhost:5000/user/${auth._id}`);
    let resQuestion = await fetch(`http://localhost:5000/question/${quesid}`);
    resQuestion = await resQuestion.json();
    // console.log(resUser);

    // setQuestion(resQuestion);

    setQuestion_id(resQuestion._id);
    setQuestionContent(resQuestion.content);
    setQuestionCategory(resQuestion.category);
    setQuestionUserId(resQuestion.user._id);
    setQuestionUserEmail(resQuestion.user.email);
    setQuestionUserPassword(resQuestion.user.password);
    setQuestionUserfName(resQuestion.user.fName);
    setQuestionUserlName(resQuestion.user.lName);
    setQuestionUserBranch(resQuestion.user.branch);
    setQuestionUserYear(resQuestion.user.year);
  }

  const getUserById = async () => {
    const auth = localStorage.getItem("user");
    // const id = JSON.parse(auth).email;
    const id = JSON.parse(auth)._id;
    // let result = await fetch(`http://localhost:5000/user/${auth._id}`);
    let resUser = await fetch(`http://localhost:5000/user/${id}`);
    resUser = await resUser.json();
    // console.log(resUser);

    // setUser(resUser);

    setUserId(resUser._id);
    setUserEmail(resUser.email);
    setUserPassword(resUser.password);
    setUserfName(resUser.fName);
    setUserlName(resUser.lName);
    setUserBranch(resUser.branch);
    setUserYear(resUser.year);
  }

  function handleAnswersButtonClick(event) {
    setIsAnsweringActive(!isAnsweringActive);
    // alert("Answer button clicked");
    getUserById();                           //working here as this function not async
    getQuestionById();
    event.preventDefault();
  }

  const handleAnswersButtonClickAndSubmitAnswer = async (event) => {
    // setDisplayAnswer(answer);
    // setIsViewAnswersButton(true);

    // setAnswer({
    //   fName: "", lName: "", branch: "", year: "", category: "", content: ""
    // });


    // getUserById();             //not working here as this function async
    // getQuestionById();

    const user = {
      _id: userId,
      email: userEmail,
      password: userPassword,
      fName: userfName,
      lName: userlName,
      branch: userBranch,
      year: userYear
    }

    console.log("User object I created", user);

    const question = {
      _id: question_id,
      content: questionContent,
      category: questionCategory,
      user: {
        _id: questionUserId,
        email: questionUserEmail,
        password: questionUserPassword,
        fName: questionUserfName,
        lName: questionUserlName,
        branch: questionUserBranch,
        year: questionUserYear
      }
    }

    console.log("Question object I created", question);


    let resultAnswer = await fetch("http://localhost:5000/createanswer", {
      method: "post",
      body: JSON.stringify({ content: acontent, user, question }),
      headers: {
        "Content-Type": "application/json"
      }
    });

    resultAnswer = await resultAnswer.json();                //result is the object which finally contains the question stored in the database
    // console.log(resultAnswer);

    setIsAnsweringActive(!isAnsweringActive);

    event.preventDefault();
  }

  // function handleChange(event) {
  //   const { name, value } = event.target;

  //   setAnswer(prevAnswer => {
  //     return {
  //       ...prevAnswer,
  //       [name]: value
  //     };
  //   });
  // }


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

        <a href="" onClick={handleAnswersButtonClick}>
          <div className="answer-container">
            <img src="../ASSETS/Message.svg" alt="" />
            <p>Answers</p>
          </div>
        </a>

        <a href="" onClick={handleViewAnswersButtonClick}>
          <div className="answer-container">
            <img src="../ASSETS/Message.svg" alt="" />
            <p>View Answers</p>
          </div>
        </a>

        <p>{props.questionId}</p>

        {isAnsweringActive ?
          <div className="form-for-answer">
            <form action="">
              {/* <label for="">First Name</label> <br />
              <input type="text" onChange={handleChange} value={answer.fName} name="fName" /> <br />

              <label for="">Last Name</label> <br />
              <input type="text" onChange={handleChange} value={answer.lName} name="lName" /> <br />

              <label for="">Branch</label><br />
              <input type="text" onChange={handleChange} value={answer.branch} name="branch" /> <br />

              <label for="">Year</label><br />
              <input type="text" onChange={handleChange} value={answer.year} name="year" /> <br /> */}

              <label for="">Category</label><br />
              {/* <input type="text" onChange={handleChange} value={answer.category} name="category" /> <br /> */}
              <input type="text" onChange={(event) => { setACategory(event.target.value) }} value={acategory} name="category" /> <br />

              <label for="">Your Answer</label><br />
              {/* <textarea name="content" onChange={handleChange} value={answer.content} cols="30" rows="2"></textarea> <br /> */}
              <textarea name="content" onChange={(event) => { setAContent(event.target.value) }} value={acontent} cols="30" rows="2"></textarea> <br />

              <button onClick={handleAnswersButtonClickAndSubmitAnswer}>Submit</button>
            </form>
          </div>

          : null
        }

      </div>

      <br />        {/*this is giving extra padding to grey container at bottom*/}
      {/* {isViewAnswersButtonActive ? <Answer 
        fName = {displayAnswer.fName}
        lName = {displayAnswer.lName}
        branch = {displayAnswer.branch}
        year = {displayAnswer.year}
        category = {displayAnswer.category}
        content = {displayAnswer.content}
      /> : null} */}

      {isViewAnswersButtonActive ? <div>{answers.map((answerItem, index) => {
        return (
          <Answer
            key={index}
            id={index}
            fName={answerItem.user.fName}
            lName={answerItem.user.lName}
            branch={answerItem.user.branch}
            year={answerItem.user.year}
            // category={questionItem.category}
            // content={questionItem.content}
            content={answerItem.content}
            category="Answer"
          />
        );
      })} </div> : null}
      {/* {isAnswersButtonActive? <div><Answer /><Answer /></div> : null} */}
      {/* <Answer />
            <Answer /> */}
    </div>
  );
}

export default Question;
