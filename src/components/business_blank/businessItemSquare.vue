<template>
    <div class="business-item-square text-wrap">
        <p>{{item}}</p>
    </div>
</template>

<script>
    export default {
        name: "businessItemSquare",
        props:{
            item:{
                type: String,
                default: ""
            }
        }
    }
</script>

<style scoped>
    @keyframes fadeIn{  0%{    opacity: 1;  }  50%{    opacity: 0.9;  }  100%{    opacity: 0.8;  }}

    .business-item-square{
        width: 250px;
        height: 250px;
        padding: 4vw;

        text-align: center;

        background-color: rgba(80,80,210,.2);
        border: 1px solid  rgba(80,80,210,.5);
        box-shadow: rgba(80,80,210,1);
        border-radius: 50%;
    }

    .business-item-square:hover{
        opacity: .8;
        color: white;
        cursor: pointer;
        animation: fadeIn .8s ease-in;
    }

    .business-item-square p{
        font-size:45px;
    }
</style>