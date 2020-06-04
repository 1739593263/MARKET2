<template>
    <div class="wrapper" ref="wrap">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll';

    export default {
        name: "Scroll",
        data(){
            return{
                wrap:null,
                scroll:null,
            }
        },
        mounted() {
            this.wrap = this.$refs.wrap;
            this.$nextTick(()=>{
                this.scroll = new BScroll(this.wrap,{
                    click: true,
                })
            })
        }
    }
</script>

<style scoped>
    .wrapper{
        height: 90vh;
    }
</style>