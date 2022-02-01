<template>
    <h4 class="margin-bottom-sm">Blueprint</h4>

    <p class="margin-bottom-md">
        Configure blueprint settings. <a href="#">Learn More</a>
    </p>

    <!-- Framework -->
    <div class="margin-bottom-sm">
        <base-select
            label="Framework"
            :options="['AIDA', 'Bridge']"
        />
    </div>

    <!-- Use Case -->
    <div class="margin-bottom-lg">
        <base-select
            label="Use Case"
            :options="['Checking Account', 'Savings Account', 'Auto Loan']"
        />
    </div>

    <h4 class="margin-bottom-sm">New Blueprint</h4>

    <p class="margin-bottom-md">
        Create a new blueprint based on this page. <a href="#">Learn More</a>
    </p>

    <button v-if="!page.is_blueprint" @click="handleReplicate(page)" class="editor-settings__button btn btn--primary">
        Create New Blueprint from Page
    </button>
</template>

<script>
import { useRouter } from 'vue-router'

// Components
import BaseInput from '@/components/Form/BaseInput.vue'
import BaseSelect from '@/components/Form/BaseSelect.vue'

// Composables
import useToggle from '@/composables/useToggle'
import usePage from '@/composables/usePage'

export default {
    setup() {
        const router = useRouter()
        const { toggle } = useToggle()
        const { page, showPage, replicatePage } = usePage()

        function handleReplicate(page) {
            replicatePage(page.id, true)
            .then(response => {
                router.push({ name: 'dashboard-page-blueprints' })
            }).catch(error => {
                console.log(error)
            })
        }

        return {
            page,
            handleReplicate
        }
    },

    components: {
        BaseInput,
        BaseSelect
    }
}
</script>
