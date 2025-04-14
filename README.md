 lazy_dev in discord

one of bored stuff i do every day sending status to my team in discord "gm! im in sptint1" or any thing like that so automated it to  avoid waste time .



with know you should run get_cookies.js first to set that in daily_status(main script) to avoid auth everytime you run it, 
also maybe you might facing failure in PAGE.WAITFORSELECTOR(); thats mean discord change selector so try to find the right one by inspect page ,in common cases seems like 'role="textbox"',
after find selector set delay during you type or set massage to avoid act like bots .

use puppeteer
call discord 'https://discord.com/login'
schedule it by use 'node-cron' 
