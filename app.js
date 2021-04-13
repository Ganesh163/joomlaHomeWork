let isDragging = false;
let isResizing = false;

if(!isDragging){
    window.addEventListener("dblclick",createABox);
    function createABox(e){
        const elem = document.createElement('div');
        document.body.appendChild(elem);
        elem.classList.add('item');
        elem.style.left = e.clientX - 50+ "px";
        elem.style.top = e.clientY - 50 +"px";
        elem.innerHTML += "<div class='resizer ne'></div><div class='resizer nw'></div><div class='resizer sw'></div><div class='resizer se'></div>";
    }
}

document.addEventListener("mousedown", mainDrag);
function mainDrag(e){
    if(e.target.matches(".item")){
        const el = e.target;
        isDragging = true;
        window.addEventListener('mousemove',mousemove);
        window.addEventListener('mouseup',mouseup);
        let previousX = e.clientX;
        let previousY = e.clientY;

        function mousemove(e){
            if(!isResizing){   
                let newX = previousX - e.clientX;
                let newY = previousY - e.clientY;

                const rect = el.getBoundingClientRect();
                el.style.left = rect.left - newX + "px";
                el.style.top = rect.top - newY + "px";

                previousX = e.clientX;
                previousY = e.clientY;
            }
        }
        function mouseup(){
            window.removeEventListener('mousemove', mousemove);
            window.removeEventListener('mouseup',mouseup);
            isDragging = false;
        }
    }
}

document.addEventListener('mousedown',mainResize);
function mainResize(e){
    if(e.target.matches(".resizer")){
        const el = e.target.parentElement;
        const currentResizer = e.target;
        isResizing = true;
        let prevX = e.clientX;
        let prevY = e.clientY; 

        window.addEventListener('mousemove', mousemove);
        window.addEventListener('mouseup',mouseup);

        function mousemove(e){
            const rect = el.getBoundingClientRect();
            if(currentResizer.classList.contains('sw')){
                el.style.width = rect.width - (prevX - e.clientX) + "px";
                el.style.height = rect.height - (prevY - e.clientY)+ "px";
            } else if (currentResizer.classList.contains('se')){
                el.style.width = rect.width + (prevX - e.clientX) + "px";
                el.style.height = rect.height - (prevY - e.clientY) + "px";
                el.style.left = rect.left - (prevX - e.clientX) + "px";
            } else if (currentResizer.classList.contains('ne')){
                el.style.width = rect.width - (prevX - e.clientX) + "px";
                el.style.height = rect.height + (prevY - e.clientY) + "px";
                el.style.top = rect.top - (prevY - e.clientY) + "px";
            } else{
                el.style.width = rect.width + (prevX - e.clientX) + "px";
                el.style.height = rect.height + (prevY - e.clientY) + "px";
                el.style.top = rect.top - (prevY - e.clientY) + "px";
                el.style.left = rect.left - (prevX - e.clientX) + "px";
            }
            prevX = e.clientX;
            prevY = e.clientY;
        }
        function mouseup(){
            window.removeEventListener('mousemove',mousemove);
            window.removeEventListener('mouseup',mouseup);
            isResizing = false;
        }
        
    }
}

document.addEventListener('mousedown',imgResize);
function imgResize(e){
    if(e.target.matches(".resizer")){
        const el = e.target.parentElement;
        const currentResizer = e.target;
        isResizing = true;
        let prevX = e.clientX;
        let prevY = e.clientY; 

        window.addEventListener('mousemove', mousemove);
        window.addEventListener('mouseup',mouseup);

        function mousemove(e){
            const rect = el.getBoundingClientRect();
            if(currentResizer.classList.contains('sw')){
                el.style.width = rect.width - (prevX - e.clientX) + "px";
                el.style.height = rect.height - (prevY - e.clientY)+ "px";
            } else if (currentResizer.classList.contains('se')){
                el.style.width = rect.width + (prevX - e.clientX) + "px";
                el.style.height = rect.height - (prevY - e.clientY) + "px";
                el.style.left = rect.left - (prevX - e.clientX) + "px";
            } else if (currentResizer.classList.contains('ne')){
                el.style.width = rect.width - (prevX - e.clientX) + "px";
                el.style.height = rect.height + (prevY - e.clientY) + "px";
                el.style.top = rect.top - (prevY - e.clientY) + "px";
            } else{
                el.style.width = rect.width + (prevX - e.clientX) + "px";
                el.style.height = rect.height + (prevY - e.clientY) + "px";
                el.style.top = rect.top - (prevY - e.clientY) + "px";
                el.style.left = rect.left - (prevX - e.clientX) + "px";
            }
            prevX = e.clientX;
            prevY = e.clientY;
        }
        function mouseup(){
            window.removeEventListener('mousemove',mousemove);
            window.removeEventListener('mouseup',mouseup);
            isResizing = false;
        }
        
    }
}