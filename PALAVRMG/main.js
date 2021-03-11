const prompt = require('prompt-sync')();

const p = prompt();

for(var i=0; i<p; i++)
{
    var word = prompt();
    var wordf = word.toUpperCase();
    var verificador = false;
    for(var j=0; j<wordf.length - 1; j++)
    {
        if(wordf[j] >= wordf[j+1])
        {
            verificador = true;
            break;
        }   
    }

    if (verificador === true)
    {
        console.log(`${word}: N`);
    }

    else
    {
        console.log(`${word}: O`);
    }

}
