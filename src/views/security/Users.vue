<script lang="ts">

    import $ from "jquery";
    import DataTable from 'datatables.net-vue3';
    import DataTablesLib from 'datatables.net-bs5';
    import 'datatables.net-responsive'

    DataTable.use(DataTablesLib)

    export default {
        mounted() {

            $('#groupRolesDataTable').dataTable({
                searching: false,
                lengthChange: false,
                info: false,
                stateSave: true,
                dom: "<t<'row justify-content-center'p>>",
                responsive: true
            });

        }
    }

</script>

<template>
    <div class="main-content">

        <section class="section-1">
            
            <div class="card br-50">

                <div class="">

                    <div class="content-wrapper wrap d-flex pt-35 pb-35 align-items-center">
                        <h4 class="header-md mb-0 mr-4 pl-12">Search</h4>
                        <input type="email" class="form-control mr-4 flex-grow-1" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email">
                        <input type="email" class="form-control mr-4 flex-grow-1" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name">
                        <button class="btn btn-custom-violet-2 br-10 large" id="search">Search</button>
                    </div>

                    <div class="content-wrapper d-flex pb-35 align-items-center pr-3 ">
                        <h4 class="header-md mb-0 mr-4 opacity-0 pl-3">Search</h4>
                        <div class="d-flex justify-content-between w-100">
                            <button class="btn btn-custom-violet dropdown-toggle dropdown-lg ml-auto px-lg" type="button" data-toggle="dropdown" aria-expanded="false">
                                Add Group
                                <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0L5 5L10 0H0Z" fill="#323232"/>
                                </svg>

                            </button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">Edit</a>
                                <a class="dropdown-item" href="#">Delete</a>
                                <a class="dropdown-item" href="#">Archive</a>
                            </div>
                        </div>
                    </div>

                    <div class="cardd-header d-flex justify-content-between bordered-bottom padding-x-lg padding-right-lg pt-1">
                        <h4 class="header-md pt-2 position-relative mb-0 mt-9px">Users</h4>
                        <div class="header-btn-group">
                            <button>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_590_4503)">
                                    <path d="M9.4 16.6L4.8 12L9.4 7.4L8 6L2 12L8 18L9.4 16.6ZM14.6 16.6L19.2 12L14.6 7.4L16 6L22 12L16 18L14.6 16.6Z" fill="#341454"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_590_4503">
                                    <rect width="24" height="24" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </button>
                            <button>

                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_590_4504)">
                                    <path d="M21 11V3H13L16.29 6.29L6.29 16.29L3 13V21H11L7.71 17.71L17.71 7.71L21 11Z" fill="#341454"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_590_4504">
                                    <rect width="24" height="24" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>

                            </button>
                            <button>

                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_590_4505)">
                                    <path d="M19 13H5V11H19V13Z" fill="#341454"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_590_4505">
                                    <rect width="24" height="24" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>

                            </button>
                            <button>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.19163 14.0526C5.57383 14.0945 6.49321 13.9605 6.65149 13.8732C6.55759 12.2985 6.83773 11.1602 7.57519 10.0336C9.00091 7.85564 11.6845 6.78662 14.271 7.58234C14.9004 7.77602 15.4505 8.05484 15.9076 8.3741C16.767 8.97434 16.5909 8.9432 17.1296 9.51866L14.7531 9.53492L14.7551 11.0314L19.2075 11.0262L19.2099 6.6038C18.9336 6.52982 17.9999 6.53042 17.721 6.60278L17.7218 7.9004C17.582 7.82756 17.6103 7.85426 17.4852 7.73786C14.1456 4.63172 8.65987 5.4023 6.18787 9.41858C5.59507 10.3816 4.81057 12.6806 5.19169 14.0526L5.19163 14.0526Z" fill="#341454"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.35859 18.5901C7.68145 18.7452 8.75791 20.0979 11.2061 20.5377C12.8762 20.8379 14.7034 20.5266 15.9953 19.8174C17.8427 18.8031 19.2538 17.096 19.7434 15.0254C19.8875 14.4162 20.0772 13.0493 19.888 12.4479C19.7239 12.4341 18.6503 12.5086 18.4325 12.6287C18.5112 14.1639 18.1817 15.4552 17.4847 16.5092C16.9391 17.3342 15.9787 18.2454 14.87 18.6895C12.8794 19.4867 10.9092 19.2893 9.14575 18.0955C8.30575 17.5268 8.16985 17.1441 7.95523 16.9595L10.3256 16.9313L10.3252 15.4625L5.86429 15.4591L5.87347 19.9206L7.35697 19.8876L7.35871 18.5901H7.35859Z" fill="#341454"/>
                                </svg>

                            </button>
                            <button>

                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_590_4510)">
                                    <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#341454"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_590_4510">
                                    <rect width="24" height="24" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>

                            </button>
                        </div>
                    </div>

                    <div class="card-body pt-2 mb-5 px-0">
                        
                            <table class="dataTable display table table-hover first-td-border-0 padding-right-lg th-sm table-striped" id="groupRolesDataTable" width="100%">
                                <thead>
                                    <tr>
                                        <th>Username</th>
                                        <th>Email Address</th>
                                        <th>Name</th>
                                        <th>Staff Status</th>
                                        <th>Active</th>
                                        <th>Created</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <td>Kojo_mills</td>
                                        <td>kojomills@gmail.com</td>
                                        <td>Kojo Mills</td>
                                        <td>No</td>
                                        <td>Yes</td>
                                        <td>18/08/2022</td>
                                        <td>
                                            <div class="dropdown">
                                                <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                                                    Actions
                                                    <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0 0L5 5L10 0H0Z" fill="#323232"/>
                                                    </svg>

                                                </button>
                                                <div class="dropdown-menu">
                                                    <a class="dropdown-item" href="#">Edit</a>
                                                    <a class="dropdown-item" href="#">Delete</a>
                                                    <a class="dropdown-item" href="#">Archive</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Kojo_mills</td>
                                        <td>kojomills@gmail.com</td>
                                        <td>Kojo Mills</td>
                                        <td>No</td>
                                        <td>Yes</td>
                                        <td>18/08/2022</td>
                                        <td>
                                            <div class="dropdown">
                                                <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                                                    Actions
                                                    <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0 0L5 5L10 0H0Z" fill="#323232"/>
                                                    </svg>

                                                </button>
                                                <div class="dropdown-menu">
                                                    <a class="dropdown-item" href="#">Edit</a>
                                                    <a class="dropdown-item" href="#">Delete</a>
                                                    <a class="dropdown-item" href="#">Archive</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Kojo_mills</td>
                                        <td>kojomills@gmail.com</td>
                                        <td>Kojo Mills</td>
                                        <td>No</td>
                                        <td>Yes</td>
                                        <td>18/08/2022</td>
                                        <td>
                                            <div class="dropdown">
                                                <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                                                    Actions
                                                    <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0 0L5 5L10 0H0Z" fill="#323232"/>
                                                    </svg>

                                                </button>
                                                <div class="dropdown-menu">
                                                    <a class="dropdown-item" href="#">Edit</a>
                                                    <a class="dropdown-item" href="#">Delete</a>
                                                    <a class="dropdown-item" href="#">Archive</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Kojo_mills</td>
                                        <td>kojomills@gmail.com</td>
                                        <td>Kojo Mills</td>
                                        <td>No</td>
                                        <td>Yes</td>
                                        <td>18/08/2022</td>
                                        <td>
                                            <div class="dropdown">
                                                <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                                                    Actions
                                                    <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0 0L5 5L10 0H0Z" fill="#323232"/>
                                                    </svg>

                                                </button>
                                                <div class="dropdown-menu">
                                                    <a class="dropdown-item" href="#">Edit</a>
                                                    <a class="dropdown-item" href="#">Delete</a>
                                                    <a class="dropdown-item" href="#">Archive</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Kojo_mills</td>
                                        <td>kojomills@gmail.com</td>
                                        <td>Kojo Mills</td>
                                        <td>No</td>
                                        <td>Yes</td>
                                        <td>18/08/2022</td>
                                        <td>
                                            <div class="dropdown">
                                                <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                                                    Actions
                                                    <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0 0L5 5L10 0H0Z" fill="#323232"/>
                                                    </svg>

                                                </button>
                                                <div class="dropdown-menu">
                                                    <a class="dropdown-item" href="#">Edit</a>
                                                    <a class="dropdown-item" href="#">Delete</a>
                                                    <a class="dropdown-item" href="#">Archive</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Kojo_mills</td>
                                        <td>kojomills@gmail.com</td>
                                        <td>Kojo Mills</td>
                                        <td>No</td>
                                        <td>Yes</td>
                                        <td>18/08/2022</td>
                                        <td>
                                            <div class="dropdown">
                                                <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                                                    Actions
                                                    <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0 0L5 5L10 0H0Z" fill="#323232"/>
                                                    </svg>

                                                </button>
                                                <div class="dropdown-menu">
                                                    <a class="dropdown-item" href="#">Edit</a>
                                                    <a class="dropdown-item" href="#">Delete</a>
                                                    <a class="dropdown-item" href="#">Archive</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Kojo_mills</td>
                                        <td>kojomills@gmail.com</td>
                                        <td>Kojo Mills</td>
                                        <td>No</td>
                                        <td>Yes</td>
                                        <td>18/08/2022</td>
                                        <td>
                                            <div class="dropdown">
                                                <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                                                    Actions
                                                    <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0 0L5 5L10 0H0Z" fill="#323232"/>
                                                    </svg>

                                                </button>
                                                <div class="dropdown-menu">
                                                    <a class="dropdown-item" href="#">Edit</a>
                                                    <a class="dropdown-item" href="#">Delete</a>
                                                    <a class="dropdown-item" href="#">Archive</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Kojo_mills</td>
                                        <td>kojomills@gmail.com</td>
                                        <td>Kojo Mills</td>
                                        <td>No</td>
                                        <td>Yes</td>
                                        <td>18/08/2022</td>
                                        <td>
                                            <div class="dropdown">
                                                <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                                                    Actions
                                                    <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0 0L5 5L10 0H0Z" fill="#323232"/>
                                                    </svg>

                                                </button>
                                                <div class="dropdown-menu">
                                                    <a class="dropdown-item" href="#">Edit</a>
                                                    <a class="dropdown-item" href="#">Delete</a>
                                                    <a class="dropdown-item" href="#">Archive</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Kojo_mills</td>
                                        <td>kojomills@gmail.com</td>
                                        <td>Kojo Mills</td>
                                        <td>No</td>
                                        <td>Yes</td>
                                        <td>18/08/2022</td>
                                        <td>
                                            <div class="dropdown">
                                                <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                                                    Actions
                                                    <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0 0L5 5L10 0H0Z" fill="#323232"/>
                                                    </svg>

                                                </button>
                                                <div class="dropdown-menu">
                                                    <a class="dropdown-item" href="#">Edit</a>
                                                    <a class="dropdown-item" href="#">Delete</a>
                                                    <a class="dropdown-item" href="#">Archive</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Kojo_mills</td>
                                        <td>kojomills@gmail.com</td>
                                        <td>Kojo Mills</td>
                                        <td>No</td>
                                        <td>Yes</td>
                                        <td>18/08/2022</td>
                                        <td>
                                            <div class="dropdown">
                                                <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                                                    Actions
                                                    <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0 0L5 5L10 0H0Z" fill="#323232"/>
                                                    </svg>

                                                </button>
                                                <div class="dropdown-menu">
                                                    <a class="dropdown-item" href="#">Edit</a>
                                                    <a class="dropdown-item" href="#">Delete</a>
                                                    <a class="dropdown-item" href="#">Archive</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    
                                </tbody>
                            </table>

                        
                    </div>

                </div>

            </div>

        </section>

    </div>
</template>

<style lang="scss" scoped>
    @import 'datatables.net-bs5';
    .card {
        > div {
            .content-wrapper {
                &:first-child {

                    @media screen and (min-width: 991px) {
                        padding-right: 13.625rem;
                    }
                    
                }
            } 

        }
    }

</style>

