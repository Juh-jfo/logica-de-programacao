 const compare =  function (x, y) {
 let msg;

  if (x > y) {
    msg = `O número ${x} é maior do que ${y}`;
  } else if (x < y) {
    msg = `O número ${x} é menor do que ${y}`;
  } else {
    msg = `Os dois números são iguais`;
  }
  
console.log (msg);
};

export default compare;