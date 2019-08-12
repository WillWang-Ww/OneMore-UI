<template>
    <div class='wrapper'>
        <div class="OMMessageTitle">
            提示   
        </div>
        <div class="OMMessageContent">
            Hello World
        </div>
        <div class='rowLine'></div>
        <div class="OMMessageOptions">
            <div class="confirm">确认</div>
            <div class="close">关闭</div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'OMMessageBox',

}
</script scoped>
<style>
    .wrapper{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border: 1px solid #ccc;
    }
    .OMMessageTitle{
        text-align: center;
        padding: 8px 0px;
        font-size: 16px;
    }
    .OMMessageContent{
        text-align: center;
        padding: 0px 12px;
        font-size: 14px;
    }
    .OMMessageOptions{
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: center;
    }
    .close{
        padding: 8px 12px;
        width: 100%;
    }
    .confirm{
        padding: 8px 12px;
        width: 100%;        
    }
</style>
