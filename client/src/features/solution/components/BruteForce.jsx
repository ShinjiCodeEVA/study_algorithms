
export const BruteForce = () => {
  return (
    <div className="mt-4">
        <h2 className="text-slate-blue text-xl font-semibold ">Brute Force Solution</h2>
        <article className="mt-3">
            The brute force approach to finding the maximum product subarray involves checking all possible subarrays and calculating their products to find the maximum product.
        </article>
        <ul className="mt-3">
            <li className="ml-3 mt-1">1. Initialize a variable max_product to store the maximum product, initially set to the minimum possible value</li>
            <li className="ml-3 mt-1">2. Iterate through all possible starting indices of the subarray.</li>
            <li className="ml-3 mt-1">3. For each starting index, iterate through all possible ending indices greater than or equal to the starting index.</li>
            <li className="ml-3 mt-1">4. Extract the subarray from the starting index to the ending index</li>
            <li className="ml-3 mt-1">5. Calculate the product of all elements in the subarray.</li>
            <li className="ml-3 mt-1">6. Update max_product if the calculated product is greater than the current maximum.</li>
            <li className="ml-3 mt-1">7. Repeat steps 3-6 until all possible subarrays are considered.</li>
            <li className="ml-3 mt-1">8. Return max_product as the maximum product of a subarray within the given array.</li>
        </ul>
        <article className="mt-4">
            This brute force approach has a time complexity of �(�3)O(n 3), where n is the length of the input array. Since it involves nested loops, it checks every possible subarray combination, making it highly inefficient for large input sizes. <br/><br/>While the brute force solution is straightforward, it is not efficient for solving larger instances of the problem. We need something better.
        </article>
    </div>
  )
}
