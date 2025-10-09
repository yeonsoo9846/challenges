function solution(words) {
    let totalCount = 0;

    function getCommonLength(word1, word2) {
        let count = 0;

        for (let i = 0; i < Math.min(word1.length, word2.length); i++){
            if(word1[i] === word2[i]) {
                count++;
            } else {
                break;
            }
        }
        return count;
    }

    // 각 단어마다 필요한 입력 수 계산
    for (let i = 0; i < words.length; i++) {
        let currentWord = words[i];
        let maxCommon = 0;  // ✅ 가장 긴 공통 부분 저장

        for(let j =0; j < words.length; j++) {
            if(i === j) continue;

            maxCommon = Math.max(maxCommon, getCommonLength(currentWord, words[j]));
        }
        const needed = Math.min(maxCommon + 1, currentWord.length);
        totalCount += needed;
    }


    return totalCount;
}


