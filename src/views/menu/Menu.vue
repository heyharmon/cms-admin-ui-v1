<template>
    <div class="editor">
        <div class="editor-wrapper flex padding-x-md padding-top-sm">
            <!-- Center -->
            <main class="editor-wrapper__center">

                <div class="flex flex-row gap-x-sm height-100%" style="align-items: stretch;">
                    <div v-for="item in menu" :key="item.title" class="flex-grow flex-basis-0 padding-xs bg-contrast-lower">
                        <!-- Level 1 -->
                        <div class="flex justify-between items-center">
                            {{ item.title }}
                            <svg class="icon" viewBox="0 0 24 24"><g><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></g></svg>
                        </div>

                        <div v-if="item.children" class="margin-top-sm">
                            <div v-for="child in item.children" :key="child.title" class="bg radius-md shadow-xs margin-bottom-xxs padding-xs">
                                <!-- Level 2 -->
                                <div class="flex justify-between items-center">
                                    <span>{{ child.title }}</span>
                                    <svg class="icon" viewBox="0 0 24 24"><g><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></g></svg>
                                </div>

                                <div v-if="child.children" class="margin-top-sm">
                                    <div v-for="grandchild in child.children" :key="grandchild.title" class="border-bottom margin-bottom-xxxs padding-xxxs">
                                        <span class="text-sm">{{ grandchild.title }}</span>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </main>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'

export default {
    setup() {
        const menu = [
            {
                title: 'Accounts',
                children: [
                    {
                        title: 'Checking',
                        children: [
                            { title: 'Free Checking' },
                            { title: 'Premium Checking' },
                        ]
                    },
                    {
                        title: 'Savings',
                        children: [
                            { title: 'Regular Savings' },
                            { title: 'Money Market' },
                            { title: 'CD' },
                        ]
                    }
                ]
            },

            {
                title: 'Loans',
                children: [
                    {
                        title: 'Vehicle',
                        children: [
                            { title: 'Auto Loan' },
                            { title: 'Recreational' },
                        ]
                    },
                    {
                        title: 'Home',
                        children: []
                    },
                    {
                        title: 'Personal',
                        children: []
                    },
                    {
                        title: 'Student',
                        children: []
                    }
                ]
            },

            {
                title: 'Cards',
                children: [
                    {
                        title: 'Credit',
                        children: []
                    },
                    {
                        title: 'Debit',
                        children: []
                    },
                    {
                        title: 'Prepaid',
                        children: []
                    }
                ]
            },

            {
                title: 'Online & Mobile',
                children: [
                    {
                        title: 'Online',
                        children: []
                    },
                    {
                        title: 'Mobile',
                        children: []
                    }
                ]
            }
        ]

        return {
            menu
        }
    },

    components: {},
}
</script>

<style lang="scss" scoped>
.editor {
    height: 100vh;

    .editor-wrapper {

        .editor-wrapper__left {}

        .editor-wrapper__center {
            display: flex;
            flex-direction: column;
            position: relative;
            width: 75rem;
            margin: 0 auto;
            padding: var(--space-md);
            min-height: calc(90vh - var(--app-ui-header-height));
            overflow: auto;
            z-index: 1;
        }

        .editor-wrapper__right {}
    }
}
</style>
