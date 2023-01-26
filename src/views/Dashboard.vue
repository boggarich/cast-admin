
<script lang="ts">

    import Datepicker from 'vuejs3-datepicker';
    import $ from "jquery";
    import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title, BarElement, CategoryScale, LinearScale } from 'chart.js'
    import { Doughnut, Bar } from 'vue-chartjs'
    import DataTable from 'datatables.net-vue3';
    import DataTablesLib from 'datatables.net-bs5';
    import 'datatables.net-responsive';

    ChartJS.register(ArcElement, Tooltip, Legend, Title, BarElement, CategoryScale, LinearScale)
    DataTable.use(DataTablesLib)

    export default {

        components: {
            Bar,
            Datepicker,
            Doughnut
        },
        data() {

            return {
                date: new Date(),
                barChartOptions: {
                    responsive: true,
                    barThickness: 17.69,
                    borderRadius: {
                        topLeft: 5,
                        bottomLeft: 5,
                        topRight: 5,
                        bottomRight: 5
                    },
                    backgroundColor: 'rgba(84, 20, 84, 0.2)',
                    scales: {
                        x: {
                            display: false,
                            ticks: {
                                display: false
                            }
                        },
                        y: {
                            display: false
                        }
                    },
                    plugins: {
                        legend: false
                    }
                },
                barChartData: {
                    labels: [ '', '', '', '', '', '', '', '', '', '', '', '', '' ],
                    datasets: [ { data: [20, 15, 40, 8, 35, 40, 5, 30, 30, 15, 25, 40, 38] } ]
                },
                doughnutChartOptions: {
                    
                    plugins: {   
                        legend: {
                            display: false,
                        } 
                    }

                },
                doughnutChartData: {
                    labels: [
                        'Entertainment',
                        'Education',
                        'Comedy',
                        'Food',
                        'Travel & Hospitality'
                    ],
                    datasets: [{
                        label: 'Users per Category',
                        data: [100, 50, 100, 120, 100],
                        backgroundColor: [
                            '#ECE7F2',
                            '#250248',
                            '#C6A5C0',
                            '#995C8E',
                            '#49648C'
                        ],
                        hoverOffset: 4,

                    }]
                }
            }

        },

        computed: {

            dashboardData () {

                return this.$store.state.dashboardData

            }

        },

        methods: {
            
        },

        mounted() {

            $('#viewsDataTable').dataTable({
                searching: false,
                lengthChange: false,
                info: false,
                stateSave: true,
                responsive: true,
                dom: "<t<'row justify-content-center'p>>"
            });

            $('#transactionsDataTable').dataTable({
                searching: false,
                lengthChange: false,
                info: false,
                stateSave: true,
                responsive: true,
                dom: "<t<'row justify-content-center'p>>"
            });

            $('#watchedLiveDataTable').dataTable({
                searching: false,
                lengthChange: false,
                info: false,
                stateSave: true,
                responsive: true,
                dom: "<t<'row justify-content-center'p>>"
            });

            $('#subscriptionDataTable').dataTable({
                searching: false,
                lengthChange: false,
                info: false,
                stateSave: true,
                responsive: true,
                dom: "<t<'row justify-content-center'p>>"
            });

            var chart = c3.generate({

                bindto: '#chart',
                legend: {
                    show: false
                },
                point: {
                    show: false
                },
                data: {
                    columns: [
                        ['Users', 30, 200, 100, 400, 150, 250, 200, 180, 200, 270, 300, 350]
                    ],
                    type: 'spline'
                }
                
            });

            $('.to .vuejs3-datepicker__icon').html('To |');
            $('.from .vuejs3-datepicker__icon').html('From |');

        },

        unmounted() {

            $('#transactionsDataTable').DataTable({
            }).destroy();

        }
    }

</script>

<template>
    <div class="main-content">

        <section class="section-1">

            <div class="card br-50">
                <div class="content-wrapper">
                    <h4 class="header-md mb-0">Search</h4>
                </div>
                
                <div class="d-flex px-5 mt-4 pb-3 flex-wrap">

                    <datepicker :value="date" class="mr-4 from"></datepicker>
                    <datepicker :value="date" class="mr-4 to"></datepicker>

                    <button class="btn btn-custom-violet-2 br-10" id="search">Search</button>

                </div>

                <div class="page-separator mb-4 mt-4"></div>

                <div class="px-5">
                    <div class="grid-3-column">
                        <div class="card-counter">
                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="30" cy="30" r="30" fill="white"/>
                                <g clip-path="url(#clip0_238_1547)">
                                <path d="M41.9961 19.0127C41.9948 18.9955 41.9937 18.9783 41.9916 18.9612C41.9895 18.9439 41.9866 18.9266 41.9837 18.9094C41.9806 18.8911 41.9777 18.8727 41.9737 18.8547C41.9701 18.8387 41.9657 18.823 41.9614 18.8071C41.9565 18.7887 41.9516 18.7703 41.9457 18.7523C41.9406 18.7364 41.9345 18.7209 41.9286 18.7052C41.922 18.6881 41.9158 18.6708 41.9084 18.6541C41.9013 18.6377 41.8931 18.6218 41.8851 18.6057C41.8775 18.5904 41.8701 18.5749 41.8618 18.56C41.8528 18.5438 41.8427 18.5281 41.8329 18.5123C41.8239 18.498 41.8152 18.4837 41.8055 18.4699C41.7953 18.4551 41.7841 18.4408 41.773 18.4264C41.7621 18.4121 41.7511 18.398 41.7395 18.3844C41.7287 18.3716 41.717 18.3593 41.7055 18.3469C41.692 18.3325 41.6785 18.3183 41.6642 18.3046C41.6594 18.3 41.6553 18.2949 41.6504 18.2904C41.6432 18.2838 41.6355 18.2783 41.6282 18.2719C41.6133 18.2588 41.5982 18.246 41.5825 18.2337C41.5692 18.2232 41.5558 18.2132 41.542 18.2034C41.527 18.1927 41.5117 18.1823 41.4961 18.1723C41.4811 18.1627 41.4661 18.1535 41.4508 18.1447C41.4355 18.1359 41.4199 18.1276 41.4042 18.1196C41.3881 18.1113 41.3721 18.1035 41.3557 18.0962C41.3396 18.089 41.3235 18.0823 41.3071 18.0759C41.2905 18.0694 41.2737 18.0632 41.2569 18.0575C41.2401 18.0519 41.2232 18.0468 41.2062 18.042C41.1889 18.0371 41.1715 18.0326 41.1541 18.0286C41.1371 18.0247 41.1201 18.0212 41.1028 18.0181C41.0844 18.0148 41.066 18.012 41.0473 18.0096C41.0308 18.0075 41.0143 18.0057 40.9976 18.0044C40.9777 18.0028 40.9577 18.0018 40.9377 18.0013C40.9281 18.0012 40.9187 18 40.9091 18H36.5454C35.943 18 35.4545 18.4884 35.4545 19.0909C35.4545 19.6934 35.943 20.1818 36.5454 20.1818H38.4123L31.7879 27.3361L28.9531 24.5013C28.7436 24.2916 28.4583 24.1778 28.161 24.182C27.8646 24.1876 27.5832 24.3137 27.3816 24.5311L18.2907 34.3397C17.8811 34.7816 17.9073 35.4718 18.3492 35.8814C18.5593 36.076 18.8252 36.1722 19.0905 36.1722C19.3836 36.1722 19.676 36.0548 19.891 35.8229L28.2116 26.8454L31.0468 29.6805C31.2565 29.8903 31.5447 30.0065 31.8391 29.9999C32.1356 29.9942 32.4171 29.8679 32.6186 29.6503L39.8182 21.8748V23.4545C39.8182 24.057 40.3066 24.5455 40.9091 24.5455C41.5115 24.5455 42 24.057 42 23.4545V19.0909C42 19.0841 41.9991 19.0775 41.999 19.0708C41.9986 19.0514 41.9974 19.0321 41.9961 19.0127Z" fill="#8B0C8B"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_238_1547">
                                <rect width="24" height="24" fill="white" transform="translate(18 18)"/>
                                </clipPath>
                                </defs>
                            </svg>

                            <div>
                                <p>Total Received</p>
                                <h4>2120.00</h4>
                            </div>

                        </div>
                        <div class="card-counter">
                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="30" cy="30" r="30" fill="white"/>
                                <g clip-path="url(#clip0_238_1557)">
                                <path d="M18.0039 40.9873C18.0052 41.0045 18.0063 41.0217 18.0084 41.0388C18.0105 41.0561 18.0134 41.0734 18.0163 41.0906C18.0193 41.1089 18.0223 41.1273 18.0263 41.1453C18.0299 41.1613 18.0343 41.177 18.0386 41.1929C18.0435 41.2113 18.0484 41.2297 18.0543 41.2477C18.0593 41.2636 18.0655 41.2791 18.0714 41.2948C18.078 41.3119 18.0842 41.3292 18.0916 41.3459C18.0987 41.3623 18.1068 41.3782 18.1148 41.3943C18.1225 41.4096 18.1299 41.4251 18.1382 41.44C18.1472 41.4562 18.1573 41.4719 18.1671 41.4877C18.1761 41.502 18.1848 41.5163 18.1945 41.5301C18.2047 41.5449 18.2159 41.5592 18.227 41.5736C18.2379 41.5879 18.2489 41.602 18.2604 41.6156C18.2713 41.6284 18.283 41.6407 18.2945 41.6531C18.308 41.6675 18.3215 41.6817 18.3358 41.6954C18.3406 41.7 18.3447 41.7051 18.3496 41.7096C18.3568 41.7162 18.3645 41.7217 18.3718 41.7281C18.3867 41.7412 18.4018 41.754 18.4175 41.7663C18.4308 41.7768 18.4442 41.7868 18.458 41.7966C18.4729 41.8073 18.4883 41.8177 18.5039 41.8277C18.5188 41.8373 18.5339 41.8465 18.5492 41.8553C18.5645 41.8641 18.5801 41.8724 18.5958 41.8804C18.6119 41.8887 18.6279 41.8965 18.6443 41.9038C18.6604 41.911 18.6765 41.9177 18.6929 41.9241C18.7095 41.9306 18.7263 41.9368 18.7431 41.9425C18.7599 41.9481 18.7768 41.9532 18.7938 41.958C18.8111 41.9629 18.8284 41.9674 18.8459 41.9714C18.8628 41.9753 18.8799 41.9788 18.8972 41.9819C18.9156 41.9852 18.934 41.988 18.9527 41.9904C18.9692 41.9925 18.9857 41.9943 19.0024 41.9956C19.0223 41.9972 19.0423 41.9982 19.0623 41.9987C19.0719 41.9988 19.0812 42 19.0909 42H23.4545C24.057 42 24.5455 41.5116 24.5455 40.9091C24.5455 40.3066 24.057 39.8182 23.4545 39.8182H21.5877L28.2121 32.6639L31.0468 35.4987C31.2564 35.7084 31.5417 35.8222 31.839 35.818C32.1354 35.8124 32.4168 35.6863 32.6184 35.4689L41.7093 25.6603C42.1188 25.2184 42.0927 24.5282 41.6508 24.1186C41.4407 23.924 41.1748 23.8278 40.9095 23.8278C40.6164 23.8278 40.324 23.9452 40.109 24.1771L31.7884 33.1546L28.9532 30.3195C28.7435 30.1097 28.4553 29.9935 28.1609 30.0001C27.8644 30.0058 27.5828 30.1321 27.3814 30.3497L20.1818 38.1252V36.5455C20.1818 35.943 19.6934 35.4545 19.0909 35.4545C18.4884 35.4545 18 35.943 18 36.5455V40.9091C18 40.9159 18.0009 40.9225 18.001 40.9292C18.0014 40.9486 18.0025 40.9679 18.0039 40.9873Z" fill="#8B0C8B"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_238_1557">
                                <rect width="24" height="24" fill="white" transform="translate(42 42) rotate(-180)"/>
                                </clipPath>
                                </defs>
                            </svg>

                            <div>
                                <p>Total Transfered</p>
                                <h4>2120.00</h4>
                            </div>
                            
                        </div>
                        <div class="card-counter">
                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="30" cy="30" r="30" fill="white"/>
                                <g clip-path="url(#clip0_238_1568)">
                                <path d="M22 22H20V36C20 37.1 20.9 38 22 38H36V36H22V22ZM38 18H26C24.9 18 24 18.9 24 20V32C24 33.1 24.9 34 26 34H38C39.1 34 40 33.1 40 32V20C40 18.9 39.1 18 38 18ZM38 32H26V20H38V32ZM30 21.5V30.5L36 26L30 21.5Z" fill="#8B0C8B"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_238_1568">
                                <rect width="24" height="24" fill="white" transform="translate(18 16)"/>
                                </clipPath>
                                </defs>
                            </svg>

                            <div>
                                <p>Channels</p>
                                <h4>200</h4>
                            </div>
                            
                        </div>
                    </div>
                    <div class="grid-3-column pt-5">
                        <div class="card-counter">

                            <img src="/assets/img/cube.png" />

                            <div>
                                <p>Cube Boxes</p>
                                <h4>1,200</h4>
                                <p class="f-12">Cubes: 2,000</p>
                            </div>
                            
                        </div>
                        <div class="card-counter">
                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="30" cy="30" r="30" fill="white"/>
                            <path d="M30 30.75C26.83 30.75 24.25 28.17 24.25 25C24.25 21.83 26.83 19.25 30 19.25C33.17 19.25 35.75 21.83 35.75 25C35.75 28.17 33.17 30.75 30 30.75ZM30 20.75C27.66 20.75 25.75 22.66 25.75 25C25.75 27.34 27.66 29.25 30 29.25C32.34 29.25 34.25 27.34 34.25 25C34.25 22.66 32.34 20.75 30 20.75Z" fill="#341454"/>
                            <path d="M21.4102 40.75C21.0002 40.75 20.6602 40.41 20.6602 40C20.6602 35.73 24.8502 32.25 30.0002 32.25C31.0102 32.25 32.0001 32.38 32.9601 32.65C33.3601 32.76 33.5902 33.17 33.4802 33.57C33.3702 33.97 32.9601 34.2 32.5602 34.09C31.7402 33.86 30.8802 33.75 30.0002 33.75C25.6802 33.75 22.1602 36.55 22.1602 40C22.1602 40.41 21.8202 40.75 21.4102 40.75Z" fill="#341454"/>
                            <path d="M36 40.75C34.34 40.75 32.78 39.87 31.94 38.44C31.49 37.72 31.25 36.87 31.25 36C31.25 34.54 31.9 33.19 33.03 32.29C33.87 31.62 34.93 31.25 36 31.25C38.62 31.25 40.75 33.38 40.75 36C40.75 36.87 40.51 37.72 40.06 38.45C39.81 38.87 39.49 39.25 39.11 39.57C38.28 40.33 37.17 40.75 36 40.75ZM36 32.75C35.26 32.75 34.56 33 33.97 33.47C33.2 34.08 32.75 35.01 32.75 36C32.75 36.59 32.91 37.17 33.22 37.67C33.8 38.65 34.87 39.25 36 39.25C36.79 39.25 37.55 38.96 38.13 38.44C38.39 38.22 38.61 37.96 38.77 37.68C39.09 37.17 39.25 36.59 39.25 36C39.25 34.21 37.79 32.75 36 32.75Z" fill="#341454"/>
                            <path d="M35.4299 37.7401C35.2399 37.7401 35.0499 37.6701 34.8999 37.5201L33.9099 36.5301C33.6199 36.2401 33.6199 35.76 33.9099 35.47C34.1999 35.18 34.6799 35.18 34.9699 35.47L35.4499 35.9501L37.0499 34.47C37.3499 34.19 37.8299 34.2101 38.1099 34.5101C38.3899 34.8101 38.3699 35.2901 38.0699 35.5701L35.9399 37.54C35.7899 37.67 35.6099 37.7401 35.4299 37.7401Z" fill="#341454"/>
                            </svg>

                            <div>
                                <p>Subscriptions</p>
                                <h4>1,200</h4>
                            </div>
                            
                        </div>
                        <div class="card-counter">
                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="30" cy="30" r="30" fill="white"/>
                                <path d="M27 20C24.38 20 22.25 22.13 22.25 24.75C22.25 27.32 24.26 29.4 26.88 29.49C26.96 29.48 27.04 29.48 27.1 29.49C27.12 29.49 27.13 29.49 27.15 29.49C27.16 29.49 27.16 29.49 27.17 29.49C29.73 29.4 31.74 27.32 31.75 24.75C31.75 22.13 29.62 20 27 20Z" fill="#341454"/>
                                <path d="M32.08 32.15C29.29 30.29 24.74 30.29 21.93 32.15C20.66 33 19.96 34.15 19.96 35.38C19.96 36.61 20.66 37.75 21.92 38.59C23.32 39.53 25.16 40 27 40C28.84 40 30.68 39.53 32.08 38.59C33.34 37.74 34.04 36.6 34.04 35.36C34.03 34.13 33.34 32.99 32.08 32.15Z" fill="#341454"/>
                                <path d="M37.99 25.34C38.15 27.28 36.77 28.98 34.86 29.21C34.85 29.21 34.85 29.21 34.84 29.21H34.81C34.75 29.21 34.69 29.21 34.64 29.23C33.67 29.28 32.78 28.97 32.11 28.4C33.14 27.48 33.73 26.1 33.61 24.6C33.54 23.79 33.26 23.05 32.84 22.42C33.22 22.23 33.66 22.11 34.11 22.07C36.07 21.9 37.82 23.36 37.99 25.34Z" fill="#341454"/>
                                <path d="M39.99 34.59C39.91 35.56 39.29 36.4 38.25 36.97C37.25 37.52 35.99 37.78 34.74 37.75C35.46 37.1 35.88 36.29 35.96 35.43C36.06 34.19 35.47 33 34.29 32.05C33.62 31.52 32.84 31.1 31.99 30.79C34.2 30.15 36.98 30.58 38.69 31.96C39.61 32.7 40.08 33.63 39.99 34.59Z" fill="#341454"/>
                            </svg>

                            <div>
                                <p>Casters</p>
                                <h4>1,200</h4>
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>

        </section>

        <section class="section-2 mt-5 pt-4">

            <div class="grid-2-column">

                <div class="card br-30">
                    <div class="card-content-wrapper">

                        <div class="header-content d-flex justify-content-between">
                            <h4 class="header-md mb-0">Users</h4>
                            <h4 class="header-md mr-3">Last 30 <br />days</h4>
                        </div>

                        <div class="body-content mt-5">
                            <div id="chart" style="height: 200px; width: 100%;"></div>
                        </div>
                        
                    </div>
                </div>

                <div class="card br-30">

                    <div class="card-content-wrapper">

                        <div class="header-content d-flex justify-content-between">
                            <h4 class="header-md mb-0">Users per Category</h4>
                            <h4 class="header-md mr-3">Last 30 <br />days</h4>
                        </div>

                        <div class="body-content mt-3 mb-5">
                            <div class="d-flex justify-content-center position-relative" style="height: 150px;">
                                
                                <div class="d-grid doughnut-graph">
                                    <Doughnut :data="doughnutChartData" :options="doughnutChartOptions" />
                                </div>

                            </div>
                        </div>

                        <div class="mt-4 px-4">
                            <div class="grid-2-column">
                                <div>
                                    <div class="legend-wrapper">
                                        <p>Entertainment</p>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="20" height="20" fill="#ECE7F2"/>
                                        </svg>

                                    </div>
                                    <div class="legend-wrapper">
                                        <p>Education</p>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="20" height="20" fill="#250248"/>
                                        </svg>
                                    </div>
                                    <div class="legend-wrapper">
                                        <p>Comedy</p>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="20" height="20" fill="#C6A5C0"/>
                                        </svg>

                                    </div>
                                </div>
                                <div>
                                    <div class="legend-wrapper">
                                        <p>Food</p>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="20" height="20" fill="#995C8E"/>
                                        </svg>


                                    </div>
                                    <div class="legend-wrapper">
                                        <p>Travel & Hospitality</p>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="20" height="20" fill="#49648C"/>
                                        </svg>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </section>

        <section class="section-3 mt-5 pt-4">
            
            <div class="card br-50">

                <div class="">

                    <div class="cardd-header d-flex justify-content-between bordered-bottom padding-x-lg padding-right-lg">
                        <h4 class="header-md pt-2 position-relative mb-0 mt-9px">Subscriptions</h4>
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
                        
                            
                            <table class="dataTable display table table-hover first-td-border-0 padding-right-lg" id="subscriptionDataTable" width="100%">
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Caster</th>
                                        <th>Channel</th>
                                        <th>Cost</th>
                                        <th>Paid</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>18/08/2022</td>
                                        <td>Kojo_mills</td>
                                        <td>Sam Jackson Likes Food</td>
                                        <td>$25.00</td>
                                        <td>YES</td>
                                    </tr>
                                    <tr>
                                        <td>18/08/2022</td>
                                        <td>Kojo_mills</td>
                                        <td>Sam Jackson Likes Food</td>
                                        <td>$25.00</td>
                                        <td>YES</td>
                                    </tr>
                                    <tr>
                                        <td>18/08/2022</td>
                                        <td>Kojo_mills</td>
                                        <td>Sam Jackson Likes Food</td>
                                        <td>$25.00</td>
                                        <td>YES</td>
                                    </tr>
                                </tbody>
                            </table>

                        
                    </div>

                </div>

            </div>

        </section>

        <section class="section-4 mt-4 pt-4">
            
            <div class="card br-50">

                <div class="">

                    <div class="cardd-header d-flex justify-content-between bordered-bottom padding-x-lg padding-right-lg">
                        <h4 class="header-md pt-2 position-relative mb-0 mt-9px">Watched Lives</h4>
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
                        
                            <table class="dataTable display table table-hover first-td-border-0 padding-right-lg" id="watchedLiveDataTable" width="100%">
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Caster</th>
                                        <th>Channel</th>
                                        <th>Cost</th>
                                        <th>Paid</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>18/08/2022</td>
                                        <td>Kojo_mills</td>
                                        <td>Sam Jackson Likes Food</td>
                                        <td>$25.00</td>
                                        <td>YES</td>
                                    </tr>
                                    <tr>
                                        <td>18/08/2022</td>
                                        <td>Kojo_mills</td>
                                        <td>Sam Jackson Likes Food</td>
                                        <td>$25.00</td>
                                        <td>YES</td>
                                    </tr>
                                    <tr>
                                        <td>18/08/2022</td>
                                        <td>Kojo_mills</td>
                                        <td>Sam Jackson Likes Food</td>
                                        <td>$25.00</td>
                                        <td>YES</td>
                                    </tr>
                                </tbody>
                            </table>

                        
                    </div>

                </div>

            </div>

        </section>

        <section class="section-5 mt-4 pt-4">
            
            <div class="card br-50">

                <div class="">

                    <div class="cardd-header d-flex justify-content-between bordered-bottom padding-x-lg padding-right-lg">
                        <h4 class="header-md pt-2 position-relative mb-0 mt-9px">Transactions</h4>
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
                        
                            
                            <table class="dataTable display table table-hover first-td-border-0" id="transactionsDataTable" width="100%" data-turbolinks="false">
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Caster</th>
                                        <th>Allocated</th>
                                        <th>Debited</th>
                                        <th>Content</th>
                                        <th>Provider</th>
                                        <th>Reference</th>
                                    </tr>
                                </thead>
                                <tbody>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                </tbody>
                            </table>

                        
                    </div>

                </div>

            </div>

        </section>

        <section class="section-6 mt-4 pt-4">
            <div class="grid-2-column">
                <div class="card br-50">

                    <div class="">

                        <div class="cardd-header d-flex justify-content-between padding-x-lg padding-top-lg">
                            <h4 class="header-md position-relative mb-0 mt-9px">Views</h4>
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

                        <div class="card-body pt-0 mb-4 px-0">
                            
                                
                                <table class="dataTable display table table-hover" id="viewsDataTable" width="100%" data-turbolinks="false">
                                    <thead>
                                        <tr>
                                            <th>Category</th>
                                            <th>Views</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                            <tr>
                                                <td>Entertainment</td>
                                                <td>102</td>
                                            </tr>
                                            <tr>
                                                <td>Sports</td>
                                                <td>23</td>
                                            </tr>
                                            <tr>
                                                <td>Influencers</td>
                                                <td>67</td>
                                            </tr>
                                            <tr>
                                                <td>Religion</td>
                                                <td>50</td>
                                            </tr>
                                    </tbody>
                                </table>

                            
                        </div>

                    </div>

                </div>
                <div class="card br-50">

                    <div class="cardd-header d-flex justify-content-between padding-x-lg padding-top-lg pr-2">
                            <h4 class="header-md position-relative mb-0 mt-9px">Category Graph</h4>
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

                    <div class="card-body pt-4 pb-5 mb-1 has-padding padding-x-lg">

                        <Bar :options="barChartOptions" :data="barChartData" />

                    </div>

                </div>
            </div>
        </section>

    </div>
</template>

<style lang="scss" scoped>
    @import 'datatables.net-bs5';

    .section-6 {
        .grid-2-column {
            column-gap: 19px;
        }

        thead {
            th {
                font-size: 16px;
            }
        }
    }
    .section-2 {
        margin-right: 1.5rem;
        .grid-2-column {
            column-gap: 19px;
        }
        .card {
            .header-content {
                h4 {
                    &:last-child {
                        color: rgba(52, 20, 84, 0.5);
                    }
                }
            }
        }
    }
    .section-1 {
       
        .card {
            padding: 3.5rem 0 5rem;

            #search {
                width: 154px;
            }
            .grid-3-column {
                grid-template-columns: 280px 280px 280px;

                &:nth-child(2) {
                    > div {
                        &:nth-child(1) {
                            background: rgba(153, 92, 142, 0.8);
                        }

                        &:nth-child(2) {
                            background: rgba(73, 100, 140, 0.8);
                        }

                        &:nth-child(3) {
                            background: #C27AB5;
                        }

                    }
                }

                &:nth-child(1) {
                    > div {
                        &:nth-child(1) {
                            background: rgba(79, 35, 131, 0.7);
                        }

                        &:nth-child(2) {
                            background: rgba(37, 2, 72, 0.4);
                        }

                        &:nth-child(3) {
                            background: rgba(198, 165, 192, 0.8);
                        }

                    }
                }
            }

        }
    }

</style>

