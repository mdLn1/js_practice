function countingSort(list, min, max)
  {
      let i
      let z = 0
      const count = []

      for (i = min; i <= max; i++) {
          count[i] = 0
      }

      for (i=0; i < list.length; i++) {
          count[list[i]]++
      }

      for (i = min; i <= max; i++) {
          while (count[i]-- > 0) {
              list[z++] = i
          }
      }
      return list
}

const list = [4, 2, 3, 1, 5]
const min = Math.min(...list)
const max = Math.max(...list)
const sorted = countingSort(list, min, max)


console.log(sorted)
