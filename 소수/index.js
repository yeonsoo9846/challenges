
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

// n!을 소수 p로 나눈 나머지를 구하세요. (p는 소수)
function primeFactorialMod(n, p) {
    let prime= 1;
    for(let i = 2; i <= n; i++) {
        prime *= i;
    }
    return prime % p;
}


// N 이하의 모든 쌍둥이 소수 쌍을 찾으세요.
// 쌍둥이 소수란 차이가 2인 소수 쌍입니다. (예: 3과 5, 11과 13)
function findTwinPrimes(n) {
    let primes = [];
    for(let i = 2; i <=n; i++) {
        if(isPrime(i) && isPrime(i + 2)) {
            primes.push([i, i + 2]);
        }
    }
    return primes;
}

// 주어진 숫자를 소인수분해하여 {소수: 지수} 형태의 객체로 반환하세요.
function primeFactorization(n) {
    let result = {};

    if(n > 1) result[n] = 1;

    for(let i = 2; i * i <= n; i++) {
        while(n % i === 0) {
            if(!result[i]) result[i] = 0;
            result[i]++;
            n /= i;
        }
    }

    return result;
}

// 연속된 소수들 사이의 간격 중 K번째로 큰 간격과 그 간격을 만드는 소수 쌍을 찾으세요.
function kthLargestPrimeGap(n, k) {
    let primes = [];
    for(let i =2; i <= n; i++) {
        if(isPrime(i)) {
            primes.push(i);
        }
    }
    if(primes.length < 2) return null;
    let gaps = [];

    for(let i = 0; i < primes.length - 1; i++) {
        gaps.push({
            gap: primes[i + 1] - primes[i],
            pari: [primes[i], primes[i + 1]]
        })
    }

    gaps.sort((a,b) => b.gap - a.gap);
    if(k > gaps.length) return null;
    return gaps[k - 1];
}

//start부터 end까지의 범위에서 연속된 소수들의 합이 target이 되는
// 가장 짧은 구간을 찾으세요.

function shortestPrimeSum(start, end, target) {
    let arrPrime = [];
    for(let i = start; i <= end; i++) {
        if(isPrime(i)) {
            arrPrime.push(i);
        }
    }
    if(arrPrime.length === 0) return null;

    let shortest = null;
    for(let i =0; i < arrPrime.length; i++) {
        let sum = 0;
        for(let j = i; j < arrPrime.length; j++) {
            sum += arrPrime[j];
            if(sum === target) {
                let length = j - i + 1;
                if(!shortest || length < shortest.length) {
                    shortest = {
                        length,
                        primes: arrPrime.slice(i,j+1)
                    }
                }
                break;
            }
            if(sum > target) break;
        }
    }
    return shortest;
}