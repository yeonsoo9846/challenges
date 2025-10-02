
// 소수인지 확인
function isPrime(n) {
    if(n<2) return false;
    for(let i = 2; i * i <= n; i++) {
        if(n % i === 0) return false;
    }
    return true;
}

function getNthPrime(n) {
    let count = 0;
    let prime = 1;
    while(count < n) {
        prime++;
        console.log(prime);
        if(isPrime(prime)) {
            count++;
        }
    }
    return prime;
}

function countPrimes(start, end) {
    let count = 0;
    for(let i = start; i <= end; i++) {
        if(isPrime(i)) {
            count++;
        }
    }
    return count;
}

function getPrimesUpTo(n) {
  let primes = [];
  for(let i = 2; i <= n; i++) {
    if(isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}


const getPrime = (n) => {
    if(n < 2) return false;  // 2보다 작으면 소수 아님
  for(let i = 2; i * i <=n; i++){
    if(n % i === 0) return false;
  }
    return true;
}

function getLength(start,end) {
    let count = 0;
    for(let i = start; i <= end; i++) {
        if(getPrime(i)) {
            count++;
        }
    }
    return count;
}


function findPrimePairs(n) {
    let pairs = [];
    for(let i = 2; i <= n/2; i++) {
        if(getPrime(i) && getPrime(n - i)) {
            pairs.push([i, n - i]);
        }
    }
    return pairs;
}

function getPrimesUpTo(n) {
    let solution = [];
    for(let i = 2; i  <=n; i++) {
        if(isPrime(i)) {
            solution.push(i);
        }
    }
    return solution;

}

