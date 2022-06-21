// use heart symbol as wildcard
// once with spaces and once without
// based on number of overlapping characters in substring. substring length same as input
const fs = require("fs");

nums = [];
taunts = [];

fs.readFile("tauntlist.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const fileLines = data.split("\r\n");
  for (line of fileLines) {
    const [num, taunt] = line.split(/. (.*)/s);
    nums.push(num);
    taunts.push(taunt);
  }
});
console.log(nums);

// fs.close();

// with open('tauntlist.txt', encoding="utf8") as taunt_list:
//     for line in taunt_list:
//         num, taunt = line.split(". ", 1)
//         nums.append(num)
//         taunts.append(taunt.strip())
// print(taunts)
