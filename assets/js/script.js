function longestConsecutive(nums) {
    if (nums.length === 0) {
      return 0;
    }
  
    const numSet = new Set(nums);
    let longestSequence = 0;
  
    for (const num of numSet) {
      if (!numSet.has(num - 1)) {
        let currentNum = num;
        let currentSequenceLength = 1;
  
        while (numSet.has(currentNum + 1)) {
          currentNum += 1;
          currentSequenceLength += 1;
        }
  
        longestSequence = Math.max(longestSequence, currentSequenceLength);
      }
    }
  
    return longestSequence;
  }
  
  const arrayInput = document.getElementById("arrayInput");
  const findSequence = document.getElementById("findSequence");
  const result = document.getElementById("result");
  
  findSequence.addEventListener("click", () => {
    const inputArray = arrayInput.value.split(",").map((x) => parseInt(x.trim()));
    const longest = longestConsecutive(inputArray);
    result.textContent = `The longest consecutive sequence has a length of ${longest}.`;
  });