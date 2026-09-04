const amount = 3800;
if(amount >= 5000) {
  console.log('送料無料です');
} else if(amount >= 3000) {
  console.log('送料は300円です');
} else {
  console.log('送料は500円です');
}

const result = amount >= 5000;
console.log(result);