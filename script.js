function updateData() {
    const slackUserNameElement = document.querySelector('[data-testid="slackUserName"]')
    const currentDayOfTheWeekElement = document.querySelector('[data-testid ="currentDayOfTheWeek"]')
    const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]')
    const myTrackElement = document.querySelector('[data-testid="myTrack"]')

    const now = new Date()
    const dayOfWeek = now.toLocaleDateString('en-us', {weekday:'long'})
    const utcTime = now.getTime() 

    slackUserNameElement.textContent += " " + 'misterabass'
    currentDayOfTheWeekElement.textContent +=  " " + dayOfWeek
    currentUTCTimeElement.textContent +=  " " + utcTime
    myTrackElement.textContent +=  " " + 'Frontend'

    function updateClock() {
        const now = new Date();
        const seconds = now.getSeconds();
        utcTimeElement.textContent = now.getTime();
        lastUpdatedTimeElement.textContent = now.toISOString();

        
        const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

        
        currentUTCTimeElement.textContent = `UTC Time: ${now.getHours()}:${now.getMinutes()}:${formattedSeconds}`;
    }

    
    updateClock();

    
    setInterval(updateClock, 1000);


}
window.onload = updateData
