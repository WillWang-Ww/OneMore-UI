<template>
    <svg class="icon" :class="`${icon}`">
        <use :xlink:href="`#icon-${icon}`"></use>
    </svg>
</template>
<script>
import './svg'
export default {
    name:'OneIcon',
    props:['icon']
}
</script>
<style scoped>
.icon {
    width: 1em; height: 1em;
    fill: currentColor;
    overflow: hidden;
    margin: 0px;
    margin-right: 0.2em;
}
@keyframes loading {
    0%{transform: rotate(0deg);}
    100%{transform: rotate(360deg);}
}
.loading{
    animation: loading 1s linear infinite;
}
</style>
