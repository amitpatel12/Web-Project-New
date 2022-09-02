let obj = [{
    quote: 'You have to write the book that wants to be written. And if the book will be too difficult for grown-ups, then you write it for children.',
    aurthor: `Madeleine L'Engle`
},
{
    quote: 'You never have to change anything you got up in the middle of the night to write.',
    aurthor: 'Saul Bellow'
},
{
    quote: 'No tears in the writer, no tears in the reader. No surprise in the writer, no surprise in the reader.',
    aurthor: 'Robert Frost'
},
{
    quote:`Read, read, read. Read everything  --  trash, classics, good and bad, and see how they do it. Just like a carpenter who works as an apprentice and studies the master. Read! You'll absorb it. Then write. If it's good, you'll find out. If it's not, throw it out of the window.`,
    aurthor:'William Faulkner'
},
{
    quote:`Here is a lesson in creative writing. First rule: Do not use semicolons. They are transvestite hermaphrodites representing absolutely nothing. All they do is show you've been to college.`,
    aurthor:'Kurt Vonnegut Jr., A Man Without a Country'
}
]

const btn = document.getElementById('btn');
let text = document.getElementById('text1');
let aurthorName = document.getElementById("aurthorName");

btn.addEventListener('click',function(){
    let number = fun();
    console.log(number);
    text.textContent = obj[number].quote;
    aurthorName.textContent = obj[number].aurthor;
})


function fun()
{
    return Math.floor(Math.random()*obj.length);
}