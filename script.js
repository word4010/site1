const form = document.querySelector("#locationForm");

const locationBtn = document.querySelector("#locationBtn");

const submitBtn = document.querySelector("#submitBtn");

const latitudeInput = document.querySelector("#latitude");

const longitudeInput = document.querySelector("#longitude");

const status = document.querySelector("#status");


locationBtn.addEventListener("click", () => {

    if (!navigator.geolocation) {

        status.textContent =
            "❌ Ваш браузер не підтримує cockie";

        return;
    }


    locationBtn.disabled = true;

    locationBtn.textContent =
        "📍 Отримую...";


    status.textContent =
        "Будь ласка, дозвольте доступ до cockie";


    navigator.geolocation.getCurrentPosition(

        (position) => {

            const latitude =
                position.coords.latitude;

            const longitude =
                position.coords.longitude;


            latitudeInput.value =
                latitude;

            longitudeInput.value =
                longitude;


            status.textContent =
                "✅ Cockie успішно отримано!";


            locationBtn.textContent =
                "📍 Cockoe готове";


            submitBtn.disabled = false;

        },


        (error) => {

            locationBtn.disabled = false;

            locationBtn.textContent =
                "📍 Location";


            switch (error.code) {

                case 1:

                    status.textContent =
                        "❌ Ви заборонили доступ до cockie";

                    break;


                case 2:

                    status.textContent =
                        "❌ Cockie недоступне";
                    break;


                case 3:

                    status.textContent =
                        "❌ Час очікування вичерпано";

                    break;


                default:

                    status.textContent =
                        "❌ Сталася помилка";

            }

        },

        {
            enableHighAccuracy: true,

            timeout: 10000,

            maximumAge: 0
        }

    );

});


form.addEventListener("submit", (event) => {

    if (
        !latitudeInput.value ||
        !longitudeInput.value
    ) {

        event.preventDefault();

        status.textContent =
            "❌ Спочатку отримайте Location";
    }

});