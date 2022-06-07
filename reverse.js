const reverse = function() {
  let array = process.argv.slice(2);
  while (array.length !== 0) {
    let word = array.pop();
    let reversed = '';
    for (let i = word.length - 1; i >= 0 ; i--){
      reversed += word[i]
    };
    console.log(reversed);
  };
};

module.exports = reverse;
