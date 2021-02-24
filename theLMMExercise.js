// #1
let warmHugs = "Hi, I'm Olaf and I like warm hugs.";
console.log(warmHugs.toLocaleUpperCase());
console.log(warmHugs.replace("like", "love"));

// #2
let beenImpaled = "Oh, look at that. I've been impaled.";
console.log(beenImpaled.slice(18));

// #3
let dotDotDot = "...";
const skullBones = `I don't have a skull${dotDotDot}or bones`;
console.log(skullBones);

// #4
console.log(Math.PI);

// #5
let randomNumber = Math.random();
randomNumber *= 2;
randomNumber++;
randomNumber = Math.ceil(randomNumber);
console.log(randomNumber);

// BONUS
// #6
console.log(" Let It Go! ".slice(1).toUpperCase().repeat(3));

// #7
let reindeers = "Reindeers are better than people.";
reindeers = "Reindeers_are_better_than_people.";
console.log(reindeers);

// #8
console.log(Math.SQRT2);

// #9
let newRandomNumber = Math.random(6);
newRandomNumber *= 24;
newRandomNumber++;
newRandomNumber = Math.ceil(newRandomNumber);
console.log(newRandomNumber);
