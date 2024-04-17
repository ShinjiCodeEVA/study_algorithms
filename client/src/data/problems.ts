export const problems = {
    arrays: [
        {
            problem: { 
                tags: ["Arrays"],
                platform: "LeetCode",
                title: "Maximum Product Subarray Solution",
                readTime: 10,
                description: "In this blog post, we’ll explore the “Maximum Product Subarray” problem, where our task is to find the contiguous subarray within an array that yields the maximum product. We’ll discuss the problem statement in detail and explore two approaches: the brute force solution and an optimized solution using dynamic programming techniques.",
                statement: "In the given problem statement, we have an array of integers and we need to find the maximum product possible for a contiguous subarray. The most important part of this problem is that the elements have to be contiguous. So special attention needs to be given for negative numbers and zeroes.",
                image: "https://i0.wp.com/studyalgorithms.com/wp-content/uploads/2023/06/Screen-Shot-2023-06-30-at-6.26.38-PM.png?resize=585%2C494&ssl=1",
        
                testcases: [
                    {input: " nums = [ 2 , 3 , -2 , 4 ]", output: "6", explanation: "[ 2 , 3 ] has the largest product 6."},
                    {input: " nums = [ 2 , 3 , -2 , -5 , 6 , -1 , 4 ]", output: "360", explanation: "[ 2 , 3 , -2 , -5 , 6 ] has the largest product 360."},
                ],
            },
           
            bruteforce: {
                heading: "The brute force approach to finding the maximum product subarray involves checking all possible subarrays and calculating their products to find the maximum product.",
                steps: [
                    "Initialize a variable max_product to store the maximum product, initially set to the minimum possible value.",
                    "Iterate through all possible starting indices of the subarray.",
                    "For each starting index, iterate through all possible ending indices greater than or equal to the starting index.",
                    "Extract the subarray .from the starting index to the ending index.",
                    "Calculate the product of all elements in the subarray.",
                    "Update max_product if the calculated product is greater than the current maximum.",
                    "Repeat steps 3-6 until all possible subarrays are considered.",
                    "Return max_product as the maximum product of a subarray within the given array."
                ],
                complexity: "This brute force approach has a time complexity of  O(n), where n is the length of the input array. Since it involves nested loops, it checks every possible subarray combination, making it highly inefficient for large input sizes. While the brute force solution is straightforward, it is not efficient for solving larger instances of the problem. We need something better."
            },
            efficient: {
                heading: "To solve this problem, you can utilize the dynamic programming approach. Here’s a general outline of the solution:",
                image: "https://i0.wp.com/studyalgorithms.com/wp-content/uploads/2023/06/Screen-Shot-2023-06-30-at-6.47.24-PM.png?resize=768%2C257&ssl=1",
                steps: [
                    "Initialize two variables, max_product and min_product, both set to the first element of the array",
                    "Initialize a variable max_global to store the overall maximum product.",
                    "Iterate through the array starting from the second element.",
                    "For each element, update max_product and min_product by considering three possibilities: a. Multiply the current element by max_product (to include the current element in the positive product chain). b. Multiply the current element by min_product (to include the current element in the negative product chain, in case the current element is negative). c. Start a new subarray from the current element (if the previous subarray’s product is not significant).",
                    "Update max_global by comparing it with max_product.",
                    "Repeat steps 4-5 until all elements are processed.",
                    "Return max_global as the maximum product of a subarray within the given array."
                ],
                complexity: "This approach allows you to keep track of both the maximum and minimum product at each step, considering the possibility of negative numbers and the potential of changing the product’s sign."
            },
            code: {
                replit: "https://replit.com/@HarviePurgatori/RadiantCelebratedAccess?embed=true"
            }     
        },
        {
            problem: { 
                tags: ["Arrays"],
                platform: "LeetCode",
                title: "Sliding Window Maximum Solution",
                readTime: 8,
                description: "In this blog post, we’ll explore the 'Sliding Window Maximum' problem, where our task is to find the maximum value in each sliding window of a given array. We'll discuss the problem statement, constraints, and approach to solving it efficiently using the deque data structure.",
                statement: "The problem statement involves finding the maximum value in each sliding window of a given array. We are given an array of integers and a window size. We need to find the maximum value in each window of the array as it slides from left to right.",
                image: "https://miro.medium.com/v2/resize:fit:1400/1*_NtR111HdEUfdo4ZJhwd9w.png",
            
                testcases: [
                    {input: " nums = [ 1 , 3 , -1 , -3 , 5 , 3 , 6 , 7 ] , k = 3", output: "[ 3 , 3 , 5 , 5 , 6 , 7 ]", explanation: "For the first window [ 1 , 3 , -1 ], the maximum value is 3. For the second window [ 3 , -1 , -3 ], the maximum value is 3, and so on."},
                    {input: " nums = [ 1 , -1 ] , k = 1", output: "[ 1 , -1 ]", explanation: "Each element is its maximum in a window of size 1."},
                    {input: " nums = [ 9 , 11 ] , k = 2", output: "[ 11 ]", explanation: "The maximum value for the window [ 9 , 11 ] is 11."}
                ],
            },            
            bruteforce: {
                heading: "A brute force approach to solving this problem involves iterating through each window and finding the maximum value within each window.",
                steps: [
                    "Iterate through each window of size k starting from index 0.",
                    "For each window, find the maximum value by iterating through its elements.",
                    "Store the maximum value for each window.",
                    "Repeat steps 1-3 until all windows are processed.",
                    "Return the array of maximum values."
                ],
                complexity: "This approach has a time complexity of O(n*k), where n is the number of elements in the array and k is the window size. It involves nested loops to iterate through each window and find the maximum value within each window."
            },
            efficient: {
                heading: "An efficient approach to solving this problem utilizes the deque data structure. Here's how it works:",
                image: "https://miro.medium.com/v2/resize:fit:744/1*tkBTGF_WIBzjhbe81pBUhQ.png",
                steps: [
                    "Initialize an empty deque to store indices of elements.",
                    "Iterate through each element in the array.",
                    "While the deque is not empty and the current element is greater than or equal to the element at the back of the deque, remove elements from the back of the deque.",
                    "Add the current element's index to the back of the deque.",
                    "If the index at the front of the deque is outside the current window, remove it.",
                    "If the current index is greater than or equal to k - 1 (i.e., the current window is fully formed), add the maximum value (i.e., the element at the front of the deque) to the result array.",
                    "Repeat steps 2-6 until all elements are processed.",
                    "Return the result array."
                ],
                complexity: "This approach has a time complexity of O(n), where n is the number of elements in the array. It involves iterating through each element once and performing constant-time deque operations."
            },
            code: {
                replit: "https://replit.com/@HarviePurgatori/Sliding-Window-Maximum-Solution?embed=true"
            }    
        },
        
    ],
    

    // linked list 
    linkedList: [
        {
            problem: {
                tags: ["Linked List"],
                platform: "LeetCode",
                title: "Swap Nodes in Pairs",
                readTime: 5,
                description: "Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed). This problem requires rearranging the links between adjacent nodes in the list, effectively swapping their positions while maintaining the same node values. The objective is to implement this swapping operation efficiently without altering the node values.",
                statement: "The task is to swap every two adjacent nodes in the given linked list. This task involves switching the positions of every two neighboring train cars, effectively rearranging the order of the cars within the linked list. This means the node that was originally pointed to by the first node now becomes the first node, and the original first node becomes the second node, and so on.",
                image: "https://assets.leetcode.com/uploads/2020/10/03/swap_ex1.jpg",
                testcases: [
                    { input: "head = 1->2->3->4", output: "2->1->4->3", explanation: "After swapping each pair of adjacent nodes, the resulting linked list becomes 2->1->4->3." },
                    { input: "head = 1->2->3->4->5", output: "2->1->4->3->5", explanation: "After swapping each pair of adjacent nodes, the resulting linked list becomes 2->1->4->3->5." },
                    // Added another test case
                ],
            },
            bruteforce: {
                heading: "The brute force approach involves iterating through the linked list and swapping each pair of adjacent nodes.",
                steps: [
                    "Initialize a dummy node and point it to the head of the linked list.",
                    "Iterate through the linked list.",
                    "For each pair of adjacent nodes, swap them by adjusting their next pointers.",
                    "Continue until all pairs of adjacent nodes are swapped.",
                    "Return the modified linked list head.",
                ],
                complexity: "This approach has a time complexity of O(n), where n is the number of nodes in the linked list, as it requires iterating through each node once.",
            },
            efficient: {
                heading: "An efficient approach is to use iterative swapping of adjacent nodes.",
                image: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190624140737/Pairwise-swap-elements-of-a-given-linked-list.png",
                steps: [
                    "Initialize a dummy node and point it to the head of the linked list.",
                    "Iterate through the linked list.",
                    "For each pair of adjacent nodes, swap them by adjusting their next pointers.",
                    "Continue until all pairs of adjacent nodes are swapped.",
                    "Return the modified linked list head.",
                ],
                complexity: "This approach has a time complexity of O(n), where n is the number of nodes in the linked list, as it requires iterating through each node once.",
            },
            code: {
                replit: "https://replit.com/@HarviePurgatori/Swap-Nodes-in-Pairs?embed=true",
            }
        },
        {
            problem: {
                tags: ["Linked List"],
                platform: "LeetCode",
                title: "Rotate List",
                readTime: 5,
                description: "Given a linked list, rotate the list to the right by k places, where k is a non-negative integer. This problem involves manipulating a singly-linked list such that each node is moved to the right by k places. If the rotation exceeds the length of the list, the rotation is performed as if it were a circular list, where the tail connects to the head. It's essential to handle cases where the list is empty or where k is greater than or equal to the length of the list.",
                statement: "You're given a linked list of data points. Imagine it as a chain where each link points to the next. The task is to rearrange the chain by moving the last k links to the front, essentially rotating the list to the right by k positions.",
                image: "https://assets.leetcode.com/uploads/2020/11/13/rotate1.jpg", // Placeholder image
                testcases: [
                    { input: "head = [1,2,3,4,5], k = 2", output: "[4,5,1,2,3]", explanation: "After rotating the linked list to the right by 2 places, the resulting linked list becomes [4,5,1,2,3]." },
                    { input: "head = [0,1,2], k = 4", output: "[2,0,1]", explanation: "After rotating the linked list to the right by 4 places, the resulting linked list becomes [2,0,1]." },
                    // Added another test case
                ],
            },
            bruteforce: {
                heading: "The brute force approach involves traversing the linked list multiple times to perform rotations.",
                steps: [
                    "Calculate Effective Rotations: Calculate the effective number of rotations by taking the remainder of k divided by the length of the linked list.",
                    "Rotate List: Perform the rotations by iterating over the list k times. In each iteration, move the last node to the front of the list. Repeat this process k times.",
                    "Return Modified List: After performing the rotations, return the modified linked list."
                ],
                complexity: "This approach has a time complexity of O(n*k), where n is the number of nodes in the linked list and k is the number of rotations.",
            },
            efficient: {
                heading: "An efficient approach is to find the length of the linked list and determine the effective number of rotations.",
                image: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190621144237/Rotate-a-Linked-List.png", // Placeholder image
                steps: [
                    "Find Length of List: Calculate the length of the linked list to determine the actual rotation point.",
                    "Adjust Rotation: Update the rotation value k by taking the remainder of k divided by the length of the linked list. This ensures that you only rotate by the effective number of places.",
                    "Find Rotation Point: Traverse the list to find the rotation point. Move right pointer k steps forward from the head.",
                    "Rotate List: Once you find the rotation point, adjust the pointers accordingly to perform the rotation. Update the next pointer of the node before the rotation point to null, and make the next pointer of the right node point to the original head.",
                    "Return Modified List: Return the new head of the rotated list."
                ],
                complexity: "This approach has a time complexity of O(n), where n is the number of nodes in the linked list, as it requires traversing the list only once.",
            },
            code: {
                replit: "https://replit.com/@HarviePurgatori/Rotate-List?embed=true", // Link to the solution implementation
            }
        },
    ],


    // strings
    strings: [
        {
            problem: {
                title: "Longest Substring Without Repeating Characters",
                tags: ["Strings", "Sliding Window"],
                platform: "LeetCode",
                readTime: 5,
                description: "Given a string s, find the length of the longest substring without repeating characters. If there are multiple longest substrings, return the length of the first one found. This problem requires determining the length of the longest substring within the given string where no character is repeated. It involves identifying substrings that contain distinct characters and determining their lengths.",
                image: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/unique_char_substr3.png",
                statement: "The task is to find the length of the longest substring in the given string without any repeating characters. The challenge is to find the longest continuous sequence of characters within that string where no character appears more than once. It's like searching for the longest word or phrase you can create using each letter in the string only once.",
                testcases: [
                    {
                        input: "s = 'geeksforgeeks'",
                        output: "7",
                        explanation: "The longest substring without repeating characters in 'geeksforgeeks' is 'geksfor', which has a length of 7."
                    },
                    {
                        input: "s = 'abcabcbb'",
                        output: "3",
                        explanation: "The longest substring without repeating characters in 'abcabcbb' is 'abc', which has a length of 3."
                    }
                ]
            },
            bruteforce: {
                heading: "The brute force approach involves checking all possible substrings for each character in the string.",
                steps: [
                    "Initialize a variable to store the maximum length of the substring without repeating characters.",
                    "Iterate through each character in the string.",
                    "For each character, start a new substring from that character and check if it contains any repeating characters.",
                    "If the substring does not contain any repeating characters, update the maximum length.",
                    "Repeat this process for all characters in the string.",
                    "Return the maximum length found."
                ],
                complexity: "This approach has a time complexity of O(n^3), where n is the length of the string, as it involves checking all possible substrings.",
            },
            efficient: {
                heading: "An efficient approach is to use a sliding window technique.",
                image: "https://favtutor.com/resources/images/uploads/mceu_28165975511699020966300.png",
                steps: [
                    "Initialize two pointers, start and end, to define the current substring.",
                    "Initialize a set to keep track of characters in the current substring.",
                    "Move the end pointer to the right, expanding the current substring, until a repeating character is found or the end of the string is reached.",
                    "If a repeating character is found, move the start pointer to the right, shrinking the current substring, until the repeating character is no longer in the substring.",
                    "Keep track of the maximum length of the substring without repeating characters during this process.",
                    "Repeat steps 3-5 until the end pointer reaches the end of the string.",
                    "Return the maximum length found."
                ],
                complexity: "This approach has a time complexity of O(n), where n is the length of the string, as it involves iterating through the string only once.",
            },
            code: {
                implementation: "class Solution {\n    public int lengthOfLongestSubstring(String s) {\n        int max = 0;\n        for (int i = 0; i < s.length(); i++) {\n            String current = \"\" + s.charAt(i);\n            for (int j = i + 1; j < s.length(); j++) {\n                if (!current.contains(\"\" + s.charAt(j)))\n                    current += s.charAt(j);\n                else\n                    break;\n            }\n            max = Math.max(max, current.length());\n        }\n        return max;\n    }\n}",
                replit: "https://replit.com/@HarviePurgatori/LSWP?embed=true",
            }
        }
    ],


    // trees
    trees: [
            {
                problem: {
                    title: "Symmetric Tree",
                    tags: ["Trees", "Depth-First Search"],
                    platform: "LeetCode",
                    readTime: 7,
                    description: "Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center). This problem involves determining whether a binary tree is symmetric, meaning that it is a mirror image of itself around its center. To solve this problem, we need to compare the left subtree of the tree with its right subtree, ensuring that they mirror each other.",
                    statement: "The task is to determine whether the given binary tree is symmetric. The task is to check if this tree is a mirror image of itself.  Think of folding the tree vertically down the middle. If the left and right sides perfectly mirror each other, then the tree is considered symmetric.",
                    image: "https://assets.leetcode.com/uploads/2021/02/19/symtree1.jpg",
                    testcases: [
                        {
                            input: "[1,2,2,3,4,4,3]",
                            output: "true",
                            explanation: "The binary tree [1,2,2,3,4,4,3] is symmetric, as its left and right subtrees are mirror images of each other."
                        },
                        {
                            input: "[1,2,2,null,3,null,3]",
                            output: "false",
                            explanation: "The binary tree [1,2,2,null,3,null,3] is not symmetric, as its left and right subtrees do not mirror each other."
                        }
                    ]
                },
                bruteforce: {
                    heading: "The brute force approach involves traversing the tree and comparing each corresponding pair of nodes.",
                    steps: [
                        "Traverse the tree using depth-first search.",
                        "At each node, compare its left child with the right child.",
                        "If the values of corresponding nodes are not equal, return false.",
                        "Repeat steps 2-3 until all nodes are processed.",
                        "Return true if all corresponding nodes are equal, indicating that the tree is symmetric."
                    ],
                    complexity: "This approach has a time complexity of O(n), where n is the number of nodes in the tree, as it involves traversing each node once."
                },
                efficient: {
                    heading: "An efficient approach is to perform a recursive comparison of left and right subtrees.",
                    image: "https://media.geeksforgeeks.org/wp-content/uploads/20200427100759/output241.png",
                    steps: [
                        "Define a recursive function that takes two nodes as input.",
                        "Base case: If both nodes are null, return true.",
                        "If one node is null and the other is not, or their values are not equal, return false.",
                        "Recursively compare the left subtree of the left node with the right subtree of the right node, and vice versa.",
                        "Return true if both recursive calls return true, indicating that the subtrees are symmetric.",
                        "Repeat this process until all nodes are compared."
                    ],
                    complexity: "This approach has a time complexity of O(n), where n is the number of nodes in the tree, as it involves traversing each node once."
                },
                code: {                   
                    replit: "https://replit.com/@HarviePurgatori/SymmetricTree?embed=true"
                }
            }
        
    ]
}

