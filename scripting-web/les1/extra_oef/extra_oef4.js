let ondergrens = 1
let bovengrens = 100
let totaal = 0

for (let i = ondergrens; i <= bovengrens; i++) {
    if (i % 3 === 0) {
        totaal += i
    }
}
console.log("het totaal is = "  + totaal)