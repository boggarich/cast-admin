<script lang="ts">

    import commonObj from '@/assets/js/common'; 

    export default {

        data () {

            return {
                username: '',
                password: '',
            }

        },

        methods: {

            login () {

                commonObj.login(this)
                .then((result) => {

                    if(result.data.token) {

                        this.$store.commit({

                            type: 'setDashboardData',
                            data: result

                        });

                        localStorage.setItem('adminBearerToken', result.data.token);

                        this.$router.push('/app/dashboard');

                    }

                    

                });

            }

        }

    }

</script>

<template>
    <div class="login-wrapper">
        <header class="justify-content-start bg-white">
            <div class="d-flex align-items-center">
                <div class="sidebar-header ml-4 d-flex justify-content-center align-items-center p-5">
                    <img src="/assets/img/cast-logo.svg" alt="cast logo" />
                </div>
            </div>
        </header>

        <div class="d-flex align-items-center justify-content-center">
            <div class="card align-items-center br-30">
                <h4 class="header-md xx-bold mb-5">Login</h4>
                <form class="w-100">
                    <div class="form-group mb-4">
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Please enter your username" v-model="username">
                    </div>
                    <div class="form-group mb-4">
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Please enter your password" v-model="password">
                    </div>
                    <div class="d-flex justify-content-between mb-5">
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input checkbox-lg" id="exampleCheck1">
                            <label class="form-check-label" for="exampleCheck1">Remember me</label>
                        </div>
                        <label class="form-check-label" for="exampleCheck1"><a href="#">Forgot Password?</a></label>
                    </div>
                    
                    <button type="submit" class="btn btn-custom-violet w-100" @click.stop.prevent="login" >Login</button>

                </form>
            </div>
        </div>

    </div>

</template>

<style scoped lang="scss">

    header {
        background-color: transparent !important;
    }


    .login-wrapper {
        background-image: url("/assets/img/loginBg.svg");
        background-size: 1049px;
        min-height: 100vh;
        background-repeat: no-repeat;
        background-position: right bottom;
        background-attachment: fixed;
    }

    label {
        color: #440B7D;
        font-weight: 600;

        a {
            font-weight: 600;
        }
    }

    .card {
        width: 550px;
        padding-left: 46px;
        padding-right: 40px;
        padding-top: 54px;
        padding-bottom: 64px;
    }

    @media screen and (max-width: 480px) {
        .login-wrapper {
            header {
                justify-content: center !important;

                .sidebar-header {
                    margin-left: 0px !important;
                }

                + div {
                    margin-left: 12px;
                    margin-right: 12px;
                }
            }
        }
    }

</style>
