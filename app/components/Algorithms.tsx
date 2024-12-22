'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code, ChevronDown, ChevronUp } from 'lucide-react'

const algorithms = [
  {
    name: "Binary Search",
    description: "An efficient algorithm for searching a sorted array by repeatedly dividing the search interval in half.",
    timeComplexity: "O(log n)",
    spaceComplexity: "O(1)",
    code: `
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}
    `
  },
  {
    name: "Quick Sort",
    description: "A highly efficient sorting algorithm that uses a divide-and-conquer strategy to sort elements in place.",
    timeComplexity: "O(n log n) average, O(n^2) worst case",
    spaceComplexity: "O(log n)",
    code: `
function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    const pivotIndex = partition(arr, low, high);
    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high);
  }
  return arr;
}

function partition(arr, low, high) {
  const pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}
    `
  },
  {
    name: "Depth-First Search (DFS)",
    description: "A graph traversal algorithm that explores as far as possible along each branch before backtracking.",
    timeComplexity: "O(V + E) where V is the number of vertices and E is the number of edges",
    spaceComplexity: "O(V)",
    code: `
function dfs(graph, start, visited = new Set()) {
  visited.add(start);
  console.log(start);

  for (const neighbor of graph[start]) {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited);
    }
  }
}

// Example usage:
const graph = {
  A: ['B', 'C'],
  B: ['A', 'D', 'E'],
  C: ['A', 'F'],
  D: ['B'],
  E: ['B', 'F'],
  F: ['C', 'E']
};

dfs(graph, 'A');
    `
  }
]

const Algorithms = () => {
  const [selectedAlgo, setSelectedAlgo] = useState(algorithms[0])
  const [isCodeVisible, setIsCodeVisible] = useState(false)

  return (
    <section id="algorithms" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Algorithms</h2>
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 flex flex-wrap justify-center gap-4">
            {algorithms.map((algo) => (
              <motion.button
                key={algo.name}
                className={`px-4 py-2 rounded-full text-lg font-medium transition-colors ${
                  selectedAlgo.name === algo.name
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
                onClick={() => {
                  setSelectedAlgo(algo)
                  setIsCodeVisible(false)
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {algo.name}
              </motion.button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedAlgo.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">{selectedAlgo.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{selectedAlgo.description}</p>
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                    Time Complexity: {selectedAlgo.timeComplexity}
                  </div>
                  <div className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                    Space Complexity: {selectedAlgo.spaceComplexity}
                  </div>
                </div>
                <button
                  className="flex items-center gap-2 bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 text-gray-800 dark:text-gray-200 font-semibold py-2 px-4 rounded transition duration-300"
                  onClick={() => setIsCodeVisible(!isCodeVisible)}
                >
                  <Code size={20} />
                  {isCodeVisible ? 'Hide Code' : 'Show Code'}
                  {isCodeVisible ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
              </div>
              <AnimatePresence>
                {isCodeVisible && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <pre className="bg-gray-100 dark:bg-gray-800 p-4 overflow-x-auto">
                      <code className="text-sm">{selectedAlgo.code}</code>
                    </pre>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default Algorithms

