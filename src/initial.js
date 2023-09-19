import Delete from './img/delete.png'
export function generateLayout() {
    
    const container = document.querySelector('body');

    const projCol = document.createElement('div');
    const taskCol = document.createElement('div');
    const proj = document.createElement('div');
    const projDisplay = document.createElement('div');
    const projName = document.createElement('div');
    const remProj = document.createElement('img');
    const divider = document.createElement('div');
    const addProjBtn = document.createElement('div');
    const plusSymbol = document.createElement('p');

    taskCol.classList.add('taskCol');
    projCol.classList.add('projCol');
    divider.className = 'divider';

    proj.textContent = 'Projects';
    plusSymbol.textContent = '+'
    addProjBtn.textContent = 'Add Project';

    projName.textContent = 'Example Project';
    remProj.src = Delete;

    container.append(projCol, taskCol);
    addProjBtn.append(plusSymbol);
    projDisplay.append(projName, remProj);
    projCol.append(proj, divider, projDisplay, addProjBtn);
}