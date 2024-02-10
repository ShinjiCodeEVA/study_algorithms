

export const Efficient = () => {
  return (
    <div className="mt-4">
        <h2 className="text-slate-blue text-xl font-semibold">Efficient Solution</h2>
        <article>
            To solve this problem, you can utilize the dynamic programming approach. Here’s a general outline of the solution:
        </article>
        <ul className="mt-3">
            <li className="ml-3 mt-1">1. Initialize two variables, max_product and min_product, both set to the first element of the array.</li>
            <li className="ml-3 mt-1">2. Initialize a variable max_global to store the overall maximum product.</li>
            <li className="ml-3 mt-1">3. Iterate through the array starting from the second element.</li>
            <li className="ml-3 mt-1">4. For each element, update max_product and min_product by considering three possibilities:<br/>
                a. Multiply the current element by max_product (to include the current element in the positive product chain). b. Multiply the current element by min_product (to include the current element in the negative product chain, in case the current element is negative). c. Start a new subarray from the current element (if the previous subarray’s product is not significant).
            </li>
            <li className="ml-3 mt-1">5. Update max_global by comparing it with max_product.</li>
            <li className="ml-3 mt-1">6. Repeat steps 4-5 until all elements are processed.</li>
            <li className="ml-3 mt-1">7. Return max_global as the maximum product of a subarray within the given array.</li>
        </ul>
        <div className="flex items-center justify-center flex-col">
            <img className="max-h-[300px]" src="https://i0.wp.com/studyalgorithms.com/wp-content/uploads/2023/06/Screen-Shot-2023-06-30-at-6.47.24-PM.png?resize=768%2C257&ssl=1" alt="" />
            <small className="text-gray-400 mt-4">Fig: A dynamic programming approach</small>
        </div>
        <article className="mt-4">
            This approach allows you to keep track of both the maximum and minimum product at each step, considering the possibility of negative numbers and the potential of changing the product’s sign.
        </article>
    </div>
  )
}
