export function onlyNumber(string) 
{
    var string1 = string.match(/\d/g).join('');
    return string1;
}

export default onlyNumber;