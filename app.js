// Question Class: Represents a Question 
class Question {
    constructor(text){
        // take whatever is passed in as parameters and assign to the property of that object
        this.title = title;
        this.answer = answer;
    }
}
// UI class: Handle UI Ta sks 
// such as: display question, add question to list, remove question from list
    class UI {
        static displayQuestions() {
             const StoredQuestions = [
                {
                    title: "What does the constructor function do?",
                    answer:""
                },
                {
                    title: "How do you define a class in laymans terms?",
                    answer: "A class defines the shape of a type of object - what methods and properties it has."
                },

            ]

            // this will be responsible for adding the books to list
            const questions = StoredQuestions;

            questions.forEach((question) => UI.addQuestionToList(question))

        }
        static addQuestionToList(question){
            const list = document.querySelector('#question-list');

            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${question.title}</td>
                <td>${question.answer}</td>
                <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
            `;

            list.appendChild(row);
        }
    }
// Store Class: Handles Storage

// Events: Display Books 
document.addEventListener('DOMContentLoaded', UI.displayQuestions);
// Events: Add a book

// Remove a book