<template>
    <Layout>

        <!-- Footer -->
        <template #layout-bottom>
            <div class="font-sans text-[13px] text-gray-400 dark:text-gray-600/90 text-center pb-10">
                &copy; {{ new Date().getFullYear() }} TorchKit. All Rights Reserved.
            </div>
        </template>

    </Layout>
</template>

<script setup>
    import DefaultTheme from 'vitepress/theme';

    const { Layout } = DefaultTheme;
</script>