<template>
    <div>
        <mdb-card>
            <mdb-card-body class="mdb-color indigo darken-3 text-center">
                <mdb-card-title class="white-text text-center"
                    >Paraguay - {{ getDate }}
                </mdb-card-title>
                <mdb-card-text class="text-left white-text">
                    <p>
                        Casos Totales:
                        {{ getCoronavirusData.confirmed }}
                    </p>
                    <p>Muertes: {{ getCoronavirusData.deaths }}</p>
                    <p>
                        Recuperaciones: {{ getCoronavirusData.recovered }}
                    </p></mdb-card-text
                >
                <router-link to="/paraguay"
                    ><mdb-btn color="primary">ver</mdb-btn></router-link
                >
            </mdb-card-body>
        </mdb-card>
    </div>
</template>
<script>
export default {
    name: "paraguay",
    data() {
        return {
            date: new Date(),
            coronavirusData: ""
        };
    },
    computed: {
        getDate() {
            return (
                this.date.getDate() +
                "/" +
                (this.date.getMonth() + 1) +
                "/" +
                this.date.getFullYear()
            );
        },

        getCoronavirusData() {
            return this.coronavirusData;
        }
    },
    mounted() {
        axios
            .get(
                "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats",
                {
                    params: {
                        country: "Paraguay"
                    },
                    headers: {
                        "x-rapidapi-host":
                            "covid-19-coronavirus-statistics.p.rapidapi.com",
                        "x-rapidapi-key":
                            "7dd9f4a65fmshe8b502726e62457p16c6dcjsn3437e81ec1b5"
                    }
                }
            )
            .then(
                response =>
                    (this.coronavirusData = response.data.data.covid19Stats[0])
            );
    }
};
</script>
