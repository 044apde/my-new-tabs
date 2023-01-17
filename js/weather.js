const API_KEY = "hsHXEt7SxrFR4J8CwIHxUMt9M1FToux%2B%2FWLmxV8wm%2Fk%2Fqxe9oXpAVc87qA%2FTvXpDyzy7jzZfljgjnVfS36HmRA%3D%3D";
const rei = "11B20203";

function onGeoOk() {
    fetch(`https://apis.data.go.kr/1360000/VilageFcstMsgService/getLandFcst?serviceKey=${API_KEY}&pageNo=1&numOfRows=10&dataType=JSON&regId=${rei}`)
        .then((response) => response.json())
        .then((data) => {
            const temp = document.querySelector(".weather span:nth-child(2)");
            const weather = document.querySelector(".weather span:nth-child(3)");
            const rain = document.querySelector(".weather span:nth-child(4)");
            
            var ta = (data.response.body.items.item[0].ta == false ? 0 :data.response.body.items.item[0].ta);
            var wf = data.response.body.items.item[0].wf;
            var rnYn = data.response.body.items.item[0].rnYn;

            switch(rnYn){
                case '0':
                    rnYn = "강수 없음";
                    break
                case '1':
                    rnYn = "비";
                    break;
                case '2':
                    rnYn = "비/눈";
                    break 
                case '3':
                    rnYn = "눈";
                    break 
                case '4':
                    rnYn = "소나기";
                    break
                default:
                    rnYn = "강수 없음";
            }

            temp.innerText =  ta + "°C";
            weather.innerText = wf;
            rain.innerText = rnYn;

        });
}


onGeoOk();

