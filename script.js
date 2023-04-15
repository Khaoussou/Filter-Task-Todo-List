
// Déssé nama lou ndaw after ngéne noce ko Béguéééééééééééééééééééééééééééééééééééééééééé !!!
// Cette fonction ci-dessous (loadTask) est la seule qui doit etre appelée avec toutes ses paramètres !!!
function loadTask(tasks, bodyTask, journeyTask, importantTask, planificationTask, allTask, tasksFilter, titlePlaning, idJourney, idImportant, idPlaning, idTache, blockJourney, blockImportant, blockPlaning, blockTask) {
    tasksFilter.forEach(task => {
        task.addEventListener('click', () => {
            if (task.id == idJourney) {
                bodyTask.innerHTML = ''
                titlePlaning.innerHTML = blockJourney.innerHTML
                checkMyJourneyTask(tasks, journeyTask, bodyTask)
            }
            if (task.id == idImportant) {
                bodyTask.innerHTML = ''
                titlePlaning.innerHTML = blockImportant.innerHTML
                checkImportantTask(tasks, importantTask, bodyTask)
            }
            if (task.id == idPlaning) {
                bodyTask.innerHTML = ''
                titlePlaning.innerHTML = blockPlaning.innerHTML
                checkPlaningTask(tasks, planificationTask, bodyTask)
            }
            if (task.id == idTache) {
                bodyTask.innerHTML = ''
                titlePlaning.innerHTML = blockTask.innerHTML
                checkTask(tasks, allTask, bodyTask)
            }
        })
    });
}

function checkMyJourneyTask(tasks, journeyTask, bodyTask) {
    journeyTask = []
    let Tasks = tasks.filter(task => task.date == new Date().toLocaleDateString())
    Tasks.forEach(task => {
        addTask(journeyTask, task)
        displayTask(bodyTask, journeyTask)
    })
    console.log(journeyTask);
}

function checkImportantTask(tasks, importantTask, bodyTask) {
    importantTask = []
    let Tasks = tasks.filter(task => task.important == true)
    Tasks.forEach(task => {
        addTask(importantTask, task)
        displayTask(bodyTask, importantTask)
    })
    console.log(importantTask);
}

function checkPlaningTask(tasks, planificationTask, bodyTask) {
    planificationTask = []
    let Tasks = tasks.filter(task => task.date != '')
    Tasks.forEach(task => {
        addTask(planificationTask, task)
        displayTask(bodyTask, planificationTask)
    })
    console.log(planificationTask);
}

function checkTask(tasks, allTask, bodyTask) {
    allTask = []
    let Tasks = tasks.filter(task => task)
    Tasks.forEach(task => {
        addTask(allTask, task)
        displayTask(bodyTask, allTask)
    })
    console.log(allTask);
}

function addTask(tasks, task) {
    tasks.push(task)
}

function displayTask(tasks, task) {
    tasks.innerHTML = task
}
