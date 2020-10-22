<template>
    <div id="container">
        <HeaderComponent/>
        <ContentComponent/>
        <FooterComponent/>
    </div>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue';
import ContentComponent from './ContentComponent.vue';
import FooterComponent from './FooterComponent.vue';

export default {
    name:"Home",
    components:{
        HeaderComponent,
        ContentComponent,
        FooterComponent
    }
}
</script>