<template>
<div>
    <h1 v-if="key" @click="handler(arg, event)"></h1>
    <ul>
        <li></li>
    </ul>
</div>
</template>

<script>
export default {
    data() {
        return {
            key: true
        }
    },

}
</script>
<style>

</style>
