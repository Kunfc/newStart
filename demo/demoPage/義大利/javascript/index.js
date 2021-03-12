

//動態控制NAV裏的line-height
//window.addEventListener("resize",headerHeight)
//function headerHeight(){
//    var ul = document.querySelector(".mainMenu ul")
//    var logoImg = document.querySelector(".mainLogo img")
//    var lineHeight = logoImg.offsetHeight
//    ul.style.lineHeight = lineHeight + "px"
//    console.log(ul)
//}

window.onload=function(){

    var data = {
        'rome':[
            {
                link: "images/information/rome.jpg",
                title: "羅馬競技場",
                data: "04/10/2017",
            },
            {
                link: "images/information/rome1.jpg",
                title: "君士坦丁凱旋門",
                data: "02/10/2017",
            },
            {
                link: "images/information/rome2.jpeg",
                title: "真理之口",
                data: "05/10/2018",
            },
            {
                link: "images/information/rome3.jpg",
                title: "特雷維噴泉",
                data: "02/10/2017",
    
            },
            {
                link: "images/information/rome4.jpg",
                title: "西班牙廣場",
                data: "01/10/2018",
            },
            {
                link: "images/information/rome5.jpg",
                title: "聖天使橋",
                data: "03/10/2018",
            },
            {
                link: "images/information/rome6.jpg",
                title: "聖彼得大教堂",
                data: "08/10/2019",
            },
            {
                link: "images/information/rome7.jpg",
                title: "梵蒂岡博物館",
                data: "08/10/2018",
            },
        ],
        'capri':[
            {
                link: "images/information/capri0.jpg",
                title: "Pizzolungo",
                data: "08/10/2018",
            },
            {
                link: "images/information/capri1.jpg",
                title: "博物館",
                data: "08/10/2018",
            },
            {
                link: "images/information/capri2.jpg",
                title: "藍洞",
                data: "08/10/2018",
            },
            {
                link: "images/information/capri3.jpg",
                title: "海灘",
                data: "08/10/2018",
            },
            {
                link: "images/information/capri4.jpg",
                title: "精品名人街",
                data: "08/10/2018",
            },
            {
                link: "images/information/capri5.jpg",
                title: "夜生活",
                data: "08/10/2018",
            },
            {
                link: "images/information/capri6.jpg",
                title: "美食",
                data: "08/10/2018",
            },
            {
                link: "images/information/capri7.jpg",
                title: "卡普里哲學公園",
                data: "08/10/2018",
            },
            
        ],
        'milan':[
            {
                link: "images/information/milan0.jpg",
                title: "米蘭大教堂",
                data: "07/02/2016",
            },
            {
                link: "images/information/milan1.jpg",
                title: "布雷拉圖書館",
                data: "07/02/2016",
            },
            {
                link: "images/information/milan2.jpg",
                title: "艾曼紐二世迴廊",
                data: "07/02/2016",
            },
            {
                link: "images/information/milan3.jpg",
                title: "斯福爾扎古堡",
                data: "07/02/2016",
            },
            {
                link: "images/information/milan4.jpg",
                title: "斯卡拉大劇院",
                data: "07/02/2016",
            },
            {
                link: "images/information/milan5.jpg",
                title: "齊亞拉瓦萊修道院",
                data: "07/02/2016",
            },
            {
                link: "images/information/milan6.jpg",
                title: "國立蒙札賽車場",
                data: "07/02/2016",
            },
            {
                link: "images/information/milan7.jpg",
                title: "Rinascente",
                data: "07/02/2016",
            },
        ],
        'amalfi':[
            {
                link: "images/information/amalfi0.jpg",
                title: "阿瑪菲海岸",
                data: "04/10/2018",
            },
            {
                link: "images/information/amalfi1.jpg",
                title: "阿瑪菲主教座堂",
                data: "12/10/2017",
            },
            {
                link: "images/information/amalfi2.jpg",
                title: "紙博物館",
                data: "05/10/2013",
            },
            {
                link: "images/information/amalfi3.jpg",
                title: "美食",
                data: "02/10/2017",
    
            },
            {
                link: "images/information/amalfi4.jpg",
                title: "祖母綠洞",
                data: "01/15/2018",
            },
            {
                link: "images/information/amalfi5.jpg",
                title: "蘇連多碼頭",
                data: "03/10/2018",
            },
            {
                link: "images/information/amalfi6.jpg",
                title: "龐貝考古公園",
                data: "08/10/2019",
            },
            {
                link: "images/information/amalfi7.jpg",
                title: "赫庫蘭尼姆古城",
                data: "08/10/2018",
            },
        ],
        'venezia':[
            {
                link: "images/information/venezia0.jpg",
                title: "嘆息橋",
                data: "04/10/2017",
            },
            {
                link: "images/information/venezia1.jpg",
                title: "鳯尾船",
                data: "02/10/2017",
            },
            {
                link: "images/information/venezia2.jpg",
                title: "道奇宮",
                data: "05/10/2018",
            },
            {
                link: "images/information/venezia3.jpg",
                title: "彩色島",
                data: "02/10/2017",
    
            },
            {
                link: "images/information/venezia4.jpg",
                title: "彩色島",
                data: "01/10/2018",
            },
            {
                link: "images/information/venezia5.jpg",
                title: "威尼斯",
                data: "03/10/2018",
            },
            {
                link: "images/information/venezia6.jpg",
                title: "彩色島",
                data: "08/10/2019",
            },
            {
                link: "images/information/venezia7.jpg",
                title: "聖馬可廣場",
                data: "08/10/2018",
            },
        ],
    }
    var liShow = document.querySelectorAll(".travel .item li")
    var itemGroup = document.querySelector(".travel .itemGroup")
    var html = ''
    
    for(var i = 0; i < liShow.length; i++){
    
        liShow[i].addEventListener("click",itemShow)
    }
    
    // function itemShow(){
    //     var idx = this.id
    //     console.log(idx)
    //     html = ''
    //     itemGroup.innerHTML = ''
    //     data[idx].forEach(function(obj){
    //         html += '<div class="list">'
    //         html += '<img src=' + obj.link + ' alt="">'
    //         html += "<h3>" + obj.title + "</h3>"
    //         html += "<p>" + obj.data + "</p>"
    //         html += '</div>'
    //     })
    //     itemGroup.innerHTML = html
    // }
    
    function itemShow(){
        var idx = this.id
        html = ''
        itemGroup.innerHTML = ''
        show(idx)
    }
    
    function show(idx){
        data[idx].forEach(function(obj){
            html += '<div class="list">'
            html += '<div class="pic">'
            html += '<img src=' + obj.link + ' alt="">'
            html += '</div>'
            html += '<div class="txt">'
            html += "<h3>" + obj.title + "</h3>"
            html += "<p>" + obj.data + "</p>"
            html += '</div>'
            html += '</div>'
        })
        itemGroup.innerHTML = html
    }
    
    function aa(){
        show("rome")
    }
    aa()
}







