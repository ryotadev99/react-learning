const amount = 4200;
const isMember = true;
if(isMember && (amount >= 5000)) {
  console.log('送料無料です');
} else if(isMember || (amount >=10000)) {
  console.log('送料は200円です');
} else {
  console.log('送料は500円です');
}

const isLoggedIn = false;
if(!isLoggedIn) {
  console.log('ログインしていません');
}