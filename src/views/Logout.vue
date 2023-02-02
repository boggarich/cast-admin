<script lang="ts">
    
    export default {

        methods: {

            logout() {

                localStorage.removeItem('adminBearerToken');

                this.$router.replace('/');

            }

        }

    }

</script>

<template>
    <div class="main-content">
        
        <div class="card br-20">

            <div class="content-wrapper pt-35 pb-35">
                <h4 class="header-md pt-2 position-relative mb-3 mt-9px ml-3">Logout</h4>

                <div class="d-flex justify-content-between w-100">
                    <button class="btn btn-custom-violet dropdown-toggle dropdown-lg w-100 justify-content-center" type="button" data-toggle="dropdown" aria-expanded="false">
                        Logout
                        <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0L5 5L10 0H0Z" fill="#323232"/>
                        </svg>

                    </button>
                    <div class="dropdown-menu w-100 text-center">
                        <a class="dropdown-item" href="#" @click="logout">Logout</a>
                        <a class="dropdown-item" href="#">Cancel</a>
                    </div>
                </div>

            </div>

        </div>

    </div>
</template>

<style>


</style>

