/* eslint-disable */
import React, { useState, useEffect } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function CreateQuestion(props) {


    const [isActive, setIsActive] = useState(false);

    // const [question, setQuestion] = useState({
    //     fName: "", lName: "", branch: "", year: "", category: "", content: ""
    // });
    // const [question, setQuestion] = useState({
    //     content: "",
    //     category: "",
    //     user: {
    //         _id: "",
    //         email: "",
    //         password: "",
    //         fName: "",
    //         lName: "",
    //         branch: "",
    //         year: ""
    //     }
    // });

    const [content, setContent] = useState("");
    const [category, setCategory] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fName, setfName] = useState("");
    const [lName, setlName] = useState("");
    const [branch, setBranch] = useState("");
    const [year, setYear] = useState("");
    const [_id, set_id] = useState("");
    const [approved, setApproved] = useState(false);

    const [user, setUser] = useState({
        email: "", password: "", fName: "", lName: "", branch: "", year: ""
    });

    useEffect(() => {
        // const auth = localStorage.getItem("user");
        // getUserById(id);
        // getUserById();
        console.log(_id, email, password, fName, lName, branch, year, content, category);
    }, [_id, email, password, fName, lName, branch, year, content, category, approved])

    const getUserById = async () => {
        const auth = localStorage.getItem("user");
        // const id = JSON.parse(auth).email;
        const id = JSON.parse(auth)._id;
        // let result = await fetch(`http://localhost:5000/user/${auth._id}`);
        let result = await fetch(`http://localhost:5000/user/${id}`);
        result = await result.json();
        console.log(result);
        // setUser(result);

        set_id(result._id);

        // setPassword(result.password);
        setfName(result.fName);
        setlName(result.lName);
        setEmail(result.email);
        // setBranch("eceai");
        setBranch(result.branch);
        setYear(result.year);
        setApproved(false);
        // // console.log(result._id);
        // // console.log(_id,email,password,fName,lName,branch,year);
        // console.log(branch);
        // console.log(user);
    }

    // function handlePopUpClickAndSubmitQuestion(event) {
    const handlePopUpClickAndSubmitQuestion = async (event) => {
        // props.onAdd(question);                  //keep it, and in Ask Your Doubts, in the function addQuestion, do getQuestions and/or setQuestions again
        // setQuestion({
        //     fName: "", lName: "", branch: "", year: "", category: "", content: ""
        // });

        // const auth = localStorage.getItem("user");
        // setEmail(auth.email);
        // getUserById(JSON.parse(auth).email);
        // console.log(user);

        if (category === "") {
            alert("Please select category!");
        }
        else {
            // alert("Question submitted");
            const user = {
                _id: _id,
                email: email,
                // password: password,
                fName: fName,
                lName: lName,
                branch: branch,
                year: year
            }

            console.log('object i created', JSON.stringify(user));


            let result = await fetch("http://localhost:5000/createquestion", {
                method: "post",
                body: JSON.stringify({ content, category, user, approved }),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            result = await result.json();                //result is the object which finally contains the question stored in the database
            console.log(result);


            let resultNoOfDoubtsAsked = await fetch(`http://localhost:5000/user-increment-noOfDoubtsAsked/${_id}`, {                 //this result gets the value of res.send()
                method: 'Put',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            resultNoOfDoubtsAsked = await resultNoOfDoubtsAsked.json();

            // props.onAdd(question);                  //(here)keep it, and in Ask Your Doubts, in the function addQuestion, do getQuestions and/or setQuestions again

            // props.onAdd();

            // setQuestion({
            //     content: "",
            //     category: "",
            //     user: {
            //         _id: "",
            //         email: "",
            //         password: "",
            //         fName: "",
            //         lName: "",
            //         branch: "",
            //         year: ""
            //     }
            // });

            // setCategory("");
            // setContent("");

            // console.log(content);

            // console.log(isActive);          //############
            // setIsActive(!isActive);         //############
            event.preventDefault();         //############
           
        }

    }

    function handlePopUpClick(event) {
        // const auth = localStorage.getItem("user");
        // // console.log(JSON.parse(auth)._id);
        // // getUserById(JSON.parse(auth)._id);
        // console.log(JSON.parse(auth).email);
        // setEmail(JSON.parse(auth).email);
        // console.log(email);
        getUserById();

        // setBranch("mlai");
        console.log(isActive);
        setIsActive(!isActive);
    }



    function handleChange(event) {
        const { name, value } = event.target;

        setQuestion(prevQuestion => {
            return {
                ...prevQuestion,
                [name]: value
            };
        });
    }



    return (
        <div>
            {/* <div className={"pop-up-container" + (isActive ? "open-popup" : "")} id="popup">
                <form action="">

                    <label for="">Category</label><br />
                    <input type="text" onChange={(event) => { setCategory(event.target.value) }} value={category} name="category" /> <br />

                    <label for="">Doubt</label><br />
                    <textarea name="content" onChange={(event) => { setContent(event.target.value) }} value={content} cols="30" rows="2"></textarea> <br />

                    <button onClick={handlePopUpClickAndSubmitQuestion}>Submit</button>
                </form>
            </div> */}


            <div className="post-doubt-container">
                <input
                    type="text"
                    className="post-doubt-input-box"
                    placeholder="Ask Your Doubt"
                    name="content"
                    onChange={(event) => { setContent(event.target.value) }}
                    value={content}
                />

                <div className="post-doubt-button-container">
                    {/* <button className="post-doubt-category-button">
                        <p>Category</p><img src="../ASSETS/Category_Button_Arrow_Vector.svg" alt="" />
                    </button> */}


                    <Dropdown as={ButtonGroup}>
                        <Dropdown.Toggle id="dropdown-custom-1" className="post-doubt-category-button" style={{
                            "backgroundColor": "#FF1684",
                            "color": "white",
                            "fontFamily": "Poppins",
                            "fontStyle": "normal",
                            "fontWeight": "400",
                            "fontSize": "20px",
                            "line-height": "30px",
                            "border": "none",
                            "borderRadius": "10px"
                        }}>Category</Dropdown.Toggle>
                        <Dropdown.Menu >
                            <Dropdown.Item eventKey="1" onClick={() => { setCategory("Programming"); getUserById(); }}>Programming</Dropdown.Item>
                            <Dropdown.Item eventKey="2" onClick={() => { setCategory("Placement"); getUserById(); }}>Placement</Dropdown.Item>
                            <Dropdown.Item eventKey="3" onClick={() => { setCategory("Web Dev"); getUserById(); }}>Web Dev</Dropdown.Item>
                            <Dropdown.Item eventKey="4" onClick={() => { setCategory("ML/AI"); getUserById(); }}>ML/AI</Dropdown.Item>
                            <Dropdown.Item eventKey="5" onClick={() => { setCategory("AR/VR"); getUserById(); }}>AR/VR</Dropdown.Item>
                            <Dropdown.Item eventKey="6" onClick={() => { setCategory("College"); getUserById(); }}>College</Dropdown.Item>
                            <Dropdown.Item eventKey="7" onClick={() => { setCategory("Others"); getUserById(); }}>Others</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>


                    {/* <button className="post-doubt-post-button" onClick={handlePopUpClick}> */}
                    <button className="post-doubt-post-button" onClick={handlePopUpClickAndSubmitQuestion}>
                        {/* <button className="post-doubt-post-button" onClick={() => {
                        setBranch("eceai");
                        
                    }}> */}
                        <p>Post</p>
                    </button>
                </div>

            </div>
        </div>
    );
}

export default CreateQuestion;