const myCanvas = document.querySelector('.container');
let gridSize = 128;
let currentCanvasLine = 1;

//MAKE CANVAS
function creatNewCanvas(){

    //CREATE NEW CANVAS LINE ...
    for(let i = 1; i<=gridSize; i++){
        const singleCanvasLine = document.createElement('div');
        singleCanvasLine.classList.add('canvasLine');
        myCanvas.appendChild(singleCanvasLine);

        //... AND FILL IT WITH PIXELS
        for(let x = 1; x<=gridSize; x++){
            const singlePixel = document.createElement('div');
            singlePixel.classList.add('pixel','p0');
            singleCanvasLine.appendChild(singlePixel);
        }
    }
}

creatNewCanvas();

const canvasPixels = document.querySelectorAll('.pixel');

canvasPixels.forEach(pixel => pixel.addEventListener('mouseover', addColor));


function addColor(){
    //GET Px CLASS/NUMBER THAT DEFINES PIXEL COLOR
    let pixelClassIndex = this.classList[1];
    let indexNum = Number(pixelClassIndex.charAt(1));
    let nextIndexNum;
    
    //IF NOT MAXED OUT, REMOVE COLOR OPACITY USING CSS CLASSES P1,P2,P3,...P9
    if(indexNum < 9){
        nextIndexNum = indexNum +1;
        this.classList.remove(pixelClassIndex);
        let nextClass = 'p' + nextIndexNum;
        this.classList.add(nextClass);
    }
}