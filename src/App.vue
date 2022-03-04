<template>
    <div class="container">
        <div class="header">
            <div class="header__cover">
                <div class="header__logo">
                    <img src="./assets/alef-logo.svg" alt="alef-logo" />
                </div>
                <div class="header__nav">
                    <router-link class="a-link a-link_nav" to="/">Форма</router-link>
                    <router-link class="a-link a-link_nav" to="/preview">Превью</router-link>
                </div>
            </div>
        </div>
        <div class="main">
            <router-view></router-view>
        </div>
        <div class="footer">
            <p class="footer__content">all rights reserved</p>
        </div>
    </div>
</template>