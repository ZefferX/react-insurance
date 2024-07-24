import React, { useState, useEffect } from "react";

function ExamsList() {
  const [exam, setExam] = useState([]);

  async function deleteExam(id) {
    const url = `http://192.168.0.89:8070/api/v1/exams/${id}`;

    const confirmation = window.confirm('Are you sure you want to delete this item?')
    if (confirmation){
    try {
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Http error! status: ${response.status}`);
      }

      alert("Exam deleted succesfully");
    } catch (error) {
      console.error("Fetch error", error);
    }
  }}

  async function fetchData() {
    try {
      const response = await fetch("http://192.168.0.89:8070/api/v1/exams");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const body = await response.json();
      setExam(body);
    } catch (error) {
      console.error("Error getting the exams", error);
      alert("An error ocurred while getting the exams. Please try again");
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {exam.length == 0 ? (
          <li>cargando</li>
        ) : (
          exam.map((examInformation) => (
            <li key={examInformation.id}>
              {examInformation.examName}, Precio {examInformation.price}
              <button onClick={() => deleteExam(examInformation.id)}>
                Delete exam
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default ExamsList;
