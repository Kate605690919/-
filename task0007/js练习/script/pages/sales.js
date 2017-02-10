//获取给定月份的天数
function getDaysNum(y,m){
    let d = new Date(y,m,0);
    console.log(d.toLocaleString());
    return d.getDate();
}
function  tranWeek() {

}
//获取给定日期倒计时
function getSpecialDay(w,y,m,h){
    let DaysNum = getDaysNum(y,m),
        arr = [];
    for (let i=1;i<DaysNum+1;i++){
        let d=new Date(y,m-1,i,h);
        console.log(d.getDay());
        if(d.getDay() == w){
            let date = d.getFullYear()+'/'+(d.getMonth()+1)+'/'+d.getDate(),
                now = new Date(),
                daysBefore = (d-now)/(24*60*60*1000),
                obj = {
                    date: date,
                    daysBefore: daysBefore<0 ? '活动已结束':Math.round(daysBefore)
                };
            arr.push('\n{\ndate: '+obj.date+'\n,daysBefore: '+ obj.daysBefore+'\n}');
        }
    }
    return arr;
}
let button=document.querySelector('button');
button.onclick=function () {
    let y=document.querySelector('#y').value,
        m=document.querySelector('#m').value,
        w=document.querySelector('#w').value,
        h=document.querySelector('#h').value;
    let arr = getSpecialDay(w,y,m,h),
        result = document.querySelector('p.result');
    result.innerHTML='['+arr+']';
}