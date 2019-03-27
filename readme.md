# DactyloGod

Dactylogod is a simple bot for [10fastfingers.com](https://10fastfingers.com) made with Puppeteer.

## Installation

To get the project, simply run
```
git clone https://github.com/AyyymericArn/dactylogod
```

Then to install the dependencies, simply run

```
npm i
```

## Usage

To use it in guest mode, just run

```
node bot.js
```

After 150 words typed, the bot will pause for 10 seconds so that you can type random characters **without touching to space bar** to fake a real test.

Optionnaly, you may provide your email and password to login before the dactylo test launches, so that you can register you performance, like so :

```
node bot.js aymericarnoult@gmail.com aWeSoMePaSsWoRd
```

At the moment, the godlike scores are unvalidated by anticheat. Feel free to send pull requests if you're determined enough to break it.

## Tweaking

You may tweak the bot speed in the config object at the top of the bot.js file. You may also change the desired language by changing the crawled URL. Finally, you can desable the pause after 150 words, or change this limit.
