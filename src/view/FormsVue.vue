<template>
    <div class="forms">
        <form class="forms_cover">
            <div class="forms__item personal-data">
                <p class="a-heading a-mb-20">Персональные данные</p>
                <div class="input__field a-mb-10">
                    <label class="a-label" for="personalName">Имя</label>
                    <input class="a-input a-text-regular" type="text" name="personalName">
                </div>
                <div class="input__field">
                    <label class="a-label" for="personalAge">Возраст</label>
                    <input class="a-input a-text-regular" type="text" name="personalAge">
                </div>
            </div>
            <div class="forms__item children-data">
                <div class="forms__header a-mb-10">
                    <p class="a-heading">Дети (макс. 5)</p>
                    <button class="a-button">
                        <img class="a-mr-5" :src="iconPlus24" alt="icon-plus">
                        <span>Добавить ребенка</span>
                    </button>
                </div>
                <div class="forms__row a-mb-10">
                    <div class="input__field input__field_short a-mr-18">
                        <label class="a-label" for="childName">Имя</label>
                        <input class="a-input a-text-regular" type="text" name="childName">
                    </div>
                    <div class="input__field input__field_short a-mr-18">
                        <label class="a-label" for="childAge">Возраст</label>
                        <input class="a-input a-text-regular" type="text" name="childAge">
                    </div>
                    <a href="" class="a-link a-link_action">Удалить</a>
                </div>
                <div class="forms__row a-mb-10">
                    <div class="input__field input__field_short a-mr-18">
                        <label class="a-label" for="childName">Имя</label>
                        <input class="a-input a-text-regular" type="text" name="childName">
                    </div>
                    <div class="input__field input__field_short a-mr-18">
                        <label class="a-label" for="childAge">Возраст</label>
                        <input class="a-input a-text-regular" type="text" name="childAge">
                    </div>
                    <a href="" class="a-link a-link_action">Удалить</a>
                </div>
                <button class="a-button a-button_primary a-mt-30">Сохранить</button>
            </div>
        </form>
    </div>
</template>

<script>
    import IconPlus24 from '@/assets/icons/plus.png'
    export default {
        data() {
            return {
                iconPlus24: IconPlus24
            }
        }
    }
</script>