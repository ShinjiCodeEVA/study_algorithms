export const arrays = [
    {
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
            replit: "#"
        }     
    },
    {
        tags: ["Arrays"],
        platform: "LeetCode",
        title: "Maximum Product Subarray Solution",
        readTime: 10,
        description: "In this blog post, we’ll explore the “Maximum Product Subarray” problem, where our task is to find the contiguous subarray within an array that yields the maximum product. We’ll discuss the problem statement in detail and explore two approaches: the brute force solution and an optimized solution using dynamic programming techniques."
    },
    {
        tags: ["Arrays"],
        platform: "LeetCode",
        title: "Maximum Product Subarray Solution",
        readTime: 10,
        description: "In this blog post, we’ll explore the “Maximum Product Subarray” problem, where our task is to find the contiguous subarray within an array that yields the maximum product. We’ll discuss the problem statement in detail and explore two approaches: the brute force solution and an optimized solution using dynamic programming techniques."
    }
];
