const inquirer = require('inquirer')
const runCmd = require('./src/runCmd');

inquirer.prompt([
    {
        "type": 'input',
        "name": 'name',
        "message": 'Enter the name of the project'
    },
    {
        "type": 'list',
        "name": 'type',
        "message": 'Choose a type for your project',
        "choices": ['Next.js', 'React+Vite','ASP.Net Core']

    }
]).then(project =>{
    console.log(`Génération du projet ${project.type}`);
    if (project.type === 'Next.js'){
        runCmd('yarn.cmd', ['create', 'next-app', project.name, '--typescript']);
    } else if (project.type === 'React+Vite'){
        runCmd('yarn.cmd', ['create','@vitejs/app', project.name, '--template', 'react-ts'])
    } else if (project.type === 'ASP.Net Core'){
        runCmd('dotnet', ['new', 'webapp', '-o', project.name])
    }
});