<template>
    <div class="main">
        <div class="router">
            <router-link to="/">Home</router-link> |
            <router-link to="/registration">Registration</router-link>
        </div>
        <router-view/>
    </div>
</template>

<style src="./global.scss"></style>