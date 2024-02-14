
export const arrays = [
    {
        id: 1,
        title: "Maximum Product Subarray Solution",
        tags: ["array"],
        readTime: 10,
        description: "In this blog post, we'll explore the \"Maximum Product Subarray problem,\" where our task is to find the contigous subarray within an array that yields the maximum product. We'll discuss the problem statement in detail and explore two approaches: the brute force solution and an optimized solution using dynamic programming techniques",
        
        solutionExplanation: "In the given problem statement, we have an array of integers and we need to find the maximum product possible for a contiguous subarray. The most important part of this problem is that the elements have to be contiguous. So special attention needs to be given for negative numbers and zeroes.",
        
        testCase: [
            {
                input: "nums = [ 2 , 3 , -2 , 4 ]",
                output: 6,
                explanation: "[ 2 , 3 ] has the largest product 6."
            },
            {
                input: "nums = [ 2 , 3 , -2 , -5 , 6 , -1 , 4 ]",
                output: 360,
                explanation: "[ 2 , 3 , -2 , -5 , 6 ] has the largest product 360."
            },
        ],

        
        
        images: ["https://i0.wp.com/studyalgorithms.com/wp-content/uploads/2023/06/Screen-Shot-2023-06-30-at-6.26.38-PM.png?resize=585%2C494&ssl=1", "https://i0.wp.com/studyalgorithms.com/wp-content/uploads/2023/06/Screen-Shot-2023-06-30-at-6.47.24-PM.png?resize=768%2C257&ssl=1"],
        
        bruteForce: {
            heading: "The brute force approach to finding the maximum product subarray involves checking all possible subarrays and calculating their products to find the maximum product.",
            steps: [
                "Initialize a variable max_product to store the maximum product, initially set to the minimum possible value.",
                "Iterate through all possible starting indices of the subarray.",
                "For each starting index, iterate through all possible ending indices greater than or equal to the starting index.",
                "Extract the subarray from the starting index to the ending index.",
                "Calculate the product of all elements in the subarray.",
                "Update max_product if the calculated product is greater than the current maximum.",
                "Repeat steps 3-6 until all possible subarrays are considered.",
                "Return max_product as the maximum product of a subarray within the given array."
            ],
            summary: "This brute force approach has a time complexity of  � ( �3)O(n 3), where n is the length of the input array. Since it involves nested loops, it checks every possible subarray combination, making it highly inefficient for large input sizes.While the brute force solution is straightforward, it is not efficient for solving larger instances of the problem. We need something better."
        },

        efficient: {
            heading: "To solve this problem, you can utilize the dynamic programming approach. Here’s a general outline of the solution:",
            steps: [
                "Initialize two variables, max_product and min_product, both set to the first element of the array.",
                "Initialize a variable max_global to store the overall maximum product.",
                "Iterate through the array starting from the second element.",
                "For each element, update max_product and min_product by considering three possibilities: a. Multiply the current element by max_product (to include the current element in the positive product chain). b. Multiply the current element by min_product (to include the current element in the negative product chain, in case the current element is negative). c. Start a new subarray from the current element (if the previous subarray’s product is not significant).",
                "Update max_global by comparing it with max_product.",
                "Repeat steps 4-5 until all elements are processed.",
                "Return max_global as the maximum product of a subarray within the given array."
            ],
            summary: "This approach allows you to keep track of both the maximum and minimum product at each step, considering the possibility of negative numbers and the potential of changing the product’s sign."
        }
    },
    {   
        id: 2,
        title: "Move zeroes Solution",
        tags: ["array"],
        readTime: 10,
        description: "Given an array of positive integers with some zeroes. You need to move all the zeroes to the end without changing the relative order of non-zero elements. A unique solution makes this problem really easy to understand.",
        
        solutionExplanation: " In the given problem statement, we have an integer array that may or may not have some zeroes. You need to move all the zeroes to the right of the array without disturbing the original order of all the remaining elements. We desire a space complexity of O(1).",
        
        testCase: [
            {
                input: "nums = [ 0, 1, 0, 3, 12 ]",
                output: "[ 1, 3, 12, 0, 0 ]",
                explanation: "After moving zeroes to the end, the array becomes [1, 3, 12, 0, 0]."
            },
            {
                input: "nums = [2, 3, -2, -5, 6, -1, 4]",
                output:"[2, 3, -2, -5, 6, -1, 4]",
                explanation: "There are no zeroes in the array, so the output remains the same as the input."
            },
        ],
        
        images: ["https://i0.wp.com/studyalgorithms.com/wp-content/uploads/2022/11/Screen-Shot-2022-11-18-at-4.43.10-AM.png?w=491&ssl=1"],
        
        bruteForce: {
            heading: "A pretty straight forward way to solve this problem could be to create 2 different arrays:",
            steps: [
                "Store all the non-zero elements in one array",
                "the other array holds all the zeroes",
                "Once, we have these 2 arrays, iterate from the first element in the array.",
                "If we get a non-zero element, move it to the first array, and if the element is a 0 move it to the second array."
            ],
            summary: "As the loop ends, the relative order of original elements is maintained in the first array. All the zeroes move to the second array. As a last step, merge both the arrays to get the correct answer. This approach works in a O(n) time, and takes O(n) space as well to store the elements. Surely we can improve on that."
        },

        efficient: {
            heading: "Thinking about the problem a little more, we do not have to do anything with the zeroes as long as we maintain the relative order of the other elements. This signals firstly that we do not need any extra space to store the zeroes.",
            steps: [
                "Start from the first element in the array, and keep a marker.",
                "For an element that is non-zero, move the marker ahead as we want to keep the number.",
                "If the element is zero, just move ahead in the array and leave the marker in the original place.",
                "Iterate through each element and apply the same logic at every element",
                "If the array had only 3 non-zero elements, the marker will be at the third position in the array.",
                "All the rest elements can be substituted with a 0.",
            ],
            summary: "Theoretically, we did move all zeroes to the end of the array. This method works in-place without taking any extra space."
        }
    },
]