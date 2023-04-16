import express from "express";

const app = express();

const array = [
  {
    id: 1,
    name: "Ahmed",
    subject: "SW-2",
  },
  {
    id: 2,
    name: "Mohamed",
    subject: "Math-3",
  },
  {
    id: 3,
    name: "Mahmoud",
    subject: "KBS",
  },
  {
    id: 4,
    name: "Hassen",
    subject: "Android",
  },
  {
    id: 5,
    name: "Mostafa",
    subject: "ML",
  },
];

const studentFunction = function (req, res) {
  let m =
    "<h1 style='text-align:center; padding:10px;'> بسم الله الرحمن الرحيم</h1>";
  let sum;

  let output = "<ul>";

  for (let i = 0; i < array.length; i++) {
    const student = array[i];
    output +=
      "<li><h3> <a href='/student/" +
      student.id +
      "' style='text-decoration:none'>" +
      student.name +
      "</a></h3></li>";
  }
  output += "</ul>";

  sum = m + output;
  res.send(sum);
};

app.get("/student", studentFunction);

app.get("/student/:id", (req, res) => {
  const id = req.params.id;

  const student = array.find((item) => {
    return item.id == id;
  });

  res.send(
    '<div style="padding:15px; color:#ff5511">' +
      "<h2>" +
      student.id +
      "</h2>" +
      "<h3>" +
      student.name +
      "<br>" +
      student.subject +
      "</h3>" +
      "</div>"
  );
});

app.listen(3000);
