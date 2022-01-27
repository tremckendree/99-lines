let friends = ["Ted", "Ned", "Bob", "Eli", "Dan"];

for (let i = 0; i < friends.length; i++) {
  console.log(friends[i]);

  let num = 99;
  while (num >= 1) {
    if (num === 2) {
      console.log(
        num +
          "lines of code in the file," +
          num +
          "lines of code;" + friends[i] + " strikes one out, clears it all out," +
          (num - 1) +
          "lines of code in the file"
      );
    } else if (num === 1) {
      console.log(
        num +
          "line of code in the file," +
          num +
          "line of code;" + friends[i] + " strikes one out, clears it all out," +
          (num - 1) +
          "line of code in the file"
      );
    } else {
      console.log(
        num +
          "lines of code in the file," +
          num +
          "lines of code; " + friends[i] + " strikes one out, clears it all out," +
          (num - 1) +
          "lines of code in the file"
      );
    }
    num--;
  }
}
