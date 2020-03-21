<template>
    <div>
        <mdb-navbar color="indigo" dark>
            <mdb-navbar-brand href="https://mdbootstrap.com/">
                Navbar
            </mdb-navbar-brand>
            <mdb-navbar-toggler>
                <mdb-navbar-nav>
                    <mdb-nav-item active
                        ><router-link to="/"
                            >Paraguay</router-link
                        ></mdb-nav-item
                    >
                    <mdb-nav-item
                        ><router-link to="/sobre"
                            >Sobre Nosotros</router-link
                        ></mdb-nav-item
                    >
                    <mdb-dropdown tag="li" class="nav-item">
                        <mdb-dropdown-toggle
                            tag="a"
                            navLink
                            color="indigo"
                            slot="toggle"
                            waves-fixed
                            >Dropdown</mdb-dropdown-toggle
                        >
                        <mdb-dropdown-menu>
                            <mdb-dropdown-item>Action</mdb-dropdown-item>
                            <mdb-dropdown-item
                                >Another action</mdb-dropdown-item
                            >
                            <mdb-dropdown-item
                                >Something else here</mdb-dropdown-item
                            >
                        </mdb-dropdown-menu>
                    </mdb-dropdown>
                </mdb-navbar-nav>
                <form>
                    <mdb-input
                        type="text"
                        class="text-white"
                        placeholder="Search"
                        aria-label="Search"
                        label
                        navInput
                        waves
                        waves-fixed
                    />
                </form>
            </mdb-navbar-toggler>
        </mdb-navbar>
        <div class="container mt-5">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    name: "app"
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");

html,
body {
    font-family: "Montserrat", sans-serif !important;
}
</style>
