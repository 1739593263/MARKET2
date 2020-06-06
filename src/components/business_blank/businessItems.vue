<template>
    <div id="business-item" class="d-flex justify-content-around">
        <business-item-square v-for="(item, index) in titles"  :item="item"></business-item-square>
    </div>
</template>

<script>
    import businessItemSquare from "./businessItemSquare";

    export default {
        name: "businessItems",
        props:{
            titles:{
                type: Array,
                default(){
                    return [];
                }
            }
        },
        components:{
            businessItemSquare,
        }
    }
</script>

<style scoped>
    #business-item{
        display: flex;
        width: 100vw;
        height: 55vh;
        position: relative;

        padding: 10vh 10vw 10vh 10vw;

        vertical-align: center;
    }

</style>