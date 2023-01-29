
var CronJob = require('cron').CronJob;

export function shrimpTimer() {
    const element = document.createElement('div');
    var scheduledShrimps = new CronJob(
        '* * * * * *',
        function () {
            console.log(addShrimp());
            element.innerHTML += addShrimp();
            document.body.appendChild(element)
        },
        null,
        true,
        'America/Los_Angeles'
    );
}

function addShrimp() {
    return '<p>shrimp</p>'
}
