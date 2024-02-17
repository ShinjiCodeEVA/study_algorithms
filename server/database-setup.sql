
--create blog table 
CREATE TABLE blogpost (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255),
    tags VARCHAR(255),
    readTime INT,
    description TEXT,
    solutionExplanation TEXT,
    bruteForceId INT,
    efficientId INT,
    FOREIGN KEY (bruteForceId) REFERENCES bruteforce (id),
    FOREIGN KEY (efficientId) REFERENCES efficient (id)
);

--create bruteforce
CREATE TABLE bruteforce (
    id INT PRIMARY KEY AUTO_INCREMENT,
    heading VARCHAR(255),
    steps TEXT,
    summary TEXT
);

--create efficient
CREATE TABLE efficient (
    id INT PRIMARY KEY AUTO_INCREMENT,
    heading VARCHAR(255),
    steps TEXT,
    summary TEXT
);

--create testcase
CREATE TABLE testcase (
    id INT PRIMARY KEY AUTO_INCREMENT, 
    blogPostId INT,
    input TEXT,
    output INT,
    explanation TEXT,
    FOREIGN KEY (blogPostId) REFERENCES blogpost (id)
);


--create images
CREATE TABLE images (
    id INT PRIMARY KEY AUTO_INCREMENT,
    blogPostId INT,
    link VARCHAR(255),
    FOREIGN KEY (blogPostId) REFERENCES blogPost (id)
);