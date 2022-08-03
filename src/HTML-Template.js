function createTemplate(teamArr) {
    const createManagerCard = (manager) => {
        return `<div class="card ba-card" style="width: 18rem;">
        <div class="card-body ba-card-body">
            <h5 class="card-title">${manager.getName()}</h5>
            <p class="card-text"> ☕ Manager</p>
        </div>
        <div class="ba">
            <ul class="list-group list-group-flush contact-info">
                <li class="list-group-item">ID:${manager.getId()}</li>
                <li class="list-group-item">Email:<a href="#" class="card-link"> ${manager.getEmail()}</a></li>
                <li class="list-group-item">Office number:${manager.getOfficeNumber()}</li>
              </ul>
        </div>
    </div>`

    }


    const createEngineerCard = (engineer) => {
        return `<div class="card ba-card" style="width: 18rem;">
        <div class="card-body ba-card-body">
            <h5 class="card-title">${engineer.getName()}</h5>
            <p class="card-text">&#x1f97d; Engineer</p>
        </div>
        <div class="ba">
            <ul class="list-group list-group-flush contact-info">
                <li class="list-group-item">ID:${engineer.getId()}</li>
                <li class="list-group-item">Email:<a href="#" class="card-link"> ${engineer.getEmail()} </a></li>
                <li class="list-group-item">GitHub:<a href="#" class="card-link">${engineer.getGithub()}</a></li>
              </ul>
        </div>
    </div>`
    }

    const createInternCard = (intern) => {
        return `<div class="card ba-card" style="width: 18rem;">
        <div class="card-body ba-card-body">
            <h5 class="card-title">${intern.getName()}</h5>
            <p class="card-text"> 👩‍🎓 Intern</p>
        </div>
        <div class="ba">
            <ul class="list-group list-group-flush contact-info">
                <li class="list-group-item">ID:${intern.getId()}</li>
                <li class="list-group-item">Email:<a href="#" class="card-link">${intern.getEmail()}</a></li>
                <li class="list-group-item">School:${intern.getSchool()}</li>
              </ul>
        </div>
    </div> `
    }
}

module.exports = teamArr => {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./reset.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="./style.css">
        <title>Welcome to our Team Profile</title>
    </head>
    <body>
        <header> My Team </header>
        <section id="employee-section">
            ${createTemplate(teamArr)}
        </section>
    </body>
    
    
    
    </html>`

}
