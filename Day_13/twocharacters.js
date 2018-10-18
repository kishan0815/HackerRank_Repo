process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}


function removeCharacter(s, character) {
    let regex = new RegExp(character, 'g');
    return s.replace(regex, '');
}

function removeConsecutives(s) {
    let prevCharacter = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] === prevCharacter) {
            s = removeCharacter(s, s[i]);
            return removeConsecutives(s); // String changed, so recheck
        } else {
            prevCharacter = s[i];
        }
    }
    
    return s;
}

function main() {
    let len = parseInt(readLine());
    let s = readLine();
   
    let optimizedString = removeConsecutives(s);
    let uniqueCharacters = [];
    
    for (let i = 0; i < optimizedString.length; i++) {
        if (!uniqueCharacters.includes(optimizedString[i])) {
            uniqueCharacters.push(optimizedString[i]);
        }
    }
    
    let longestString = '';
    // with 26 letters, choosing 2, we can have a maximum of 325 iterations
    for (let firstCharPos = 0; firstCharPos < uniqueCharacters.length - 1; firstCharPos++) {
        for (let secondCharPos = firstCharPos + 1; secondCharPos < uniqueCharacters.length; secondCharPos++) {
            let trialString = optimizedString;
            uniqueCharacters.forEach((v, i) => {
                if (i !== firstCharPos && i !== secondCharPos) {
                    trialString = removeCharacter(trialString, v);
                }
            });
            trialString = removeConsecutives(trialString);
            if (trialString.length > longestString.length) {
                longestString = trialString;
            }
        }
    }
    
    console.log(longestString.length);
}