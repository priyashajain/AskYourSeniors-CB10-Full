const express = require("express");
require("./db/config");
// const m = require("./db/config");
// const userSchema = require("./db/User");
const User = require("./db/User");
const Question = require("./db/Question");
const Answer = require("./db/Answer");
const cors = require("cors");
const bcrypt = require("bcrypt");
// const mongoose = require("mongoose");       //??????????????

const app = express();
app.use(express.json());              //middleware
app.use(express.urlencoded({ extended: true }))
app.use(cors());

const saltRounds = 10;

app.get("/", (req, res) => {
    res.send("app is working");
});

// const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/cb10");

// const db = mongoose.connection;

// db.on("open", () => {
//     console.log("Connected to database");
// });

// db.on("error", (err) => {
//     console.log(err);
// });

// app.post("/user", async (req, res) => {
//     const { id } = req.body;
//     // const { id } = req.params;
//     console.log(id);
//     try {
//         const user = await userSchema.findById(id);
//         console.log(user);
//         res.status(200).json(user);
//     }
//     catch (error) {
//         console.log(error);
//         res.status(500).json({
//             "message": "Internal Server Error",
//             error
//         })
//     }
// });

app.get("/user/:id", async (req, res) => {
    // let result = await User.findOne({ email: req.params.id });
    let result = await User.findOne({ _id: req.params.id });
    if (result) {
        res.send(result);
    }
    else {
        res.send({ "result": "No user found" });
    }

});

app.get("/question/:id", async (req, res) => {
    let result = await Question.findOne({ _id: req.params.id });
    if (result) {
        res.send(result);
    }
    else {
        res.send({ "result": "No question found" });
    }

});

app.get("/answers/:questionid", async (req, res) => {
    let answers = await Answer.find({ 'question._id': req.params.questionid });
    // if (answers.length>0) {
    //     res.send(answers);
    // }
    // else {
    //     res.send({ "result": "No answers found" });
    // }



    res.send(answers);

});


app.get("/questions-from-user-id/:userid", async (req, res) => {                              //for my questions
    let questions = await Question.find({ 'user._id': req.params.userid });
    // if (questions.length>0) {
    //     res.send(questions);
    // }
    // else {
    //     res.send({ "result": "No answers found" });
    // }



    res.send(questions);

});


app.get("/answers-from-user-id/:userid", async (req, res) => {                                //???????????????
    let answers = await Answer.find({ 'user._id': req.params.userid });
    // if (answers.length>0) {
    //     res.send(answers);
    // }
    // else {
    //     res.send({ "result": "No answers found" });
    // }


    res.send(answers);

});


app.get("/question-from-answer-id/:answerid", async (req, res) => {                                  //i think this one's not needed???????????????
    let question = await Question.findOne({ 'user._id': req.params.answerid });
    if (question) {
        res.send(question);
    }
    else {
        res.send({ "result": "No answers found" });
    }

});



app.get("/users", async (req, res) => {
    let users = await User.find();
    if (users.length > 0) {
        res.send(users);
    }
    else {
        res.send({ result: "No users found" });
    }

});

app.get("/questions", async (req, res) => {
    let questions = await Question.find();
    // if (questions.length>0) {
    //     res.send(questions);
    // }
    // else {
    //     res.send({ result: "No users found" });
    // }


    res.send(questions);


});

app.get("/all-answers", async (req, res) => {
    let answers = await Answer.find();
    res.send(answers);

});


app.delete("/delete-answer/:id", async (req, res) => {
    let result = await Answer.deleteOne({ _id: req.params.id });
    res.send(result);
});


app.delete("/delete-question/:id", async (req, res) => {
    let result = await Question.deleteOne({ _id: req.params.id });
    res.send(result);
});


app.put("/update-answer/:id", async (req, res) => {
    let result = await Answer.updateOne(
        { _id: req.params.id },
        {
            // $set : {content: req.body}
            $set: req.body
        }
    );

    res.send(result);
})


app.put("/update-question-approved/:id", async (req, res) => {
    let result = await Question.updateOne(
        { _id: req.params.id },
        {
            // $set : {content: req.body}
            $set: req.body
        }
    );

    res.send(result);
})


app.put("/update-answer-approved/:id", async (req, res) => {
    let result = await Answer.updateOne(
        { _id: req.params.id },
        {
            // $set : {content: req.body}
            $set: req.body
        }
    );

    res.send(result);
})

app.put("/update-answer-solved/:id", async (req, res) => {
    let result = await Answer.updateOne(
        { _id: req.params.id },
        {
            // $set : {content: req.body}
            $set: req.body
        }
    );

    res.send(result);
})


app.post("/createquestion", async (req, res) => {
    let question = new Question(req.body);
    let result = await question.save();
    result = result.toObject();
    // delete result.password;      
    res.send(result);
})


app.post("/createanswer", async (req, res) => {
    let answer = new Answer(req.body);
    let result = await answer.save();
    result = result.toObject();
    // delete result.password;      
    res.send(result);
})


app.post("/login", async (req, res) => {         //async and await vvvv imp, without them function not working (checked on postman)
    //res.send(req.body);                   //had been posting in postman
    // let user = await User.findOne(req.body);
    if (req.body.email && req.body.password) {       //user has to write in both the fields compulsorily to login
        // let user = await User.findOne(req.body).select("-password");  //matches with the complete object req.body, returns the found user without password

        // let user = await User.findOne(req.body).select("_id email");
        // if (user) {
        //     res.send(user);
        // }
        // else {                                             //if user not found
        //     res.send({ result: "No user found" });
        // }

        let user = await User.findOne({email: req.body.email});
        if (user) {
            bcrypt.compare(req.body.password, user.password, function (err, resultBycrypt) {
                if (resultBycrypt === true) {
                    // let userSend = User.findOne({email: req.body.email}).select("_id email");
                    res.send(user);
                }
                else {
                    res.send({ result: "No user found" });
                }

            });
            // user = user.select("_id email");
            // res.send(user);
        }
        else {                                             //if user not found   //was already here
            res.send({ result: "No user found" });
        }



    }
    else {
        res.send({ result: "No user found" });
    }
});


app.put("/user/:id", async (req, res) => {
    let result = await User.updateOne(
        { _id: req.params.id },
        {
            $set: req.body
        }
    );

    if (result) {
        res.send(result);
    }
    else {
        res.send({ "result": "No user found" });
    }
})



app.put("/update-user-approved/:id", async (req, res) => {
    let result = await User.updateOne(
        { _id: req.params.id },
        {
            $set: req.body
        }
    );

    if (result) {
        res.send(result);
    }
    else {
        res.send({ "result": "No user found" });
    }
})




// app.post("/admin-login", async (req, res) => {         
//     if (req.body.email && req.body.password) {       
//         let user = await User.findOne({email: req.body.email});
//         if (user) {
//             bcrypt.compare(req.body.password, user.password, function (err, resultBycrypt) {
//                 if (resultBycrypt === true) {
//                     if(user.isAdmin === true){
//                         res.send(user);
//                     }
//                     else{
//                         res.send({ result: "No user found" });
//                     }
//                 }
//                 else {
//                     res.send({ result: "No user found" });
//                 }
//             });
//         }
//         else {                                           
//             res.send({ result: "No user found" });
//         }
//     }
//     else {
//         res.send({ result: "No user found" });
//     }
// });




app.put("/user-increment-noOfDoubtsAsked/:id", async (req, res) => {
    let result = await User.updateOne(
        { _id: req.params.id },
        { 
            $inc: { noOfDoubtsAsked: 1 } 
        }
    );

    if (result) {
        res.send(result);
    }
    else {
        res.send({ "result": "No user found" });
    }
})



app.put("/user-increment-noOfDoubtsAnswered/:id", async (req, res) => {
    let result = await User.updateOne(
        { _id: req.params.id },
        { 
            $inc: { noOfDoubtsAnswered: 1 } 
        }
    );

    if (result) {
        res.send(result);
    }
    else {
        res.send({ "result": "No user found" });
    }
})



app.post("/register", async (req, res) => {             //use async as save method returns promise  
    // res.send("api in progress...");
    // res.send(req.body);                //had been posting in postman, set method to post and url is http://localhost:5000/register


    // let user = new User(req.body);
    // let result = await user.save();         //saving the user and returning the record too i think, use await too but idk the reason
    // result = result.toObject();  //convert result to object, but why?????
    // delete result.password;      // delete password from the result object,  what kind of command is delete????
    // res.send(result);          //will show us what we hv posted, this res.send() sends this result(ie object) back to the collectData function, means control is also redirected back to the collectData functionm meaning control is redirected back to React


    bcrypt.hash(req.body.password, saltRounds, async function (err, hash) {
        // Store hash in your password DB.
        let user = new User({
            email: req.body.email,
            password: hash,
            isAdmin: false                   //added for admin routing
        });
        let result = await user.save();
        result = result.toObject();
        delete result.password;
        res.send(result);
    });

});


app.listen(5000, () => {
    console.log('App is running at port: 5000')
});

