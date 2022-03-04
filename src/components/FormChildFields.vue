<template>
    <div class="forms__row a-mb-10 children">
        <div class="input__field input__field_short a-mr-18">
            <label class="a-label" for="childName">Имя</label>
            <input
                class="a-input a-text-regular"
                type="text"
                name="childName"
            />
        </div>
        <div class="input__field input__field_short a-mr-18">
            <label class="a-label" for="childAge">Возраст</label>
            <input class="a-input a-text-regular" type="text" name="childAge" />
        </div>
        <a
            @click.prevent="$emit('remove-field', id)"
            class="a-link a-link_action"
            >Удалить</a
        >
    </div>
</template>

<script>
    export default {
        props: ['id']
    }
</script>
