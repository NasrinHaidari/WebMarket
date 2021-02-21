<template>

    <div>
        
        <!------ Include the above in your HEAD tag ---------->

        <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top" id="banner">
            <div class="container-fluid">
                <!-- Brand -->
                <nuxt-link class="navbar-brand" to="#"><span>Logo</span> Here</nuxt-link>

                <!-- Toggler/collapsibe Button -->
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <!-- Navbar links -->
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <!-- Search input -->
                    <ul class="navbar-nav ml-auto col-md-6">
                        <li class="nav-item col-md-12">
                            <span class="oi" data-glyph="magnifying-glass"></span>
                            <input type="text" placeholder="Search..." class="custom-search-box">
                        </li>
                    </ul>

                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Order</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Cart</a>
                        </li>  
                        <li class="nav-item">
                            <nuxt-link v-if="$auth.$state.loggedIn" class="nav-link" to="/profile">{{ $auth.$state.user.name }}</nuxt-link>
                            <nuxt-link v-else class="nav-link" to="/login">Login</nuxt-link>
                        </li> 
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
        
}
</script>

<style lang="scss" scoped>

</style>