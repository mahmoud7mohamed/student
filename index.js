import express from "express";
const app = express();
const Students = ["Ahmed", "Mahmoud", "Mohamed", "Hassan"];
const StudentList = (req, res) => {
    let m = "<h1 style='text-align:center; padding:10px;'> بسم الله الرحمن الرحيم</h1>";
    let sum;
    let output = "<ul style='padding:15px;margin-left:28px; color:#ff5511'>";
    for (let i = 0; i < Students.length; i++) {
        output += "<li><h2>" + Students[i] + "</h2></li>";
    }
    output += "</ul>";
    sum = m + output;
    res.send(sum);
};
app.get("/students", StudentList);
app.listen(5000);

