module.exports = function toReadable(number) {
    let result = '';

    function switchItUp(number) {
        switch (number) {
            case 0:
                return 'zero';
            case 1:
                return 'one';
            case 2:
                return 'two';
            case 3:
                return 'three';
            case 4:
                return 'four';
            case 5:
                return 'five';
            case 6:
                return 'six';
            case 7:
                return 'seven';
            case 8:
                return 'eight';
            case 9:
                return 'nine';
            default:
                return 'Unknown number';
        }
    }

    function switchItUpTeens(number) {
        switch (number) {
            case 10:
                return 'ten';
            case 11:
                return 'eleven';
            case 12:
                return 'twelve';
            case 13:
                return 'thirteen';
            case 14:
                return 'fourteen';
            case 15:
                return 'fifteen';
            case 16:
                return 'sixteen';
            case 17:
                return 'seventeen';
            case 18:
                return 'eighteen';
            case 19:
                return 'nineteen';
            default:
                return 'Unknown number';
        }
    }

    function switchItUpTies(number) {
        switch (number) {
            case 2:
                return 'twenty';
            case 3:
                return 'thirty';
            case 4:
                return 'forty';
            case 5:
                return 'fifty';
            case 6:
                return 'sixty';
            case 7:
                return 'seventy';
            case 8:
                return 'eighty';
            case 9:
                return 'ninety';
            default:
                return 'Unknown number';
        }
    }


    let arrayOfDigits = Array.from(String(number), Number);
    let length = arrayOfDigits.length;

   

    if (length === 1) {
    result = switchItUp(arrayOfDigits[0]);
    }

    if (length > 1 && arrayOfDigits[length-2] === 1) {
        result = switchItUpTeens(number%100)
        
    }

    if (length > 1 && arrayOfDigits[length-1] !== 0 && arrayOfDigits[length-2] !== 1) {
        result = switchItUpTies(arrayOfDigits[length-2]) +' '+ switchItUp(arrayOfDigits[length-1]);
        
    }

    if (length > 1 && arrayOfDigits[length-1] === 0 && arrayOfDigits[length-2] !== 1) {
        result = switchItUpTies(arrayOfDigits[length-2]);
        
    }

    if (length === 3 && arrayOfDigits[1] !== 0) {
        result  = switchItUp(arrayOfDigits[0])+ ' hundred '+ result
    }

    if (length === 3 && arrayOfDigits[1] === 0) {
        result  = switchItUp(arrayOfDigits[0])+ ' hundred '+ switchItUp(arrayOfDigits[2])
    }

    if (length === 3 && arrayOfDigits[1] === 0 && arrayOfDigits[2] === 0) {
        result  = switchItUp(arrayOfDigits[0])+ ' hundred'
    }


    return result
}
