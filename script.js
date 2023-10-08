// INICIO DE DECLARACIÓN DE CONSTANTES
const containerOptions = document.getElementById('visibleOptionsContainer');
const optionsContent = 
    `
    <div class="col-lg-3" id="optionsItems">
        <div class="col-lg-3 opciones">
            <ul>
                <div class="row option-list">
                    <a href="#" class="option-item">Opción 1</a>
                </div>
                <div class="row option-list">
                    <a href="#" class="option-item">Opción 2</a>
                </div>
                <div class="row option-list">
                    <a href="#" class="option-item">Opción 3</a>
                </div>
                <div class="row option-list">
                    <a href="#" class="option-item">Opción 4</a>
                </div>
            </ul>
        </div>
    </div>`;

const showOptionsElements = document.createElement('div');
const showOptionsOnBtn = document.getElementById('btnDesplegarOpciones');
// FIN DE DECLARACIÓN DE CONSTANTES

// INICIO DE FUNCIONES
function putOptionContent(){
    containerOptions.innerHTML = optionsContent;
}
putOptionContent();

function putOptionContentOnbtn(){
    showOptionsOnBtn.appendChild(showOptionsElements);
    showOptionsElements.classList.add("card", "card-body"); // Agregar clases al elemento showOptionsElements
    showOptionsElements.setAttribute("id", "btnDivId");
}
putOptionContentOnbtn();

document.getElementById('optionsLink').addEventListener('click', function() {
    const optionsCollapse = document.getElementById('optionsItems');
    const isCollapsed = optionsCollapse.classList.contains('show');
    if (isCollapsed) {
        optionsCollapse.classList.remove('show');
    } else {
        optionsCollapse.classList.add('show');
    }
});

// FIN DE FUNCIONES
