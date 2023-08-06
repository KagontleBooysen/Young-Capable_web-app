var quiz = {
    "Cpp": [
        {
            "id": 1,
            "question": "What is C++?",
            "options": [
                {
                 "a":  "A programming language",
                 "b":  "A markup language",
                 "c":  "A database management system",
                 "d":  "A web development framework"
                }
            ],
            "answer": "A programming language",
            "score": 0,
            "status": ""
        },
        {
            "id": 2,
            "question": "Which of the following is a correct way to initialize a variable in C++?",
            "options": [
                {
                "a": "int x = 10;",
                "b":"x = 10;",
                "c": "var x = 10;",
                "d": "x := 10;"
                }
            ],
            "answer": "int x = 10;",
            "score": 0,
            "status": ""
        },
        {
            "id": 3,
            "question": "What is the output of the following code?\n\n#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 5;\n    cout << x++ << endl;\n    cout << x;\n    return 0;\n}",
            "options": [
                {
                "a":"5 6",
                "b":"6 5",
                "c":"5 5",
                "d":"6 6"
                }
            ],
            "answer": "5 6",
            "score": 0,
            "status": ""
        },
        {
            "id": 4,
            "question": "What is the correct way to define a class in C++?",
            "options": [
                {
                "a":"class MyClass() {}",
                "b":"class {MyClass}",
                "c":"MyClass = class {}",
                "d":"class MyClass {}"
                }
            ],
            "answer": "class MyClass {}",
            "score": 0,
            "status": ""
        },
        {
            "id": 5,
            "question": "Which of the following is used to allocate memory for a variable in C++?",
            "options": [
                {
                "a":"malloc()",
                "b":"new",
                "c":"allocate()",
                "d":"create()"
                }
            ],
            "answer": "new",
            "score": 0,
            "status": ""
        },
        {
            "id": 6,
            "question": "What is the correct syntax for a constructor in C++?",
            "options": [
                {
                "a":"constructor() {}",
                "b":"class() {}",
                "c":"void constructor() {}",
                "d":"MyClass() {}"
                }
            ],
            "answer": "MyClass() {}",
            "score": 0,
            "status": ""
        },
        {
            "id": 7,
            "question": "What is the purpose of the 'const' keyword in C++?",
            "options": [
                {
                "a":"To define a constant variable",
                "b":"To create a constant function",
                "c":"To declare a constant class",
                "d":"To define a constant loop"
                }
            ],
            "answer": "To define a constant variable",
            "score": 0,
            "status": ""
        },
        {
            "id": 8,
            "question": "What is the output of the following code?\n\n#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[5] = {1, 2, 3, 4, 5};\n    cout << arr[2];\n    return 0;\n}",
            "options": [
                {
                "a":"1",
                "b":"2",
                "c":"3",
                "d":"4"
                } 
            ],
            "answer": "3",
            "score": 0,
            "status": ""
        },
        {
            "id": 9,
            "question": "What is the correct way to define a function outside the class in C++?",
            "options": [
                {
                "a":"function myFunction() {}",
                "b":"def myFunction() {}",
                "c":"void myFunction() {}",
                "d":"return myFunction() {}"
                }
            ],
            "answer": "void myFunction() {}",
            "score": 0,
            "status": ""
        },
        {
            "id": 10,
            "question": "What is the purpose of the 'virtual' keyword in C++?",
            "options": [
                {
                "a":"To define a virtual function",
                "b":"To create a virtual class",
                "c":"To enable multiple inheritance",
                "d":"To make a function constant"
                }
            ],
            "answer": "To define a virtual function",
            "score": 0,
            "status": ""
        },
        {
            "id": 11,
            "question": "What is the correct way to read input from the user in C++?",
            "options": [
                {
                "a":"cin()",
                "b":"input()",
                "c":"get()",
                "d":"scanf()"
                }
            ],
            "answer": "cin()",
            "score": 0,
            "status": ""
        },
        {
            "id": 12,
            "question": "What is the output of the following code?\n\n#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 5;\n    int y = 2;\n    cout << x % y;\n    return 0;\n}",
            "options": [
                {
                "a":"2",
                "b":"3",
                "c":"1",
                "d":"0"
                }
            ],
            "answer": "1",
            "score": 0,
            "status": ""
        },
        {
            "id": 13,
            "question": "Which of the following is used to terminate the 'switch' statement in C++?",
            "options": [
                {
                "a":"stop",
                "b":"break",
                "c":"exit",
                "d":"end"
                }
            ],
            "answer": "break",
            "score": 0,
            "status": ""
        },
        {
            "id": 14,
            "question": "What is the correct way to include the header file 'iostream' in C++?",
            "options": [
                {
                "a":"#include <iostream>",
                "b":"<iostream.h>",
                "c":"#import <iostream>",
                "d":"include iostream"
                }
            ],
            "answer": "#include <iostream>",
            "score": 0,
            "status": ""
        },
        {
            "id": 15,
            "question": "Which of the following is a correct way to declare a pointer in C++?",
            "options": [
                {
                "a":"int ptr = &x;",
                "b":"int *ptr;",
                "c":"int &ptr = x;",
                "d":"int ptr = x;"
                }
            ],
            "answer": "int *ptr;",
            "score": 0,
            "status": ""
        },
        {
            "id": 16,
            "question": "Which of the following is used to dynamically allocate memory for arrays in C++?",
            "options": [
                {
                 "a": "malloc()",
                "b": "new[]",
                "c": "create()",
                "d": "allocate()"
                }
            ],
            "answer": "b",
            "score": 0,
            "status": ""
        },
        {
            "id": 17,
            "question": "What is the correct way to open a file in C++ for writing?",
            "options": [
                {
                 "a": "fstream file('filename.txt', ios::write);",
                "b": "file.open('filename.txt', ios::write);",
                "c": "ofstream file('filename.txt');",
                "d": "file.open('filename.txt');"
            }
            ],
            "answer": "c",
            "score": 0,
            "status": ""
        },
        {
            "id": 18,
            "question": "What is the output of the following code?\n\n#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    cout << sizeof(arr) / sizeof(arr[0]);\n    return 0;\n}",
            "options": [
                {
                "a": "1",
                "b": "5",
                "c": "sizeof(arr) / sizeof(int)",
                "d": "sizeof(arr) / sizeof(arr[0])"
            }
            ],
            "answer": "b",
            "score": 0,
            "status": ""
        },
        {
            "id": 19,
            "question": "What is the correct way to access a class member function using a pointer to an object in C++?",
            "options": [
                {
                "a": "obj->memberFunction();",
                "b": "obj.memberFunction();",
                "c": "*obj.memberFunction();",
                "d": "&obj->memberFunction();"
                }
            ],
            "answer": "a",
            "score": 0,
            "status": ""
        },
        {
            "id": 20,
            "question": "What is the purpose of the 'friend' keyword in C++?",
            "options": [
                {
                 "a": "To declare a function as a friend",
                "b": "To declare a class as a friend",
                "c": "To declare a member function as a friend",
                "d": "To enable inheritance"
            }
            ],
            "answer": "b",
            "score": 0,
            "status": ""
        },
        {
            "id": 21,
            "question": "What is the output of the following code?\n\n#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 10;\n    if (x > 5) {\n        int y = 5;\n        cout << x + y;\n    }\n    cout << y;\n    return 0;\n}",
            "options": [
                {
                 "a": "15, 5",
                "b": "5, 15",
                "c": "15, Error",
                "d": "Error, 15"
            }
            ],
            "answer": "c",
            "score": 0,
            "status": ""
        },
        {
            "id": 22,
            "question": "Which of the following is NOT a standard C++ data type?",
            "options": [
                {
                 "a": "int",
                "b": "char",
                "c": "string",
                "d": "float"
            }
            ],
            "answer": "c",
            "score": 0,
            "status": ""
        },
        {
            "id": 23,
            "question": "What is the correct way to create a constant pointer in C++?",
            "options": [
                {
                 "a": "int* const ptr;",
                "b": "const int* ptr;",
                "c": "const ptr* int;",
                "d": "int const* ptr;"
            }
            ],
            "answer": "a",
            "score": 0,
            "status": ""
        },
        {
            "id": 24,
            "question": "What is the output of the following code?\n\n#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 5;\n    int& ref = x;\n    ref = 10;\n    cout << x;\n    return 0;\n}",
            "options": [
                {
                 "a": "5",
                "b": "10",
                "c": "0",
                "d": "Error"
            }
            ],
            "answer": "b",
            "score": 0,
            "status": ""
        },
        {
            "id": 25,
            "question": "What is the correct way to handle exceptions in C++?",
            "options": [
                {
                 "a": "try-catch",
                "b": "if-else",
                "c": "switch-case",
                "d": "do-while"
            }
            ],
            "answer": "a",
            "score": 0,
            "status": ""
        }
    ]
};
        var quizApp = function () {
            this.score = 0;
            this.qno = 1;
            this.currentque = 0;
            var totalque = quiz.Cpp.length;
        
            this.displayQuiz = function (cque) {
                this.currentque = cque;
                if (this.currentque < totalque) {
                    $("#tque").html(totalque);
                    $("#previous").attr("disabled", false);
                    $("#next").attr("disabled", false);
                    $("#qid").html(quiz.Cpp[this.currentque].id + '.');
                    $("#question").html(quiz.Cpp[this.currentque].question);
                    $("#question-options").html("");
                    for (var key in quiz.Cpp[this.currentque].options[0]) {
                        if (quiz.Cpp[this.currentque].options[0].hasOwnProperty(key)) {
                            $("#question-options").append(
                                "<div class='form-check option-block'>" +
                                "<label class='form-check-label'>" +
                                "<input type='radio' class='form-check-input' name='option' id='q" + key + "' value='" + quiz.Cpp[this.currentque].options[0][key] + "'><span id='optionval'>" +
                                quiz.Cpp[this.currentque].options[0][key] +
                                "</span></label>"
                            );
                        }
                    }
                }
                if (this.currentque <= 0) {
                    $("#previous").attr("disabled", true);
                }
                if (this.currentque >= totalque) {
                    $('#next').attr('disabled', true);
                    for (var i = 0; i < totalque; i++) {
                        this.score = this.score + quiz.Cpp[i].score;
                    }
                    return this.showResult(this.score);
                }
            }
        
            this.showResult = function (scr) {
                $("#result").addClass('result');
                $("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + scr + '/' + totalque + "</h1>");
                for (var j = 0; j < totalque; j++) {
                    var res;
                    if (quiz.Cpp[j].score == 0) {
                        res = '<span class="wrong">' + quiz.Cpp[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
                    } else {
                        res = '<span class="correct">' + quiz.Cpp[j].score + '</span><i class="fa fa-check c-correct"></i>';
                    }
                    $("#result").append(
                        '<div class="result-question"><span>Q ' + quiz.Cpp[j].id + '</span> &nbsp;' + quiz.Cpp[j].question + '</div>' +
                        '<div><b>Correct answer:</b> &nbsp;' + quiz.Cpp[j].answer + '</div>' +
                        '<div class="last-row"><b>Score:</b> &nbsp;' + res +
                        '</div>'
                    );
                }
            }
        
            this.checkAnswer = function (option) {
                var answer = quiz.Cpp[this.currentque].answer;
                option = option.replace(/</g, "&lt;");
                option = option.replace(/>/g, "&gt;");
                option = option.replace(/"/g, "&quot;");
                if (option == quiz.Cpp[this.currentque].answer) {
                    if (quiz.Cpp[this.currentque].score == "") {
                        quiz.Cpp[this.currentque].score = 1;
                        quiz.Cpp[this.currentque].status = "correct";
                    }
                } else {
                    quiz.Cpp[this.currentque].status = "wrong";
                }
            }
        
            this.changeQuestion = function (cque) {
                this.currentque = this.currentque + cque;
                this.displayQuiz(this.currentque);
            }
        }
        
        var jsq = new quizApp();
        var selectedopt;
        
        $(document).ready(function () {
            jsq.displayQuiz(0);
            $('#question-options').on('change', 'input[type=radio][name=option]', function (e) {
                $(this).prop("checked", true);
                selectedopt = $(this).val();
            });
        });
        
        $('#next').click(function (e) {
            e.preventDefault();
            if (selectedopt) {
                jsq.checkAnswer(selectedopt);
            }
            jsq.changeQuestion(1);
        });
        
        $('#previous').click(function (e) {
            e.preventDefault();
            if (selectedopt) {
                jsq.checkAnswer(selectedopt);
            }
            jsq.changeQuestion(-1);
        });
        
               
