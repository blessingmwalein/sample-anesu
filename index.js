const express = require("express");

const app = express();

app.use(express.json());

const PORT = 3007;

app.get("/", (req, res) => {
    res.json({ message: "Calculator API Running" });
})
app.get("/users", (req, res) => {
    res.json({ users: ["Alice", "Bob", "Charlie"] });
})


//add addition endpoint
app.post("/calculate", (req, res) => {
    //get a nd b from request body
    let a = Number(req.body.a);
    let b = Number(req.body.b);
    let operation = req.body.operation;

    let result;

    //use switch case to determine operation
    switch (operation) {
        case "add":
            result = a + b;
            break;
        case "subtract":
            result = a - b;
            break;
        case "multiply":
            result = a * b;
            break;
        case "divide":
            if (b === 0) {
                return res.status(400).json({ error: "Cannot divide by zero" });
            }
            result = a / b;
            break;
        default:
            return res.status(400).json({ error: "Invalid operation" });
    }


    res.json({
        number1: a,
        number2: b,
        operation: operation,
        result: result
    });
})
//add api route to subtract



// app.get("/add", (req, res) => {

//     let a = Number(req.query.a);

//     let b = Number(req.query.b);

//     let result = a + b;


//     res.json({

//         number1: a,
//         number2: b,
//         operation: "Addition",
//         result

//     });


// });


// app.get("/", (req, res) => {

//     res.send("Calculator API Running");

// });


app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});