<template>
    <div>cart
        <nav-header></nav-header>
        <router-view></router-view>
        <nav-footer></nav-footer>
    </div>
</template>
<script>
import NavHeader from '@/components/NavHeader'
import NavFooter from '@/components/NavFooter'

export default {
    name:'cart',
    components:{
        NavHeader,
        NavFooter
    }

}
</script>