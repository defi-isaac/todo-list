export function generateLayout() {
    
    const container = document.querySelector('body');

    const addProject = document.createElement('div');
    const addTask = document.createElement('div');
    const projName = document.createElement('div');
    const projDisplay = document.createElement('div');
    const divider = document.createElement('div');
    const addProjBtn = document.createElement('div');
    const plusSymbol = document.createElement('p');

    addTask.classList.add('addTask');
    addProject.classList.add('addProject');
    divider.className = 'divider';

    projName.textContent = 'Example Project';
    plusSymbol.textContent = '+'
    addProjBtn.textContent = 'Add Project';

    container.append(addProject, addTask)
    addProjBtn.append(plusSymbol)
    addProject.append(projName, divider, projDisplay, addProjBtn);
}