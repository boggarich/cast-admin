<script lang="ts">

    import $ from "jquery";
    import DataTable from 'datatables.net-vue3';
    import DataTablesLib from 'datatables.net-bs5';
    import 'datatables.net-responsive'

    DataTable.use(DataTablesLib)

    export default {

        mounted() {

            $('#permissionsDataTable').dataTable({
                searching: false,
                lengthChange: false,
                info: false,
                stateSave: true,
                dom: "<t<'row justify-content-center'p>>",
                responsive: true,
                paging: false
            });

        }

    }

</script>

<template>
    <div class="main-content">

        <section class="section-1">
            
            <div class="card br-50">

                <div class="">

                    <div class="content-wrapper d-flex pt-35 pb-35 align-items-center pr-4">

                        <div class="input-wrapper has-icon w-100 d-flex">

                            <input type="email" class="form-control flex-grow-1 main-search ml-auto" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Search">

                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_281_4674)">
                                <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="#341454"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_281_4674">
                                <rect width="24" height="24" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>

                        </div>

                    </div>

                    <div class="cardd-header d-flex justify-content-between bordered-bottom padding-x-lg padding-right-lg pt-1">
                        <h4 class="header-md pt-2 position-relative mb-0 mt-9px">Permissions</h4>
                    </div>

                    <div class="card-body pt-2 mb-5 px-0 overflow-hidden pr-3">
                        
                            <table class="dataTable display table table-hover first-td-border-0 padding-right-lg th-sm table-striped whitespace-nowrap w-100" id="permissionsDataTable" width="100%">
                                <thead class="d-none">
                                    <tr>
                                        <th>Permissions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                    <tr>
                                        <td>Account Verification</td>
                                    </tr>
                                    <tr>
                                        <td>Can add basemodel</td>
                                    </tr>
                                    <tr>
                                        <td>Account Verification</td>
                                    </tr>
                                    <tr>
                                        <td>Can add basemodel</td>
                                    </tr>
                                    <tr>
                                        <td>Account Verification</td>
                                    </tr>

                                </tbody>
                            </table>

                        
                    </div>

                </div>

            </div>

        </section>

        <section class="section-2 mt-4">
            
            <div class="card br-20">

                <div class="">

                    <div class="content-wrapper d-flex pt-35 pb-35 align-items-center">

                        <button class="btn btn-custom-violet-3 br-10 large" id="search">Cancel</button>
                        <button class="btn btn-custom-violet-4 br-10 large ml-auto" id="search">Save</button>

                    </div>

                </div>

            </div>

        </section>

    </div>
</template>

<style lang="scss" scoped>
    @import 'datatables.net-bs5';

</style>


