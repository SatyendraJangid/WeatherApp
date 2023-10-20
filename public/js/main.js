const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const real_temp = document.getElementById('real_temp');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.data_hide');



const getInfo = async(event) => {
    event.preventDefault();
    let cityVal = cityName.value;

    if (cityVal === "") {
        city_name.innerText = `Please Enter City Name Before Search`;
        datahide.classList.add('data_hide');

    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=7a79f64f158616b4c27cd39853140065`
            const response = await fetch(url);
            const data = await response.json();
            const arrData = await [data];
            city_name.innerText = `${ arrData[0].name }, ${ arrData[0].sys.country }`;
            real_temp.innerText = arrData[0].main.temp;
            const tempMood = arrData[0].weather[0].main;
            if (tempMood === "Clear") {
                temp_status.innerHTML = "<i class='fas fa-sun fa-spin' style='color: #eccc68;'></i>";
            } else if (tempMood === "Clouds") {

                temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";

            } else if (tempMood === "Rain") {

                temp_status.innerHTML =

                    "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>"

            } else {

                temp_status.innerHTML =

                    "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
            }
            datahide.classList.remove('data_hide');

        } catch {
            city_name.innerText = `Please Enter Valid City Name`;
            datahide.classList.add('data_hide');
        }
    }
};

submitBtn.addEventListener('click', getInfo);