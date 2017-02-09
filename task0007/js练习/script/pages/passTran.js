/**
 * Created by kate on 2017/2/9.
 */
button=document.querySelector('button');
button.onclick=function () {
    let str=document.querySelector('input').value,
        array=str.split(','),
        newstr='';
    for(let i = 0; i<array.length-1;i++){
        for(var j=i+1;j<array.length;j++){
            if(array[j].indexOf(array[i]) > -1){
                array.splice(j,1);
            }
        }
        console.log(array[i]);
        newstr=newstr+array[i]+',';
    }
    newstr=newstr+array[array.length-1];
    console.log(array);
    alert(newstr);

}

