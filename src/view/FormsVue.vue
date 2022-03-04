<template>
    <div class="forms">
        <form 
            autocomplete="off"
            @submit.prevent="onSubmit" 
            class="forms_cover"
        >
            <div class="forms__item personal-data">
                <p class="a-heading a-mb-20">Персональные данные</p>
                <div class="input__field a-mb-10">
                    <label class="a-label" for="personalName">Имя</label>
                    <input
                        class="a-input a-text-regular"
                        type="text"
                        name="personalName"
                    />
                </div>
                <div class="input__field">
                    <label class="a-label" for="personalAge">Возраст</label>
                    <input
                        class="a-input a-text-regular"
                        type="text"
                        name="personalAge"
                    />
                </div>
            </div>
            <div class="forms__item children-data">
                <div class="forms__header a-mb-10">
                    <p class="a-heading">Дети (макс. 5)</p>
                    <button
                        @click="addField"
                        v-bind:class="{ hidden: count > 4 }"
                        type="button"
                        class="a-button a-button_secondary"
                    >
                        <img class="a-mr-5" :src="iconPlus24" alt="icon-plus" />
                        <span>Добавить ребенка</span>
                    </button>
                </div>

                <component
                    v-for="field in fields"
                    v-bind:id="field.id"
                    :is="field.component"
                    :key="field.id"
                    @remove-field="removeField"
                >
                </component>

                <button
                    type="submit"
                    class="a-button a-button_primary a-mt-30 a-mb-100"
                >
                    Сохранить
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import FormChildFields from '@/components/FormChildFields'
import IconPlus24 from '@/assets/icons/plus.png'
export default {
    data() {
        return {
            iconPlus24: IconPlus24,
            fields: [],
            count: 0,
        }
    },
    components: {
        FormChildFields,
    },
    methods: {
        addField() {
            this.count++
            this.fields.push({
                id: this.count,
                component: 'FormChildFields',
            })
        },
        removeField(id) {
            this.fields = this.fields.filter(field => field.id !== id)
            this.count--
        },
        onSubmit() {
            const data = {
                name: document.querySelector('input[name="personalName"]').value,
                age: document.querySelector('input[name="personalAge"]').value,
                children: []
            }

            const fields = document.querySelectorAll('.children')

            if (fields.length) {
                for (const field of fields) {
                    data.children.push({
                        name: field.querySelector('input[name="childName"]').value,
                        age: field.querySelector('input[name="childAge"]').value
                    })
                }
            }

            const sendData = JSON.stringify(data)
            
            this.$router.push({
                name: 'PreviewVue',
                params: {
                    data: sendData
                }
            })
        },
    },
}
</script>
