<template>
    <div
        v-if="!personal.name && !personal.age"
        class="message a-text-regular a-mb-20"
    >
        <p>
            Нет данных для предварительного просмотра.
            Перейдите на страницу <router-link to="/" class="a-link a-link_action">Форма</router-link> и введите данные.
        </p>
    </div>

    <div v-else>
        <div class="preview-item preview-personal a-mb-60">
            <p class="a-heading a-mb-20">Персональные данные</p>
            <p class="a-text-bold">{{ getPersonalInfo }}</p>
        </div>

        <div 
            v-if="children.length"
            class="preview-item preview-children"
        >
            <p class="a-heading a-mb-20">Дети</p>
            <ChildBadges
                v-for="(child, index) in children"
                :key="index"
                v-bind:child="child">
            </ChildBadges>
        </div>
    </div>
    
</template>

<script>
    import ChildBadges from '@/components/ChildBadges'

    export default {
        data() {
            return {
                personal: {
                    name: '',
                    age: ''
                },
                children: []
            }
        },
        created() {
            this.$watch(
                () => this.$route.params,
                () => this.fetchData(),
                { immediate: true }
            )
        },
        computed: {
            getPersonalInfo(){
                return `${this.personal.name}, ${this.personal.age} лет`
            }
        },
        methods: {
            fetchData() {
                this.personal.name = this.personal.age = ''
                this.children = []

                if (this.$route.params.data) {
                    const data = JSON.parse(this.$route.params.data) 
                    this.getData(data)
                }
            },
            getData(params) {
                this.personal.name = params.name
                this.personal.age = params.age
                this.children = params.children
            }
        },
        components: {
            ChildBadges
        }
    }
</script>
