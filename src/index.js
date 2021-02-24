module.exports = function check(str, bracketsConfig) 
{
    if(str.length % 2 != 0) return false;
    
    let brackets = []
    for(let i = 0; i < bracketsConfig.length; i++)
    {
        brackets[i] = bracketsConfig[i].join('');
    }

    console.log(str);

    for(let i = 0; i < brackets.length ** 2; i++) 
    {
        let j = 0;
        while (true) 
        {
            if(!str.includes(brackets[j]) && j < brackets.length) { j++; }
            else
            {
                while (str.includes(brackets[j])) 
                {
                    str = str.split(brackets[j]).join('');
                    console.log(str);
                }
                break;
            }
        }
    }

    return str.length != 0 ? false : true ;
};