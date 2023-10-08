// INICIO DE DECLARACIÓN DE CONSTANTES
const containerOptions = document.getElementById('visibleOptionsContainer');
const optionsContent =
    `
    <div class="col-lg-3">
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

const divContainerForCollapse =
    `
    <div class="collapse" id="collapseExample">
        <div class="card card-body" id="cardContainer">
        ${optionsContent}
        </div>
    </div>`;


const divOptions = document.getElementById('divOptionsId');
const cardContainer = document.getElementById('cardContainer');
// FIN DE DECLARACIÓN DE CONSTANTES




// INICIO DE FUNCIONES
function putOptionContent() {
    containerOptions.innerHTML = optionsContent;
}
putOptionContent();

function putCardContainerContent(){
    divOptions.insertAdjacentHTML('beforeend', divContainerForCollapse);
    
}
putCardContainerContent();
// FIN DE FUNCIONES
