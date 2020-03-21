<template>
    <div>
        <div class="mdb-container">
            <mdb-card>
                <mdb-card-body class="mdb-color indigo darken-3 text-center">
                    <mdb-card-title class="white-text text-center"
                        >Bienvenido!</mdb-card-title
                    >
                    <mdb-card-text class="text-center white-text"
                        >Aqui podras tener las ultimas actualizaciones sobre la
                        situacion actual del coronavirus en
                        Paraguay.</mdb-card-text
                    >
                    <router-link to="/paraguay"
                        ><mdb-btn color="primary">ver</mdb-btn></router-link
                    >
                </mdb-card-body>
            </mdb-card>
        </div>
    </div>
</template>
<script>
export default {
    name: "paraguay",
    data() {
        return {
            response: 0
        };
    }
};
</script>
