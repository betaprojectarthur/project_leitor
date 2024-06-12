<template>
    <nav class="flex justify-center items-center p-2 bg-gray-900 text-gray-400 h-16 shadow-lg">
        <div class="w-1/4 flex justify-center items-center font-bebas-neue">
            <p class="font-zeyada text-2xl uppercase">Arthur.</p>
        </div>
        <div class="w-3/4">
            <ul class="list-disc list-inside gap-6 flex justify-center items-center pr-5 text-sm">
                <li class="hover:underline hover:text-blue-600">
                    <RouterLink to="/">Início</RouterLink>
                </li>
                <li class="hover:underline hover:text-blue-600">
                    <RouterLink to="/about">Cursos</RouterLink>
                </li>
                <li class="hover:underline hover:text-blue-600">
                    <RouterLink to="/about">Projetos</RouterLink>
                </li>
                <li class="hover:underline hover:text-blue-600">
                    <RouterLink to="/about">Contatos</RouterLink>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script setup></script>
<style scoped></style>