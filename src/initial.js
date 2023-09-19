
export function generateLayout() {
    
    const container = document.querySelector('body');

    const addProject = document.createElement('div');
    const addTask = document.createElement('div');
    const projName = document.createElement('div');
    const projDisplay = document.createElement('div');
    const addProjBtn = document.createElement('div');
    const divider = document.createElement('div');


    projName.textContent = 'Example Project';
    addTask.classList.add('addTask');
    addProject.classList.add('addProject');
    divider.className = 'divider';

    container.append(addProject, addTask)
    addProject.append(projName, divider, projDisplay, addProjBtn);
}