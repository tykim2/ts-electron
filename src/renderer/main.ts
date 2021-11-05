console.log('this is renderer main.ts');

const elem = document.getElementById('num');

// @ts-expect-error
elem?.innerText = api.threads

// @ts-expect-error
console.log(`${api.threads}`);
