# Part 3. Debugging using the DevTools

## DevTools - Debugging:
### Breakpoints: 
![LabWeek4Breakpoints](https://user-images.githubusercontent.com/60761222/106372739-ab13ad80-6327-11eb-99d6-fc401c2e5b47.png)

### Watch Expression: 
![LabWeek4WatchExpressions](https://user-images.githubusercontent.com/60761222/106372748-bb2b8d00-6327-11eb-9e38-98509c527cf3.png)

1. What was the bug?
- The inputs are of type string and so the + is overloaded with concatenation. 
  
2. How would you fix it? Include a screenshot of your fix.
- Use parseInt() to convert strings to integers, then add semi-colons. 
### Bug Fix: 
![LabWeek4BugFix](https://user-images.githubusercontent.com/60761222/106372908-5ffa9a00-6329-11eb-8bfb-6a1499844795.png)


## DevTools - Network Tab
1. What is the name of the new json file?
   - citylots.json
2. Which file initiated the download of the new file?
   - https://cse110lab4.herokuapp.com/part2.js:2
3. What is its file size?
   - 11.7 MB
4. How long did it take to download?
   - 71 ms

5. What was your User-Agent for the browser that made the request?
   - User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.104 Safari/537.36
6. In the response, what type of server did it come from?
   - Server: Apache
7. When was the file last modified?
   - Last-Modified: Tue, 26 Jan 2021 22:14:13 GMT
8. What was the Content-Type of the file?
   - Content-Type: application/json

9. Which method inside the initiating file made the request?
   - fetchData()