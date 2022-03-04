<template>
    <div class="preview-item__row a-mb-20">
        <p class="a-badges">
            <span class="a-text-bold">{{ getChildInfo }}</span>
        </p>
    </div>
</template>

<script>
    export default {
        props: ['child'],
        computed: {
            getChildInfo() {
                return `${this.child.name}, ${this.child.age} лет`
            }
        }
    }
</script>