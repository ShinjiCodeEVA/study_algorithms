CREATE TABLE problem (
    problem_id INT PRIMARY KEY AUTO_INCREMENT,
    tags JSON,
    platform VARCHAR(50) NOT NULL,
    readTime INT DEFAULT 5,
    description MEDIUMTEXT NOT NULL,
    statement MEDIUMTEXT NOT NULL,
    image TEXT NOT NULL 
);

CREATE TABLE solution (
    solution_id INT PRIMARY KEY AUTO_INCREMENT,
    category VARCHAR(20) NOT NULL,
    heading VARCHAR(255) NOT NULL,
    steps JSON NOT NULL,
    image text NULL,
    problem_id INT NOT NULL,
    FOREIGN KEY (problem_id) REFERENCES problem(problem_id)
);


CREATE TABLE code (
    code_id INT PRIMARY KEY AUTO_INCREMENT,
    replit MEDIUMTEXT NOT NULL,
    solution_id INT NOT NULL UNIQUE,
    FOREIGN KEY (solution_id) REFERENCES solution(solution_id)
);

CREATE TABLE test_case (
    testCase_id INT PRIMARY KEY AUTO_INCREMENT,
    input MEDIUMTEXT NOT NULL,
    output MEDIUMTEXT NOT NULL,
    explanation MEDIUMTEXT NOT NULL,
    problem_id INT,
    FOREIGN KEY (problem_id) REFERENCES problem(problem_id)
);
 


---------- INSERTING TO TABLES ---------- 

INSERT INTO problem (tags, platform, readTime, description, statement, image)
VALUES ('{"tags": ["Arrays"]}', 'LeetCode', 10, 'In this blog post, we’ll explore the “Maximum Product Subarray” problem, where our task is to find the contiguous subarray within an array that yields the maximum product. We’ll discuss the problem statement in detail and explore two approaches: the brute force solution and an optimized solution using dynamic programming techniques.',
        'In the given problem statement, we have an array of integers and we need to find the maximum product possible for a contiguous subarray. The most important part of this problem is that the elements have to be contiguous. So special attention needs to be given for negative numbers and zeroes.',
        'https://i0.wp.com/studyalgorithms.com/wp-content/uploads/2023/06/Screen-Shot-2023-06-30-at-6.26.38-PM.png?resize=585%2C494&ssl=1');
        
INSERT INTO solution (category, heading, steps, image, problem_id)
VALUES ('bruteforce', 'The brute force approach to finding the maximum product subarray involves checking all possible subarrays and calculating their products to find the maximum product.',
        '{"steps": [ "Initialize a variable max_product to store the maximum product, initially set to the minimum possible value.",
                    "Iterate through all possible starting indices of the subarray.",
                    "For each starting index, iterate through all possible ending indices greater than or equal to the starting index.",
                    "Extract the subarray .from the starting index to the ending index.",
                    "Calculate the product of all elements in the subarray.",
                    "Update max_product if the calculated product is greater than the current maximum.",
                    "Repeat steps 3-6 until all possible subarrays are considered.",
                    "Return max_product as the maximum product of a subarray within the given array."]}',
                    null, 1);
                    
INSERT INTO solution  (category, heading, steps, image, problem_id)
VALUES ('efficient', 'To solve this problem, you can utilize the dynamic programming approach. Here’s a general outline of the solution:',
        '{"steps": ["Initialize two variables, max_product and min_product, both set to the first element of the array",
                    "Initialize a variable max_global to store the overall maximum product.",
                    "Iterate through the array starting from the second element.",
                    "For each element, update max_product and min_product by considering three possibilities: a. Multiply the current element by max_product (to include the current element in the positive product chain). b. Multiply the current element by min_product (to include the current element in the negative product chain, in case the current element is negative). c. Start a new subarray from the current element (if the previous subarray’s product is not significant).",
                    "Update max_global by comparing it with max_product.",
                    "Repeat steps 4-5 codeuntil all elements are processed.",
                    "Return max_global as the maximum product of a subarray within the given array."]}',
                    'https://i0.wp.com/studyalgorithms.com/wp-content/uploads/2023/06/Screen-Shot-2023-06-30-at-6.47.24-PM.png?resize=768%2C257&ssl=1', 1); 
                    
INSERT INTO code (replit, solution_id)
VALUES ('https://replit.com/@HarviePurgatori/RadiantCelebratedAccess?embed=true', 1);

INSERT INTO test_case (input, output, explanation, problem_id)
VALUES ('nums = [ 2 , 3 , -2 , 4 ]', '6', '[ 2 , 3 ] has the largest product 6.', 1),
       ('nums = [ 2 , 3 , -2 , -5 , 6 , -1 , 4 ]', '360', '[ 2 , 3 , -2 , -5 , 6 ] has the largest product 360.', 1);
       
       

                    
        
        