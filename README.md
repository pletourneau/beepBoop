# _{beepBoop}_

#### By _**{Paul LeTourneau}**_

#### _{Analyzes numbers and replaces certain digits with funny letters}_

## Technologies Used

* _Javascript_
* _HTML_
* _CSS_
* _Bootstrap_
* _Test Driven Development_
* _Git_

## Description

```
This program will replace specific digits in a number. For numbers that contain a 1, all digits are replaced with "Beep!"
For numbers that contain a 2, all digits are replaced with "Boop!"
For numbers that contain a 3, all digits are replaced with "Won't you be my neighbor?"

```


## Tests

```

Describe: beepBoop()

Test 1: "function should take a number and create array from zero to that number"
Code: beepBoop(5);
Expected Output: [1,2,3,4,5]

Test 5: "if a number being pushed to the array contains a 3, then push 'Won't you be my neighbor?'"
Code: beepBoop(13);
Expected Output: arrToStr = ["0", "1", "2", "Won't you be my neighbor?"..."12", "Won't you be my neighbor?"]

Test 6: "if a number being pushed to the array contains a 2, then push 'Boop'"
Code: beepBoop(13);
Expected Output: arrToStr = ["0", "1", "Boop", "Won't you be my neighbor?"..."Boop", "Won't you be my neighbor?"]

Test 7: "if a number being pushed to the array contains a 1, then push 'Beep'"
Code: beepBoop(13);
Expected Output: arrToStr = ["0", "Beep", "Boop", "Won't you be my neighbor?"..."Beep", "Beep", "Boop", "Won't you be my neighbor?"]

Test 8: "if a number is not an integer (has decimals) it will truncate and still return"
Code: beepBoop(13.1);
Expected Output: arrToStr = ["0", "Beep", "Boop", "Won't you be my neighbor?"..."Beep", "Beep", "Boop", "Won't you be my neighbor?"]

Test 9: "if a number is negative it will return from 0 down to the number"
Code: beepBoop(-13.1);
Expected Output: arrToStr = ["0", "Beep", "Boop", "-4", "-5"... "Won't you be my neighbor?"..."Beep", "Beep", "Boop", "Won't you be my neighbor?"]

Test 11:"if input is a word or a zero, push error msg to array"
Code: "test"
Expected Output: "Error Human, that is a word. Please enter a non zero number."

```


## Setup/Installation Requirements

* _Clone Repository from Github_
* _place folder on desktop_
* _open folder_
* _open index.html with a web browser_


## Known Bugs

* _no known issues_


## License

_{Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.}_

Copyright (c) _08/18/23_ _Paul LeTourneau_